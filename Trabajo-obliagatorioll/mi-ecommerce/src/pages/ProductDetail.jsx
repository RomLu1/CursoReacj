import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p style={{ padding: 20 }}>Cargando producto...</p>;

  return (
   <div className="product-detail">
    <h2>{product.title}</h2>
    <img src={product.image} alt={product.title} />
    <p>{product.description}</p>
    <h3>Precio: ${product.price}</h3>
    <button>Comprar</button>
  </div>
  );
};

export default ProductDetail;
