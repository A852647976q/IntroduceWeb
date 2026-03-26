import React from 'react';
import Header from './components/Header';
import PostCreator from './components/PostCreator';
import SongList from './components/SongList';

function App() {
  return (
    <div className="container">
      {/* Background Ambience */}
      <div style={{
        position: 'fixed',
        top: '-20%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
        zIndex: -1,
        pointerEvents: 'none',
        filter: 'blur(80px)'
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-20%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
        zIndex: -1,
        pointerEvents: 'none',
        filter: 'blur(80px)'
      }} />

      {/* Part 1: Info */}
      <Header />

      <main style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Part 2: Post/Interaction */}
        <section style={{ flex: 2 }}>
          <PostCreator />
        </section>

        {/* Part 3: Songs */}
        <section style={{ flex: 1 }}>
          <SongList />
        </section>
      </main>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#52525b', padding: '2rem' }}>
        <p>© 2026 江芮菁 Personal Profile</p>
      </footer>
    </div>
  );
}

export default App;
