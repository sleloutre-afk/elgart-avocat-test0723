import Image from 'next/image'

const FORMATION = [
  { diplome: 'CAPA Droit des affaires', mention: 'Certificat d\'aptitude à la profession d\'avocat', ecole: 'HEDAC — Barreaux du ressort de la Cour d\'appel de Versailles' },
  { diplome: 'Master 2', mention: 'International Law and Legal Studies', ecole: 'Université de Strasbourg' },
  { diplome: 'Master 2', mention: 'Droit des Personnes et des Familles — Mention bien, Major', ecole: 'Université de Bordeaux' },
  { diplome: 'Master 1', mention: 'Droit privé général', ecole: 'Université de Bordeaux' },
]

export default function Cabinet() {
  return (
    <section id="cabinet" style={{ background: '#ffffff', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '5rem', alignItems: 'start' }}>

          {/* Photo */}
          <div>
            <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
              <Image
                src="/elgart.png"
                alt="Maître Marie Elgart, avocate à Bordeaux"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '35%',
                background: 'linear-gradient(to top, rgba(30,56,41,0.45) 0%, transparent 100%)',
              }} />
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '1.5rem',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#2e5a3e', padding: '0.4rem 0.9rem',
              }}>
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: '#ffffff', textTransform: 'uppercase' }}>
                  Serment 2022
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#2e5a3e' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#2e5a3e', textTransform: 'uppercase' }}>Le Cabinet</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1e3829', margin: '0 0 2rem', lineHeight: 1.20 }}>
              Maître Marie Elgart
            </h2>

            <p style={{ fontSize: '0.87rem', color: '#445a4e', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              Maître Marie Elgart est avocate au Barreau de Bordeaux depuis 2022. Titulaire d&apos;un Master 2 en droit international (Université de Strasbourg) et d&apos;un CAPA mention Droit des affaires obtenu à Versailles, elle a construit une pratique résolument tournée vers les entreprises et les opérateurs économiques.
            </p>
            <p style={{ fontSize: '0.87rem', color: '#445a4e', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              Après une expérience dans plusieurs cabinets parisiens spécialisés en M&amp;A et droit des sociétés, elle exerce à Bordeaux une pratique pluridisciplinaire centrée sur l&apos;immobilier d&apos;entreprise — baux commerciaux, professionnels et dérogatoires — et sur l&apos;accompagnement juridique des sociétés dans leur développement et leurs opérations de croissance.
            </p>
            <p style={{ fontSize: '0.87rem', color: '#445a4e', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Membre de l&apos;Institut du droit des affaires du Barreau de Bordeaux, elle intervient en français et en anglais, aussi bien en conseil qu&apos;en contentieux.
            </p>

            {/* Formation */}
            <div style={{ borderTop: '1px solid #cdd1d4', paddingTop: '2rem' }}>
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(46,90,62,0.65)', textTransform: 'uppercase', marginBottom: '1.4rem' }}>
                Formation
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {FORMATION.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'baseline' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2e5a3e', flexShrink: 0, marginTop: '6px' }} />
                    <div>
                      <span style={{ fontSize: '0.80rem', color: '#1e3829', fontWeight: 500 }}>{f.diplome}</span>
                      <span style={{ fontSize: '0.80rem', color: '#445a4e' }}> · {f.mention}</span>
                      <p style={{ fontSize: '0.68rem', color: 'rgba(46,90,62,0.45)', marginTop: '0.1rem' }}>{f.ecole}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
