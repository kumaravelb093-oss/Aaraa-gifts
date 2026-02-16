import React from 'react';

const categories = [
    { id: 1, name: 'Corporate Gifts', emoji: '🎁', color: '#FFF8E1' },
    { id: 2, name: 'Return Gifts', emoji: '💝', color: '#F3E5F5' },
    { id: 3, name: 'Personalized Gifts', emoji: '✨', color: '#E1F5FE' },
    { id: 4, name: 'Traditional Handicrafts', emoji: '🏺', color: '#E8F5E9' },
    { id: 5, name: 'Premium Gift Sets', emoji: '🎀', color: '#FBE9E7' },
    { id: 6, name: 'Occasion Boxes', emoji: '📦', color: '#EFEBE9' }
];

const Categories: React.FC = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
                    Explore Our <span className="text-gold">Collections</span>
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {categories.map(cat => (
                        <div key={cat.id} style={{
                            backgroundColor: cat.color,
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            border: '2px solid var(--accent-gold)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{cat.emoji}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{cat.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                Exquisite {cat.name.toLowerCase()} for your special moments.
                            </p>
                            <button style={{
                                fontWeight: 600,
                                borderBottom: '2px solid var(--accent-gold)',
                                paddingBottom: '2px'
                            }}>
                                Shop Category
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
