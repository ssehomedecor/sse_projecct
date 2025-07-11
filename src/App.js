
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';



function App() {
  return (
    <Router>
      <div className="App">
        {/* Decorative SVGs for background */}
        <svg className="decor-svg top-left" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="160" r="160" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(160 160) scale(160)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffecd2" />
              <stop offset="1" stopColor="#fcb69f" />
            </radialGradient>
          </defs>
        </svg>
        <svg className="decor-svg bottom-right" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="160" r="160" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(160 160) scale(160)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c3cfe2" />
              <stop offset="1" stopColor="#f5f7fa" />
            </radialGradient>
          </defs>
        </svg>
        <nav className="navbar" style={{paddingLeft: 0, paddingRight: 0}}>
          <div className="logo" style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.4rem', width: '100%', justifyContent: 'flex-start', marginLeft: 0, paddingLeft: 0}}>
            <img
              src={require('./images/logo-main.svg').default}
              alt="Logo"
              className="logo-img-responsive logo-hide-mobile"
              style={{width: 32, height: 32, borderRadius: 8, boxShadow: '0 1px 4px rgba(44,62,80,0.10)', marginLeft: 0}}
            />
            <span style={{display: 'inline-block'}}>&nbsp;&nbsp;</span>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, marginLeft: 0, paddingLeft: 0}}>
              <span style={{fontSize: '1.08rem', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: 0}}>SSE Home Decor</span>
              <span style={{fontSize: '0.98rem', color: '#1976d2', fontWeight: 500, marginLeft: 0, whiteSpace: 'nowrap'}}>
                <span role="img" aria-label="location">📍</span> Hyderabad, Telangana
              </span>
            </div>
          </div>
          {/* Contact info for mobile (phone and email in two rows, above nav-links/dropdown) */}
          <div className="mobile-header-right" style={{display: 'none', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '100%', gap: '0.3rem', marginTop: '-10px'}}>
            <span className="contact-mobile" style={{fontSize: '0.92rem', fontWeight: 500, color: '#d32f2f', whiteSpace: 'nowrap', paddingLeft: 0, marginLeft: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span role="img" aria-label="phone">📞</span> +91 7207147729&nbsp;</span>
          </div>
          <div style={{marginLeft: 0, paddingLeft: 0}}>
            {/* Dropdown nav for mobile only, normal nav-links for desktop */}
            <div className="mobile-nav-dropdown" style={{display: 'none', alignItems: 'center', margin: 0, padding: 0}}>
              <select style={{width: 28, height: 28, padding: 0, fontSize: '0.95rem', borderRadius: 4, border: '1px solid #1976d2', color: '#1976d2', background: '#fff', marginTop: 4, marginBottom: 4, backgroundImage: 'none', maxWidth: 40, minWidth: 28, minHeight: 28, textAlign: 'center'}} 
                onChange={e => { if (e.target.value) window.location.href = e.target.value; }}
                defaultValue="">
                <option value="" disabled hidden>&#9776;</option>
                <option value="/">Home</option>
                <option value="/about">About</option>
                <option value="/products">Products</option>
                <option value="/contact">Contact</option>
              </select>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            {/* Contact info for desktop (below nav-links) */}
            <div className="contact-desktop" style={{
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              fontWeight: 500,
              fontSize: '0.85rem',
              color: '#1976d2',
              marginLeft: 0,
              whiteSpace: 'nowrap',
              background: '#fff',
              borderRadius: 6,
              padding: '1px 6px',
              boxShadow: '0 1px 4px #c3cfe2',
              letterSpacing: '0.5px',
              border: '1px solid #1976d2',
              marginTop: 6,
              marginBottom: 2,
              maxWidth: '100vw',
              lineHeight: 1.2
            }}>
              <span role="img" aria-label="phone" style={{fontSize: '1em'}}>📞</span> +91 7207147729
              <span style={{marginLeft: '0.5rem', color: '#1976d2', fontWeight: 400}}>
                <span role="img" aria-label="email" style={{fontSize: '1em'}}>✉️</span> ssehomedecor@gmail.com
              </span>
            </div>
        <style>{`
          .nav-links {
            margin-left: 0;
            margin-right: 2.2rem;
          }
          .logo span:first-child {
            font-size: 1.35rem !important;
          }
          .logo span:nth-child(2) {
            font-size: 1.12rem !important;
          }
          .home-section {
            min-height: 60vh;
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }
          @media (max-width: 600px) {
            .mobile-header-right {
              display: flex !important;
              flex-direction: row !important;
              justify-content: flex-end !important;
              align-items: center !important;
              width: 100vw !important;
              gap: 0.3rem !important;
              margin-top: -10px !important;
            }
            .mobile-nav-dropdown-wrapper {
              display: none !important;
            }
            .mobile-nav-dropdown {
              display: flex !important;
            }
            .logo-hide-mobile {
              display: none !important;
            }
            .logo {
              justify-content: flex-start !important;
            }
            .logo-row {
              gap: 0.12rem !important;
            }
            .logo-img-responsive {
              width: 18px !important;
              height: 18px !important;
              margin-left: 0 !important;
            }
            .logo span {
              font-size: 0.82rem !important;
            }
            .navbar {
              padding-top: 2px !important;
              padding-bottom: 2px !important;
              min-height: 0 !important;
            }
            .navbar > div:nth-child(2) {
              order: 1;
              margin-left: 0 !important;
              margin-top: 1px !important;
              margin-bottom: 1px !important;
              align-items: flex-start !important;
              flex-direction: column !important;
              width: 100vw !important;
              max-width: 100vw !important;
            }
            .navbar > div:nth-child(3) {
              order: 2;
              width: 100vw !important;
              max-width: 100vw !important;
              margin-left: 0 !important;
              margin-top: 1px !important;
              margin-bottom: 1px !important;
            }
            .contact-desktop { display: none !important; }
            .contact-mobile {
              display: flex !important;
              flex-direction: row !important;
              text-align: right !important;
              padding-left: 0 !important;
              margin-left: 0 !important;
              gap: 0.1rem !important;
            }
            .nav-links { display: none !important; }
          }
        `}</style>
          </div>

        {/* Removed duplicate Routes from nav section */}
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:productFolder" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
