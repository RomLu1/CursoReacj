import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Productos</h2>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
            <img src={product.image} alt={product.title} style={{ height: 100, objectFit: 'contain' }} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
