import React from 'react';

const categories = [
    { id: 1, name: 'Corporate Gifts', emoji: '🎁', color: '#FDF7E2' },
    { id: 2, name: 'Return Gifts', emoji: '🎁', color: '#FDF7E2' },
    { id: 3, name: 'Personalised Gifts', emoji: '🎁', color: '#FDF7E2' },
    { id: 4, name: 'Printables', emoji: '🖨️', color: '#FDF7E2' },
    { id: 5, name: 'Home decor', emoji: '🏡', color: '#FDF7E2' },
    { id: 6, name: 'Fashion apparel', emoji: '👗', color: '#FDF7E2' }
];

const Categories: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', color: '#4A142C', marginBottom: '0.5rem' }}>
                        Top Selling Return Gifts
                    </h2>
                    <p style={{ color: '#4A142C', opacity: 0.8 }}>A better way to say thanks</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: '1rem',
                    '@media (max-width: 1024px)': {
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    },
                    '@media (max-width: 600px)': {
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }
                } as any}>
                    {categories.map(cat => (
                        <div key={cat.id} style={{
                            backgroundColor: cat.color,
                            padding: '1.5rem 1rem',
                            textAlign: 'center',
                            borderRadius: '15px',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '200px'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                fontSize: '2.5rem',
                                marginBottom: '1rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                width: '100%',
                                aspectRatio: '1',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '10px',
                                marginBottom: '1rem'
                            }}>
                                {cat.emoji}
                            </div>
                            <h3 style={{
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#4A142C',
                                margin: 0
                            }}>
                                {cat.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
