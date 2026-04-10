import Hero from '../Hero.jsx';

export default function Home() {
  return (
    <>
      {/* Component 1: The Hero (Luxury Intro) */}
      <Hero />

      {/* Component 2: A Story/Archive Section (Editorial Look) */}
      <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#faf9f8' }}>
        
        <h2 style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '24px', /* Scaled down for elegance */
          fontWeight: '400',
          letterSpacing: '0.15em', 
          textTransform: 'uppercase',
          color: '#1a1a1a',
          marginBottom: '24px'
        }}>
          The Jade Archive
        </h2>
        
        <p style={{ 
          maxWidth: '500px', /* Narrower column makes it easier to read */
          margin: '0 auto 32px auto', 
          lineHeight: '1.8', 
          color: '#666666', /* Softer grey contrast */
          fontSize: '14px', /* Standard luxury body size */
          fontWeight: '300'
        }}>
          Discover a curated collection of Hetian jade and 24k gold artifacts, 
          preserved for the modern collector.
        </p>
        
        <button style={{ 
          background: 'none', 
          border: '1px solid #e0e0e0', /* Very faint, delicate border */
          padding: '12px 32px', 
          cursor: 'pointer',
          textTransform: 'uppercase',
          fontSize: '10px', /* Tiny button text is a classic luxury trope */
          letterSpacing: '0.2em',
          color: '#000000',
          transition: 'border-color 0.3s ease'
        }}>
          Explore History
        </button>
        
      </section>
    </>
  );
}