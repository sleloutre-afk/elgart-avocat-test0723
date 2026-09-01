'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const LINKS = [
  { href: '#cabinet', label: 'Cabinet' },
  { href: '#domaines', label: 'Domaines' },
  { href: '#honoraires', label: 'Honoraires' },
  { href: '#ressources', label: 'Ressources' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const textDark = '#1e3829'
  const textLight = '#f3f0e8'
  const accent = '#2e5a3e'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s',
      background: scrolled ? 'rgba(233,235,236,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 24px rgba(30,56,41,0.08)' : 'none',
    }}>
      <div className="max-w-6xl mx-auto px-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-elgart.svg" alt="Marie Elgart Avocate" style={{ height: '38px', width: 'auto', filter: scrolled ? 'none' : 'brightness(0) invert(1)', transition: 'filter 0.3s' }} />
          <div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.88rem', fontWeight: 400, color: scrolled ? textDark : textLight, margin: 0, lineHeight: 1.2, transition: 'color 0.3s' }}>Marie Elgart</p>
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: scrolled ? 'rgba(46,90,62,0.85)' : 'rgba(46,90,62,0.90)', margin: 0, textTransform: 'uppercase', transition: 'color 0.3s' }}>Avocate · Bordeaux</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="nav-desktop" style={{ gap: '2.4rem' }}>
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: scrolled ? textDark : 'rgba(243,240,232,0.85)', textDecoration: 'none', transition: 'color 0.3s' }}>
              {label}
            </Link>
          ))}
          <a href="tel:+33630267143" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', background: accent, color: textLight, padding: '0.55rem 1.3rem', textDecoration: 'none', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            06 30 26 71 43
          </a>
        </div>

        {/* Burger */}
        <button className="nav-burger" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px' }}
          aria-label="Menu">
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: scrolled ? textDark : textLight, transition: 'transform 0.2s, opacity 0.2s',
              transform: i === 0 && open ? 'rotate(45deg) translate(4px,4px)' : i === 2 && open ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
              opacity: i === 1 && open ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(233,235,236,0.97)', padding: '8px 24px 24px', borderTop: '1px solid rgba(30,56,41,0.08)' }}>
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: textDark, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid rgba(30,56,41,0.07)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
          <a href="tel:+33630267143" onClick={() => setOpen(false)}
            style={{ display: 'block', marginTop: '1rem', padding: '0.8rem 1.2rem', background: accent, color: textLight, fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center' }}>
            06 30 26 71 43
          </a>
        </div>
      )}
    </nav>
  )
}
