export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 'bold', color: '#e91e63', margin: 0, lineHeight: 1 }}>404</h1>
      <p style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '16px', color: '#1a1a2e' }}>Page Not Found</p>
      <p style={{ color: '#888', marginTop: '8px', marginBottom: '32px' }}>The page you're looking for doesn't exist.</p>
      <a href="/" style={{ background: 'linear-gradient(135deg, #e91e63, #c2185b)', color: 'white', padding: '14px 32px', borderRadius: '100px', fontWeight: 700, textDecoration: 'none', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Go Back Home
      </a>
    </div>
  )
}
