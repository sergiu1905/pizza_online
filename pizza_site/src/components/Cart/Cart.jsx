import './Cart.css';
export default function Cart({ items, onUpdateItemQuantity }) {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `${totalPrice.toFixed(2)} Ron`;

  return (
    <div id="cart">
      {items.length === 0 && <p>Nu ai nici un produs selectat!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `${item.price} Ron`;

            return (
              <li key={item.id}>
                <div className="cart-product-item">
                  <span>{item.name}</span>
                  <span> {formattedPrice}/Produs</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">Pret Total:{formattedTotalPrice}</p>
    </div>
  );
}
