import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', background: '#162a1e' }}>
      <img
        src="/hero.png"
        alt=""
        aria-hidden
        className="ken-burns"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(22,42,30,0.94) 0%, rgba(22,42,30,0.78) 52%, rgba(22,42,30,0.45) 100%)',
      }} />

      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '580px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '28px', height: '1px', background: '#2e5a3e' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(46,90,62,0.90)', textTransform: 'uppercase' }}>
              Avocate au Barreau de Bordeaux
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', margin: '0 0 1.6rem' }}>
            <img
              src="/logo-elgart.svg"
              alt=""
              aria-hidden
              style={{ height: '72px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.90 }}
            />
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 400, color: '#f3f0e8',
              lineHeight: 1.18, margin: 0,
            }}>
              Marie Elgart
            </h1>
          </div>

          <p style={{
            fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)',
            color: 'rgba(243,240,232,0.65)',
            lineHeight: 1.78, margin: '0 0 0.8rem',
          }}>
            Baux d&apos;entreprise · Droit des sociétés · M&amp;A
          </p>
          <p style={{
            fontSize: 'clamp(0.78rem, 1.2vw, 0.88rem)',
            color: 'rgba(243,240,232,0.42)',
            lineHeight: 1.78, margin: '0 0 2.8rem',
          }}>
            Droit des contrats · Droit international des affaires
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+33630267143" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#2e5a3e', color: '#f3f0e8',
              padding: '1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Appeler
            </a>
            <a href="https://calendly.com/elgart-avocate/30min" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid rgba(243,240,232,0.30)', color: 'rgba(243,240,232,0.75)',
              padding: '1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
