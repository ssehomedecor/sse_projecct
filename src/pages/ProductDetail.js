import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mesh_products, blinds_products } from '../productData';

const ProductDetail = () => {
  const { productFolder } = useParams();
  let product = mesh_products.find(p => p.folder === productFolder);
  if (!product) {
    product = blinds_products.find(p => p.folder === productFolder);
  }
  const images = product?.images || [];

  return (
    <div>
      <Link to="/">← Back to Home</Link>
      <h2>Product Gallery</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem'}}>
        {images.length === 0 && <p>No additional images found for this product.</p>}
        {images.map((img, idx) => (
          <div className="product-card" key={idx} style={{margin: 0}}>
            <img src={img} alt="Product" className="product-gallery-img" />
            <div className="product-title" style={{marginBottom: 8}}>Image {idx + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
