import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-charcoal" style={{ padding: 'var(--spacing-lg) 0 2rem' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>Aara Gifts</h3>
                        <p style={{ opacity: 0.8 }}>
                            Premium gifting solutions for corporate events, weddings, and personal celebrations. Delivering joy through curated excellence.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.8 }}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Collections</a></li>
                            <li><a href="#">Corporate Gifting</a></li>
                            <li><a href="#">Bulk Orders</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Customer Support</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.8 }}>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Returns & Exchanges</a></li>
                            <li><a href="#">Track Order</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Newsletter</h4>
                        <p style={{ opacity: 0.8, marginBottom: '1rem' }}>Subscribe to get special offers and first look at new arrivals.</p>
                        <div style={{ display: 'flex' }}>
                            <input
                                type="email"
                                placeholder="Email address"
                                style={{
                                    padding: '0.5rem 1rem',
                                    flex: 1,
                                    border: 'none',
                                    outline: 'none'
                                }}
                            />
                            <button style={{
                                backgroundColor: 'var(--accent-gold)',
                                color: 'white',
                                padding: '0.5rem 1rem'
                            }}>
                                Join
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid rgba(212, 175, 55, 0.3)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    opacity: 0.6,
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} Aara Gifts. All Rights Reserved. Professional Gifting Worldwide.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
