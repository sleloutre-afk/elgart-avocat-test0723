'use client'

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#1e3829', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>

      {/* Office background — right half */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '42%', height: '100%',
        backgroundImage: 'url(/office.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #1e3829 0%, rgba(22,42,30,0.50) 60%, rgba(22,42,30,0.25) 100%)',
        }} />
        {/* Logo overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img
            src="/logo-elgart.svg"
            alt=""
            aria-hidden
            style={{ width: '120px', height: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.18 }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative' }}>
        <div style={{ maxWidth: '520px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(233,235,236,0.35)' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(233,235,236,0.55)', textTransform: 'uppercase' }}>Contact</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#e9ebec', margin: '0 0 3.5rem', lineHeight: 1.20 }}>
            Prendre contact
          </h2>

          {/* Coordonnées */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem', marginBottom: '3rem' }}>

            <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', border: '1px solid rgba(233,235,236,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(233,235,236,0.65)" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .98h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.60rem', letterSpacing: '0.18em', color: 'rgba(233,235,236,0.45)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Téléphone</p>
                <a href="tel:+33630267143" style={{ fontSize: '0.92rem', color: '#e9ebec', textDecoration: 'none', fontFamily: 'var(--font-playfair)' }}>
                  06 30 26 71 43
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', border: '1px solid rgba(233,235,236,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(233,235,236,0.65)" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.60rem', letterSpacing: '0.18em', color: 'rgba(233,235,236,0.45)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Email</p>
                <a href="mailto:marie@elgart-avocate.fr" style={{ fontSize: '0.92rem', color: '#e9ebec', textDecoration: 'none', fontFamily: 'var(--font-playfair)' }}>
                  marie@elgart-avocate.fr
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', border: '1px solid rgba(233,235,236,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(233,235,236,0.65)" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.60rem', letterSpacing: '0.18em', color: 'rgba(233,235,236,0.45)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Adresse</p>
                <p style={{ fontSize: '0.85rem', color: 'rgba(233,235,236,0.85)', lineHeight: 1.60, margin: 0 }}>
                  23 Parvis des Chartrons<br />
                  33074 Bordeaux
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/elgart-avocate/30min" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#2e5a3e', color: '#e9ebec',
              padding: '1.1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Prendre rendez-vous
            </a>
            <a href="tel:+33630267143" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(233,235,236,0.40)', color: 'rgba(233,235,236,0.85)',
              padding: '1.1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Appeler
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
