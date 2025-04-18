'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductPlugin() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const toggleProduct = (product) => {
    const exists = selected.find(p => p.id === product.id);
    if (exists) {
      setSelected(selected.filter(p => p.id !== product.id));
    } else {
      setSelected([...selected, product]);
    }
  };

  const sendSelectedToHost = () => {
    window.parent.postMessage({ type: 'SELECTED_PRODUCTS', payload: selected }, '*');
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: 16 }}>
      <h3>🛍️ Select Products List</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {products.map(p => (
          <div key={p.id} style={{
            border: selected.find(s => s.id === p.id) ? '2px solid green' : '1px solid white',
            borderRadius: 8, padding: 12, width: 160, cursor: 'pointer'
          }}
            onClick={() => toggleProduct(p)}
          >
            <img src={p.image} alt={p.name} style={{ width: '100%', height: 100, objectFit: 'cover' }} />
            <div style={{ marginTop: 8 }}>
              <strong>{p.name}</strong>
              <div>${p.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        style={{ marginTop: 24, padding: '10px 20px', fontWeight: 'bold' }}
        onClick={sendSelectedToHost}
      >
        Save Selected Products
      </button>
    </div>
  );
}
