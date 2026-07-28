import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1e3829', borderTop: '1px solid rgba(233,235,236,0.10)', padding: '3.5rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <img
              src="/logo-elgart.svg"
              alt="Marie Elgart Avocate"
              style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.50 }}
            />
            <div style={{ width: '1px', height: '28px', background: 'rgba(233,235,236,0.18)' }} />
            <p style={{ fontSize: '0.60rem', letterSpacing: '0.14em', color: 'rgba(233,235,236,0.40)', textTransform: 'uppercase', margin: 0 }}>
              Barreau de Bordeaux · Case 452
            </p>
          </div>

          <nav style={{ display: 'flex', gap: '2.2rem', flexWrap: 'wrap' }}>
            {[
              { href: '#cabinet', label: 'Cabinet' },
              { href: '#domaines', label: 'Domaines' },
              { href: '#honoraires', label: 'Honoraires' },
              { href: '/ressources', label: 'Ressources' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontSize: '0.60rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(233,235,236,0.45)', textDecoration: 'none',
              }}>
                {link.label}
              </Link>
            ))}
          </nav>

        </div>

        <div style={{ marginTop: '2.5rem', paddingTop: '1.8rem', borderTop: '1px solid rgba(233,235,236,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.60rem', color: 'rgba(233,235,236,0.30)', letterSpacing: '0.06em', margin: 0 }}>
            © {new Date().getFullYear()} Marie Elgart — Avocate au Barreau de Bordeaux
          </p>
          <p style={{ fontSize: '0.60rem', color: 'rgba(233,235,236,0.22)', margin: 0 }}>
            Les informations figurant sur ce site ont un caractère général et ne constituent pas un conseil juridique.
          </p>
        </div>

      </div>
    </footer>
  )
}
