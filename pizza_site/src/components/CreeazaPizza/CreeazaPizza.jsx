import { Link } from 'react-router-dom';
import './CreeazaPizza.css';
import { useState } from 'react';
import PizzaImg from '../../components/pictures/creeaza-pizza.jpg';
export default function CreeazaPizza() {
  const initialToppings = [
    { id: 't1', label: 'Parmezan', price: 4.5 },
    { id: 't2', label: 'Mozzarella', price: 4.5 },
    { id: 't3', label: 'Gorgonzola', price: 4.5 },
    { id: 't4', label: 'Telemea', price: 4.5 },
    { id: 't5', label: 'Ciuperci', price: 4.5 },
    { id: 't6', label: 'Ceapa', price: 4.5 },
    { id: 't7', label: 'Ardei', price: 4.5 },
    { id: 't8', label: 'Porumb', price: 4.5 },
    { id: 't9', label: 'Masline', price: 4.5 },
    { id: 't10', label: 'Salam', price: 4.5 },
    { id: 't11', label: 'Sunca Praga', price: 4.5 },
    { id: 't12', label: 'Prosciutto', price: 4.5 },
    { id: 't13', label: 'Costita', price: 4.5 },
    { id: 't14', label: 'Carnati', price: 4.5 },
    { id: 't15', label: 'Carne Vita', price: 4.5 },
    { id: 't16', label: 'Ton', price: 4.5 },
    { id: 't17', label: 'Fructe de Mare', price: 4.5 },
    { id: 't18', label: 'Peperonii', price: 4.5 },
    { id: 't19', label: 'Ou fiert', price: 4.5 },
    { id: 't20', label: 'Bacon', price: 4.5 },
  ];
  const [toppings, setToppings] = useState(
    initialToppings.reduce((acc, topping) => {
      acc[topping.id] = false;
      return acc;
    }, {})
  );
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmationAttempted, setConfirmationAttempted] = useState(false);
  const handleToppingChange = (toppingId) => {
    const selelctedToppings = Object.values(toppings).filter(
      (isSelected) => isSelected
    ).length;
    if (selelctedToppings >= 7 && !toppings[toppingId]) {
      return;
    }
    setToppings({
      ...toppings,
      [toppingId]: !toppings[toppingId],
    });
  };
  const availableTopping =
    7 - Object.values(toppings).filter((isSelected) => isSelected).length;
  const calculateTotalPrice = () => {
    let totalPrice = 15;
    initialToppings.forEach((topping) => {
      if (toppings[topping.id]) {
        totalPrice += topping.price;
      }
    });
    return totalPrice;
  };
  const handleConfirmation = () => {
    setConfirmationAttempted(true);
    if (Object.values(toppings).some((isSelected) => isSelected))
      setOrderConfirmed(true);
  };
  return (
    <>
      <h1>Alege topping-uri</h1>

      <Link to={'/'} className="link-home">
        Meniu Principal
      </Link>
      <div className="topping">
        <div className="topping-body">
          <img src={PizzaImg} alt="pizza image" className="img-topping" />
          <div className="topping-list">
            {initialToppings.map((topping) => (
              <label key={topping.id}>
                <input
                  type="checkbox"
                  checked={toppings[topping.id]}
                  onChange={() => handleToppingChange(topping.id)}
                />
                {topping.label}
              </label>
            ))}
          </div>
        </div>

        <div className="order-topping">
          <h3> Cost Total : {calculateTotalPrice()} lei</h3>
          <p>
            Fiecare topping are un pret aditional de <span>4.5</span> ron
          </p>
          <p>
            Numarul maxim de topping-uri disponibile:
            <span>{availableTopping}</span>
          </p>
          <button onClick={handleConfirmation}>Fii Creativ</button>
          {confirmationAttempted &&
            !Object.values(toppings).some((isSelected) => isSelected) && (
              <p>Alege minim un topping</p>
            )}
          {orderConfirmed && (
            <>
              <p>Ai ales pizza cu {7 - availableTopping} topping-uri:</p>
              <p>
                {initialToppings
                  .filter((topping) => toppings[topping.id])
                  .map((topping) => (
                    <span key={topping.id}>{topping.label}, </span>
                  ))}
              </p>
              <Link to={'/contact'}>Contact</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
