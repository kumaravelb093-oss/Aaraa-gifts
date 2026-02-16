import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <section className="section" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--white)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
              Custom & Bulk Orders
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.8 }}>
              Planning a corporate event or a grand wedding? We specialize in bulk gifting
              with custom branding and exquisite packaging.
            </p>
            <button className="btn-primary">Enquire Now</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
