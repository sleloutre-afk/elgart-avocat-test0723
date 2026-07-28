const STATS = [
  { value: '2022', label: 'Prestation de serment' },
  { value: 'Case 452', label: 'Barreau de Bordeaux' },
  { value: 'FR / EN', label: 'Consultations bilingues' },
  { value: 'IDA', label: 'Institut du droit des affaires' },
]

export default function StatsBar() {
  return (
    <div style={{ background: '#284d36', borderTop: '1px solid rgba(46,90,62,0.20)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '1.8rem 1.2rem',
              borderRight: i < 3 ? '1px solid rgba(46,90,62,0.20)' : 'none',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontStyle: 'italic', color: 'rgba(243,240,232,0.75)', marginBottom: '0.3rem' }}>
                {s.value}
              </p>
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(243,240,232,0.38)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
