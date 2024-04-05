import './Product.css';
export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}) {
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">{price} Ron</p>
          <p className="description">{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => onAddToCart(id)}>Adauga Produs</button>
        </p>
      </div>
    </article>
  );
}
