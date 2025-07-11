
import React from 'react';
import { Link } from 'react-router-dom';
import { mesh_products, blinds_products } from '../productData';

const allProducts = [
  ...mesh_products,
  ...blinds_products,
];

function Products() {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="home-product-list">
        {allProducts.map((product) => (
          <div className="product-card" key={product.folder}>
            <img src={product.mainImage} alt={product.title} className="product-gallery-img" />
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

export default Products;
