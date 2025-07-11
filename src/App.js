
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
        <nav className="navbar">
          <div className="logo" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.1rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.7rem'}}>
              <img
                src={require('./images/logo-main.svg').default}
                alt="Logo"
                style={{width: 36, height: 36, borderRadius: 8, boxShadow: '0 1px 4px rgba(44,62,80,0.10)'}}
              />
              <span style={{fontSize: '1.35rem', fontWeight: 700}}>SSE Home Decor</span>
            </div>
            <span style={{fontSize: '0.98rem', color: '#1976d2', fontWeight: 500, marginLeft: 44, marginTop: 2}}>Services Provided Across Hyderabad, Telangana</span>
          </div>
          <div style={{
            fontWeight: 700,
            fontSize: '1.13rem',
            color: '#1976d2',
            marginLeft: 32,
            whiteSpace: 'nowrap',
            background: '#fff',
            borderRadius: 8,
            padding: '4px 16px',
            boxShadow: '0 1px 6px #c3cfe2',
            letterSpacing: '1px',
            border: '1.5px solid #1976d2',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.2rem'
          }}>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span role="img" aria-label="phone">📞</span> +91 7207147729
            </span>
            <a
              href="mailto:ssehomedecor@gmail.com"
              style={{
                color: '#1976d2',
                fontWeight: 600,
                textDecoration: 'underline',
                fontSize: '1.04rem',
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
                padding: 0,
                marginTop: 2
              }}
            >
              ssehomedecor@gmail.com
            </a>
          </div>
          <div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
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
