const MODES = [
  {
    num: '01',
    titre: 'Honoraires au temps passé',
    desc: 'Le temps consacré à votre dossier est facturé sur la base d\'un taux horaire fixé dans une convention d\'honoraires signée avant toute intervention. Cette formule convient aux dossiers contentieux et aux missions de conseil ponctuelles.',
    usage: 'Contentieux, conseil ponctuel',
  },
  {
    num: '02',
    titre: 'Forfait',
    desc: 'Pour les missions à périmètre défini — rédaction d\'un bail, audit d\'un contrat, constitution de société —, un honoraire forfaitaire tout inclus est convenu à l\'avance, garantissant une totale visibilité sur le coût de l\'intervention.',
    usage: 'Rédaction de baux, constitutions, audits',
  },
  {
    num: '03',
    titre: 'Abonnement mensuel',
    desc: 'Pour les entreprises souhaitant bénéficier d\'un accompagnement juridique régulier, une formule d\'abonnement permet d\'accéder à des consultations illimitées sur les questions courantes et un suivi proactif des dossiers en cours.',
    usage: 'Entreprises, accompagnement récurrent',
  },
]

export default function Honoraires() {
  return (
    <section id="honoraires" style={{ background: '#fff', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#2e5a3e' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#2e5a3e', textTransform: 'uppercase' }}>Honoraires</span>
            <div style={{ width: '24px', height: '1px', background: '#2e5a3e' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1e3829', margin: '0 0 1.2rem', lineHeight: 1.20 }}>
            Des honoraires lisibles et adaptés
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#5a5040', lineHeight: 1.75, maxWidth: '540px', margin: '0 auto' }}>
            Chaque intervention fait l&apos;objet d&apos;une convention d&apos;honoraires signée en amont. Le mode de facturation est choisi ensemble selon la nature et la durée de la mission.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {MODES.map((m) => (
            <div key={m.num} style={{ border: '1px solid rgba(30,56,41,0.09)', padding: '2.4rem 2rem', background: '#f3f0e8' }}>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.20em', color: 'rgba(46,90,62,0.50)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {m.num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#1e3829', margin: '0 0 1rem', lineHeight: 1.30 }}>
                {m.titre}
              </h3>
              <p style={{ fontSize: '0.80rem', color: '#5a5040', lineHeight: 1.78, margin: '0 0 1.2rem' }}>{m.desc}</p>
              <p style={{ fontSize: '0.68rem', color: 'rgba(46,90,62,0.65)', letterSpacing: '0.04em' }}>{m.usage}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#1e3829', padding: '2.5rem 3rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', color: '#f3f0e8', margin: '0 0 0.4rem', fontWeight: 400 }}>
              Discuter de votre dossier
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(243,240,232,0.40)', margin: 0 }}>
              Premier entretien · Devis gratuit sur demande
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+33630267143" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#2e5a3e', color: '#f3f0e8',
              padding: '1rem 2rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Appeler
            </a>
            <a href="https://calendly.com/elgart-avocate/30min" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(243,240,232,0.25)', color: 'rgba(243,240,232,0.75)',
              padding: '1rem 2rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Prendre rendez-vous
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
