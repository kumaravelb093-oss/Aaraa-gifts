import React from 'react';

const Hero: React.FC = () => {
    return (
        <section style={{
            backgroundColor: 'var(--text-primary)',
            color: 'var(--white)',
            padding: 'var(--spacing-xl) 0',
            textAlign: 'center'
        }}>
            <div className="container">
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
                    Curated Excellence in Every Gift
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
                    Discover a premium collection of Corporate, Return, and Personalized gifts designed to make every occasion unforgettable.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn-primary">Shop Now</button>
                    <button style={{
                        border: '2px solid var(--accent-gold)',
                        color: 'var(--accent-gold)',
                        padding: '0.75rem 2rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Download Catalog
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
