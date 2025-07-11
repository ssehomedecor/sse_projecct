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
  // If product.description is an array, use per-image, else use same for all
  let descriptions = [];
  if (Array.isArray(product?.description)) {
    descriptions = product.description;
  } else {
    // fallback: repeat the same description for all images
    descriptions = images.map(() => product?.description || {});
  }

  return (
    <div>
      <Link to="/">← Back to Home</Link>
      <h2>Product Gallery</h2>
      <div className="product-detail-list" style={{display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1.5rem'}}>
        {images.length === 0 && <p>No additional images found for this product.</p>}
        {images.map((img, idx) => (
          <div key={idx} className="product-detail-row" style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '2.5rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 200, width: 200}}>
              <img src={img} alt={`Product ${idx + 1}`} className="product-gallery-img" style={{width: 200, height: 'auto', borderRadius: 8, boxShadow: '0 1px 6px #c3cfe2'}} />
            </div>
            {descriptions[idx] && Object.keys(descriptions[idx]).length > 0 && (
              <div className="product-detail-desc" style={{
                minWidth: 220,
                width: 220,
                fontSize: 11,
                background: '#f8f9fa',
                borderRadius: 8,
                padding: 0,
                boxShadow: '0 1px 6px #e0e7ef',
                border: '1px solid #e0e7ef',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                height: 'auto',
                alignSelf: 'stretch'
              }}>
                <table style={{width: '100%', borderCollapse: 'collapse', marginTop: 0, marginLeft: 0, marginRight: 0}}>
                  <tbody>
                    {Object.entries(descriptions[idx] || {}).map(([key, value]) => (
                      <tr key={key}>
                        <td style={{fontWeight: 700, color: '#222', padding: '0.3rem 0.3rem 0.3rem 0', verticalAlign: 'top', whiteSpace: 'nowrap', textAlign: 'left'}}>{key}</td>
                        <td style={{fontWeight: 400, color: '#222', padding: '0.3rem 0 0.3rem 0.3rem', textAlign: 'left'}}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 600px) {
          .product-detail-list {
            gap: 0 !important;
          }
          .product-detail-row {
            gap: 0 !important;
          }
          .product-detail-desc {
            padding: 1.2rem 0.5rem !important;
            min-width: 0 !important;
            width: 50vw !important;
            font-size: 9px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
