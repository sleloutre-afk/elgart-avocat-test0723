const STATS = [
  { value: '2022', label: 'Prestation de serment' },
  { value: 'Case 452', label: 'Barreau de Bordeaux' },
  { value: 'FR / EN', label: 'Consultations bilingues' },
  { value: 'IDA', label: 'Institut du droit des affaires' },
]

export default function StatsBar() {
  return (
    <div style={{ background: '#dde0e2', borderTop: '1px solid #cdd1d4', borderBottom: '1px solid #cdd1d4' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '1.8rem 1.2rem',
              borderRight: i < 3 ? '1px solid #cdd1d4' : 'none',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontStyle: 'italic', color: '#1e3829', marginBottom: '0.3rem' }}>
                {s.value}
              </p>
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(46,90,62,0.55)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
