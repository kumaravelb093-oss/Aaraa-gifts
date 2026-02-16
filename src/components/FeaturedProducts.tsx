import React from 'react';

const products = [
    { id: 1, name: 'Antique Brass Diya', price: '₹1,299', image: '🏺' },
    { id: 2, name: 'Royal Silver Coin Set', price: '₹3,499', image: '🪙' },
    { id: 3, name: 'Handcrafted Jute Tote', price: '₹799', image: '👜' },
    { id: 4, name: 'Luxury Dry Fruit Box', price: '₹2,199', image: '🍱' }
];

const FeaturedProducts: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem' }}>Best <span className="text-gold">Sellers</span></h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Our most loved gifts chosen by customers.</p>
                    </div>
                    <button style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>View All Products &rarr;</button>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {products.map(product => (
                        <div key={product.id} style={{
                            border: '1px solid #eee',
                            padding: '1.5rem',
                            backgroundColor: 'var(--bg-primary)',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                height: '200px',
                                backgroundColor: 'var(--white)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '4rem',
                                marginBottom: '1.5rem',
                                border: '1px solid #f0f0f0'
                            }}>
                                {product.image}
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{product.name}</h4>
                            <p style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem' }}>
                                {product.price}
                            </p>
                            <button style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '1px solid var(--text-primary)',
                                fontWeight: 600,
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                                    e.currentTarget.style.color = 'var(--white)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
