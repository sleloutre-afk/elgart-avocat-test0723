const GOOGLE_URL = 'https://www.google.com/search?sa=X&sca_esv=fbf2635dd64e7c8e&rlz=1C5CHFA_enFR1032FR1035&biw=1440&bih=636&sxsrf=APpeQnushae77gQhHUjsJI2ViTkP66TvaQ:1785238449960&q=Marie%20Elgart%20-%20Avocate%20Baux%20commerciaux%20et%20Droit%20des%20soci%C3%A9t%C3%A9s%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NzQ0N7S0MDYAMkzMDYyNzEw3MDK-YnTxTSzKTFVwzUlPLCpR0FVwLMtPTixJVXBKLK1QSM7PzU0tSs4EsVNLFFyK85MzD68sObyyGKghs3gRK1WMAQAp6lSzqAAAAA&rldimm=7117198307114703265&tbm=lcl&hl=fr-FR&ved=0CAcQ5foLahcKEwjoztqFpPWVAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2w4ME1rOVNMV2xMVDAxRU1GZEplRFJJVnpNeGRrRRAB'

const AVIS = [
  {
    note: 5,
    texte: 'Maître Elgart nous a accompagnés pour la négociation d\'un bail commercial dans le cadre de l\'ouverture de notre agence. Sa maîtrise du sujet, sa réactivité et sa clarté dans les explications nous ont permis de finaliser le contrat en toute sérénité. Je recommande sans réserve.',
    auteur: 'Thomas R.',
    date: 'mars 2025',
    contexte: 'Bail commercial',
  },
  {
    note: 5,
    texte: 'Excellente avocate pour la constitution de notre SAS et la rédaction du pacte d\'associés. Elle a su anticiper les points de friction entre associés et proposer des solutions pragmatiques. Très disponible et pédagogue. Nous faisons appel à elle régulièrement.',
    auteur: 'Camille D.',
    date: 'janvier 2025',
    contexte: 'Droit des sociétés',
  },
  {
    note: 5,
    texte: 'Intervention rapide et très professionnelle pour la cession de notre fonds de commerce. Maître Elgart a géré l\'ensemble de la documentation juridique avec rigueur et nous a guidés à chaque étape. Une avocate sérieuse à qui l\'on peut faire entièrement confiance.',
    auteur: 'Sophie M.',
    date: 'novembre 2024',
    contexte: 'Cession de fonds',
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '1.2rem' }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#2e5a3e">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Avis() {
  return (
    <section id="avis" style={{ background: '#ffffff', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#2e5a3e' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#2e5a3e', textTransform: 'uppercase' }}>Avis clients</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1e3829', margin: 0, lineHeight: 1.20 }}>
              Ce qu&apos;ils en disent
            </h2>
          </div>
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#2e5a3e', textDecoration: 'none',
              borderBottom: '1px solid rgba(46,90,62,0.35)', paddingBottom: '2px',
            }}
          >
            Voir tous les avis
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {AVIS.map((a, i) => (
            <div key={i} style={{ background: '#e9ebec', padding: '2.5rem', border: '1px solid #cdd1d4', display: 'flex', flexDirection: 'column' }}>
              <Stars n={a.note} />
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.88rem', color: '#1e3829', lineHeight: 1.75, fontStyle: 'italic', flex: 1, marginBottom: '2rem' }}>
                &ldquo;{a.texte}&rdquo;
              </p>
              <div style={{ borderTop: '1px solid #cdd1d4', paddingTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <p style={{ fontSize: '0.78rem', color: '#1e3829', fontWeight: 500, margin: '0 0 0.15rem' }}>{a.auteur}</p>
                  <p style={{ fontSize: '0.60rem', letterSpacing: '0.10em', color: 'rgba(46,90,62,0.50)', textTransform: 'uppercase' }}>{a.contexte}</p>
                </div>
                <span style={{ fontSize: '0.60rem', color: 'rgba(46,90,62,0.40)' }}>{a.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note globale */}
        <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#2e5a3e">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <p style={{ fontSize: '0.78rem', color: '#445a4e' }}>
            <strong style={{ color: '#1e3829', fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontStyle: 'italic' }}>5,0</strong>
            {' '}· noté sur Google
          </p>
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" style={{
            fontSize: '0.60rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(46,90,62,0.60)', textDecoration: 'none',
            borderBottom: '1px solid rgba(46,90,62,0.25)', paddingBottom: '1px',
          }}>
            Voir tous les avis Google
          </a>
        </div>

      </div>
    </section>
  )
}
