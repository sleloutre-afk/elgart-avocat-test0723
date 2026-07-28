import Image from 'next/image'

const FEATURED = {
  svg: '/locataire.svg',
  titre: 'Baux d\'entreprise',
  desc: 'Rédaction, négociation et suivi des baux commerciaux, professionnels, dérogatoires et d\'habitation. Conseil aux preneurs et aux bailleurs à chaque étape du contrat, du projet de bail jusqu\'au contentieux locatif.',
  points: ['Baux commerciaux et professionnels', 'Baux dérogatoires', 'Renouvellement et résiliation', 'Contentieux locatif'],
}

const DOMAINES = [
  {
    svg: '/societes.svg',
    titre: 'Droit des sociétés',
    desc: 'Constitution, modification et dissolution de sociétés, gouvernance, pactes d\'associés, augmentations de capital. Accompagnement des dirigeants dans la vie juridique de leur entreprise.',
  },
  {
    svg: '/commercial.svg',
    titre: 'M&A & Private equity',
    desc: 'Cessions et acquisitions de sociétés, opérations de LBO, levées de fonds, due diligence juridique. Rédaction et négociation des protocoles d\'accord et garanties d\'actif et de passif.',
  },
  {
    svg: '/redaction.svg',
    titre: 'Droit des contrats',
    desc: 'Rédaction et audit de contrats commerciaux, contrats de distribution, accords de confidentialité, conventions entre associés. Prévention et résolution des litiges contractuels.',
  },
  {
    svg: '/europe.svg',
    titre: 'Droit international des affaires',
    desc: 'Conseil aux entreprises opérant à l\'international : contrats transfrontaliers, structuration d\'opérations cross-border, droit applicable et clauses de résolution des différends.',
  },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ background: '#e9ebec', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#2e5a3e' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#2e5a3e', textTransform: 'uppercase' }}>Domaines d&apos;intervention</span>
            <div style={{ width: '24px', height: '1px', background: '#2e5a3e' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1e3829', margin: 0, lineHeight: 1.20 }}>
            Droit des affaires & immobilier d&apos;entreprise
          </h2>
        </div>

        {/* Featured */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginBottom: '1.5rem', background: '#1e3829', border: '1px solid rgba(46,90,62,0.20)' }}>
          <div style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Image src={FEATURED.svg} alt="" width={28} height={28} style={{ opacity: 0.70, filter: 'invert(1)' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(233,235,236,0.60)', textTransform: 'uppercase' }}>Compétence principale</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontWeight: 400, color: '#e9ebec', margin: '0 0 1.2rem', lineHeight: 1.25 }}>
              {FEATURED.titre}
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'rgba(233,235,236,0.60)', lineHeight: 1.80 }}>
              {FEATURED.desc}
            </p>
          </div>
          <div style={{ padding: '3rem', borderLeft: '1px solid rgba(233,235,236,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
            {FEATURED.points.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                <div style={{ width: '20px', height: '1px', background: 'rgba(46,90,62,0.55)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: 'rgba(233,235,236,0.70)' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#cdd1d4' }}>
          {DOMAINES.map((d) => (
            <div key={d.titre} className="card-hover" style={{ background: '#ffffff', padding: '2rem 1.6rem' }}>
              <Image src={d.svg} alt="" width={28} height={28} style={{ marginBottom: '1.2rem', opacity: 0.60 }} />
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontWeight: 400, color: '#1e3829', margin: '0 0 0.9rem', lineHeight: 1.30 }}>
                {d.titre}
              </h3>
              <p style={{ fontSize: '0.76rem', color: '#445a4e', lineHeight: 1.72 }}>{d.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
