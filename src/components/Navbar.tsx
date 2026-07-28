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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s',
      background: scrolled ? 'rgba(243,240,232,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 24px rgba(30,56,41,0.08)' : 'none',
    }}>
      <div className="max-w-6xl mx-auto px-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', textDecoration: 'none' }}>
          <img
            src="/logo-elgart.svg"
            alt="Marie Elgart Avocate"
            style={{
              height: '38px', width: 'auto',
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              transition: 'filter 0.3s',
            }}
          />
          <div>
            <p style={{
              fontFamily: 'var(--font-playfair)', fontSize: '0.88rem', fontWeight: 400,
              color: scrolled ? '#1e3829' : '#f3f0e8',
              margin: 0, lineHeight: 1.2, transition: 'color 0.3s',
            }}>Marie Elgart</p>
            <p style={{
              fontSize: '0.55rem', letterSpacing: '0.18em',
              color: scrolled ? 'rgba(46,90,62,0.85)' : 'rgba(46,90,62,0.90)',
              margin: 0, textTransform: 'uppercase', transition: 'color 0.3s',
            }}>Avocate · Bordeaux</p>
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.4rem' }}>
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: scrolled ? '#1e3829' : 'rgba(243,240,232,0.85)',
              textDecoration: 'none', transition: 'color 0.3s',
            }}>
              {label}
            </Link>
          ))}
          <a href="tel:+33630267143" style={{
            fontSize: '0.65rem', letterSpacing: '0.12em',
            background: '#2e5a3e', color: '#f3f0e8',
            padding: '0.55rem 1.3rem', textDecoration: 'none', textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            06 30 26 71 43
          </a>
        </div>
      </div>
    </nav>
  )
}
