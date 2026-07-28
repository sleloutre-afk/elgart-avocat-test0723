import { notFound } from 'next/navigation'
import { articles, getArticleBySlug } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return { title: `${article.titre} — Marie Elgart Avocate` }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const paragraphs = article.contenu.split('\n\n')

  return (
    <>
      <Navbar />
      <main style={{ background: '#f3f0e8', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '7rem' }}>
        <div className="max-w-3xl mx-auto px-6">

          <div style={{ marginBottom: '3.5rem' }}>
            <Link href="/ressources" style={{
              fontSize: '0.60rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(46,90,62,0.60)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '2.5rem',
            }}>
              ← Toutes les notes
            </Link>

            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(46,90,62,0.65)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {article.categorie}
            </p>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 400, color: '#1e3829', margin: '0 0 1.5rem', lineHeight: 1.25 }}>
              {article.titre}
            </h1>
            <p style={{ fontSize: '0.78rem', color: 'rgba(46,90,62,0.55)', marginBottom: '2.5rem' }}>
              {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <div style={{ height: '1px', background: 'rgba(30,56,41,0.10)' }} />
          </div>

          <div style={{ fontSize: '0.88rem', color: '#3a3530', lineHeight: 1.85 }}>
            {paragraphs.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.15rem', fontWeight: 400, color: '#1e3829', margin: '2.5rem 0 1rem', lineHeight: 1.30 }}>
                    {block.replace('## ', '')}
                  </h2>
                )
              }
              if (block.startsWith('---')) {
                return <hr key={i} style={{ border: 'none', borderTop: '1px solid rgba(30,56,41,0.10)', margin: '3rem 0' }} />
              }
              const withLinks = block.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                `<a href="$2" style="color:#2e5a3e;text-decoration:underline;text-underline-offset:3px">$1</a>`
              )
              return <p key={i} style={{ marginBottom: '1.4rem' }} dangerouslySetInnerHTML={{ __html: withLinks }} />
            })}
          </div>

          <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#1e3829' }}>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', color: '#f3f0e8', margin: '0 0 0.5rem' }}>
              Une question sur ce sujet ?
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(243,240,232,0.45)', margin: '0 0 1.8rem' }}>
              Maître Marie Elgart peut vous accompagner sur votre situation spécifique.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://calendly.com/elgart-avocate/30min" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#2e5a3e', color: '#f3f0e8',
                padding: '0.9rem 2rem', textDecoration: 'none',
                fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>
                Prendre rendez-vous
              </a>
              <a href="tel:+33630267143" style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid rgba(243,240,232,0.20)', color: 'rgba(243,240,232,0.65)',
                padding: '0.9rem 2rem', textDecoration: 'none',
                fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>
                Appeler
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
