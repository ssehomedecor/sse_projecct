


import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { mesh_products, blinds_products } from '../productData';
import '../App.css';


function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mesh');
  const [meshIndex, setMeshIndex] = useState(0);
  const [meshPrevIndex, setMeshPrevIndex] = useState(0);
  const [meshDirection, setMeshDirection] = useState(1); // 1: next, -1: prev
  const [blindsIndex, setBlindsIndex] = useState(0);
  const [blindsPrevIndex, setBlindsPrevIndex] = useState(0);
  const [blindsDirection, setBlindsDirection] = useState(1);

  const meshProducts = mesh_products;
  const blindsProducts = blinds_products;

  // Auto-scroll effect for mesh and blinds carousels
  React.useEffect(() => {
    const meshTimer = setInterval(() => {
      setMeshPrevIndex(meshIndex);
      setMeshDirection(1);
      setMeshIndex(idx => (idx + 1) % meshProducts.length);
    }, 2500);
    const blindsTimer = setInterval(() => {
      setBlindsPrevIndex(blindsIndex);
      setBlindsDirection(1);
      setBlindsIndex(idx => (idx + 1) % blindsProducts.length);
    }, 2500);
    return () => {
      clearInterval(meshTimer);
      clearInterval(blindsTimer);
    };
    // eslint-disable-next-line
  }, [meshIndex, blindsIndex, meshProducts.length, blindsProducts.length]);

  return (
    <div className="home-split">
      {/* Top section: Split horizontal carousels for Mesh and Blinds */}
      <div className="home-carousel-split">
        <div className="carousel-column carousel-mesh">
          {/* <div className="carousel-title">Mesh and Grill Products</div> */}
          <div className="carousel-scroll" style={{overflowX: 'hidden', position: 'relative', height: '100%'}}>
            {[meshPrevIndex, meshIndex].filter((v, i, arr) => arr.indexOf(v) === i).map((idx, i, arr) => {
              const isCurrent = idx === meshIndex;
              const isPrev = idx === meshPrevIndex && meshIndex !== meshPrevIndex;
              let transform = 'translateX(0)';
              if (isCurrent && meshIndex !== meshPrevIndex) {
                transform = `translateX(${meshDirection === 1 ? '100%' : '-100%'})`;
              }
              if (isPrev) {
                transform = 'translateX(0)';
              }
              return (
                <img
                  key={meshProducts[idx].folder + (isCurrent ? '-curr' : '-prev')}
                  src={meshProducts[idx].mainImage}
                  alt={meshProducts[idx].title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    background: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    margin: 0,
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
                    zIndex: isCurrent ? 2 : 1,
                    transform: isCurrent
                      ? `translateX(0)`
                      : `translateX(${meshDirection === 1 ? '-100%' : '100%'})`,
                    opacity: 1
                  }}
                  onClick={() => navigate(`/products/${meshProducts[idx].folder}`)}
                />
              );
            })}
          </div>
          <div className="carousel-radio-group">
            {meshProducts.map((_, idx) => (
              <span
                key={idx}
                className={meshIndex === idx ? 'carousel-radio active' : 'carousel-radio'}
                onClick={() => {
                  setMeshPrevIndex(meshIndex);
                  setMeshDirection(idx > meshIndex ? 1 : -1);
                  setMeshIndex(idx);
                }}
              />
            ))}
          </div>
        </div>
        <div className="carousel-column carousel-blinds">
          {/* <div className="carousel-title">Blinds Products</div> */}
          <div className="carousel-scroll" style={{overflowX: 'hidden', position: 'relative', height: '100%'}}>
            {[blindsPrevIndex, blindsIndex].filter((v, i, arr) => arr.indexOf(v) === i).map((idx, i, arr) => {
              const isCurrent = idx === blindsIndex;
              const isPrev = idx === blindsPrevIndex && blindsIndex !== blindsPrevIndex;
              let transform = 'translateX(0)';
              if (isCurrent && blindsIndex !== blindsPrevIndex) {
                transform = `translateX(${blindsDirection === 1 ? '100%' : '-100%'})`;
              }
              if (isPrev) {
                transform = 'translateX(0)';
              }
              return (
                <img
                  key={blindsProducts[idx].folder + (isCurrent ? '-curr' : '-prev')}
                  src={blindsProducts[idx].mainImage}
                  alt={blindsProducts[idx].title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    background: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    margin: 0,
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
                    zIndex: isCurrent ? 2 : 1,
                    transform: isCurrent
                      ? `translateX(0)`
                      : `translateX(${blindsDirection === 1 ? '-100%' : '100%'})`,
                    opacity: 1
                  }}
                  onClick={() => navigate(`/products/${blindsProducts[idx].folder}`)}
                />
              );
            })}
          </div>
          <div className="carousel-radio-group">
            {blindsProducts.map((_, idx) => (
              <span
                key={idx}
                className={blindsIndex === idx ? 'carousel-radio active' : 'carousel-radio'}
                onClick={() => {
                  setBlindsPrevIndex(blindsIndex);
                  setBlindsDirection(idx > blindsIndex ? 1 : -1);
                  setBlindsIndex(idx);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Box-style divider between sections */}
      <div className="section-divider-box"></div>
      {/* Bottom section: Tabs for product groups */}
      <div className="home-product-tabs" style={{display: 'flex', gap: 0, marginBottom: 16, justifyContent: 'flex-start', alignItems: 'center'}}>
        <div
          className={activeTab === 'mesh' ? 'tab-title active' : 'tab-title'}
          style={{
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '1.18rem',
            padding: '8px 32px',
            background: activeTab === 'mesh' ? '#1976d2' : 'transparent',
            color: activeTab === 'mesh' ? '#fff' : '#1976d2',
            borderRadius: '8px 0 0 8px',
            border: activeTab === 'mesh' ? '2px solid #1976d2' : '2px solid #1976d2',
            borderRight: 'none',
            transition: 'all 0.2s',
            boxShadow: activeTab === 'mesh' ? '0 2px 8px #c3cfe2' : 'none',
            zIndex: activeTab === 'mesh' ? 2 : 1
          }}
          onClick={() => setActiveTab('mesh')}
        >
          Mesh and Grill Products
        </div>
        <div
          className={activeTab === 'blinds' ? 'tab-title active' : 'tab-title'}
          style={{
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '1.18rem',
            padding: '8px 32px',
            background: activeTab === 'blinds' ? '#1976d2' : 'transparent',
            color: activeTab === 'blinds' ? '#fff' : '#1976d2',
            borderRadius: '0 8px 8px 0',
            border: activeTab === 'blinds' ? '2px solid #1976d2' : '2px solid #1976d2',
            borderLeft: 'none',
            transition: 'all 0.2s',
            boxShadow: activeTab === 'blinds' ? '0 2px 8px #c3cfe2' : 'none',
            zIndex: activeTab === 'blinds' ? 2 : 1
          }}
          onClick={() => setActiveTab('blinds')}
        >
          Blinds Products
        </div>
      </div>
      <div className="home-product-list">
        {activeTab === 'mesh' && meshProducts.map((product, idx) => (
          <div
            key={product.folder}
            className="product-card"
            style={{cursor: 'default'}}
          >
            <img
              src={product.mainImage}
              alt={product.title}
              className="product-thumb"
              style={{cursor: 'pointer'}}
              onClick={() => navigate(`/products/${product.folder}`)}
            />
            <div className="product-title" style={{ fontSize: '0.98rem', marginTop: 8 }}>
              <Link to={`/products/${product.folder}`} style={{ color: '#1976d2', textDecoration: 'underline' }}>
                {product.title}
              </Link>
            </div>
          </div>
        ))}
        {activeTab === 'blinds' && blindsProducts.map((product, idx) => (
          <div
            key={product.folder}
            className="product-card"
            style={{cursor: 'default'}}
          >
            <img
              src={product.mainImage}
              alt={product.title}
              className="product-thumb"
              style={{cursor: 'pointer'}}
              onClick={() => navigate(`/products/${product.folder}`)}
            />
            <div className="product-title" style={{ fontSize: '0.98rem', marginTop: 8 }}>
              <Link to={`/products/${product.folder}`} style={{ color: '#1976d2', textDecoration: 'underline' }}>
                {product.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
