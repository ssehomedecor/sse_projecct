
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
                <span role="img" aria-label="location">📍</span> <span style={{fontSize: '2.2em', fontWeight: 700, color: '#1976d2', position: 'relative', top: '0.5em', display: 'inline-block'}}>Hyderabad, Telangana</span>{' '}
                <span className="desktop-social-icons" style={{marginLeft: '1.2em', verticalAlign: 'middle', display: 'inline-block'}}>
                  <a href="https://instagram.com/ssehomedecor" target="_blank" rel="noopener noreferrer" style={{marginRight: '0.7em', color: '#E4405F', fontSize: '1.6em', verticalAlign: 'middle'}} title="Instagram" aria-label="Instagram">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.276.058-2.15.24-2.91.51-.8.28-1.48.66-2.15 1.33-.67.67-1.05 1.35-1.33 2.15-.27.76-.452 1.634-.51 2.91C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.276.24 2.15.51 2.91.28.8.66 1.48 1.33 2.15.67.67 1.35 1.05 2.15 1.33.76.27 1.634.452 2.91.51C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.276-.058 2.15-.24 2.91-.51.8-.28 1.48-.66 2.15-1.33.67-.67 1.05-1.35 1.33-2.15.27-.76.452-1.634.51-2.91.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.276-.24-2.15-.51-2.91-.28-.8-.66-1.48-1.33-2.15-.67-.67-1.35-1.05-2.15-1.33-.76-.27-1.634-.452-2.91-.51C15.668.012 15.264 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
                  </a>
                  <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0.7em', color: '#FF0000', fontSize: '1.6em', verticalAlign: 'middle'}} title="YouTube" aria-label="YouTube">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.35 0 12 0 12s0 3.65.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.65 24 12 24 12s0-3.65-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{color: '#1877F3', fontSize: '1.6em', verticalAlign: 'middle'}} title="Facebook" aria-label="Facebook">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                  </a>
                </span>
              </span>
            </div>
          </div>
          {/* Contact info for mobile (phone and email in two rows, above nav-links/dropdown) */}
          <div className="mobile-header-right" style={{display: 'none', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '100%', gap: '0.3rem', marginTop: '-10px'}}>
            <span className="contact-mobile" style={{fontSize: '0.92rem', fontWeight: 500, color: '#d32f2f', whiteSpace: 'nowrap', paddingLeft: 0, marginLeft: 0}}>{'\t\t\t'}<span role="img" aria-label="phone">📞</span> +91 7207147729&nbsp;</span>
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
            .mobile-social-icons {
              display: inline !important;
              margin-left: 2.5em !important;
              vertical-align: middle !important;
            }
            .mobile-header-right {
              display: flex !important;
              flex-direction: row !important;
              justify-content: flex-start !important;
              align-items: center !important;
              width: 100vw !important;
              gap: 0.3rem !important;
              margin-top: -10px !important;
              text-align: left !important;
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
              align-items: flex-start !important;
              text-align: left !important;
              margin-left: 0 !important;
              padding-left: 0 !important;
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
              text-align: left !important;
            }
            .navbar {
              padding-top: 2px !important;
              padding-bottom: 2px !important;
              min-height: 0 !important;
              justify-content: flex-start !important;
              align-items: flex-start !important;
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
