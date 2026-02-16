import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ borderBottom: '2px solid var(--accent-gold)', backgroundColor: 'var(--white)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
            Aara Gifts
          </div>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ fontWeight: 500 }}>Home</a>
            <a href="#" style={{ fontWeight: 500 }}>Categories</a>
            <a href="#" style={{ fontWeight: 500 }}>Best Sellers</a>
            <a href="#" style={{ fontWeight: 500 }}>About Us</a>
          </nav>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search gifts..." 
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid var(--accent-gold)',
                outline: 'none',
                width: '200px',
                fontFamily: 'var(--font-body)'
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem' }}>
            <span role="img" aria-label="account" style={{ cursor: 'pointer' }}>👤</span>
            <span role="img" aria-label="wishlist" style={{ cursor: 'pointer' }}>❤️</span>
            <span role="img" aria-label="cart" style={{ cursor: 'pointer' }}>🛒</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
