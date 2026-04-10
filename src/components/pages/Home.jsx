import Hero from '../Hero.jsx';

export default function Home() {
  return (
    <>
      {/* Component 1: The Hero (Luxury Intro) */}
      <Hero />

      {/* Component 2: A Story/Archive Section (Editorial Look) */}
      <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#f9f8f6' }}>
        <h2 style={{ fontFamily: 'serif', letterSpacing: '2px', textTransform: 'uppercase' }}>
          The Jade Archive
        </h2>
        <p style={{ maxWidth: '600px', margin: '20px auto', lineHeight: '1.6', color: '#444' }}>
          Discover a curated collection of Hetian jade and 24k gold artifacts, 
          preserved for the modern collector.
        </p>
        <button style={{ 
          background: 'none', 
          border: '1px solid black', 
          padding: '10px 30px', 
          cursor: 'pointer',
          textTransform: 'uppercase',
          fontSize: '12px',
          letterSpacing: '2px'
        }}>
          Explore History
        </button>
      </section>

      {/* Social Section - Refactored to be cleaner */}
      <section id="social" style={{ padding: '40px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '14px', letterSpacing: '1px' }}>Connect with Yu Studios</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <a href="https://github.com" style={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>INSTAGRAM</a>
          <a href="https://x.com" style={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>WEIBO</a>
        </div>
      </section>
    </>
  );
}