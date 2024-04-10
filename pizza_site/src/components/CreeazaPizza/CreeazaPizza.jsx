import { Link } from 'react-router-dom';
import './CreeazaPizza.css';
import PizzaImg from '../../components/pictures/creeaza-pizza.jpg';
export default function CreeazaPizza() {
  return (
    <>
      <div>
        <img src={PizzaImg} alt="pizza image" />
      </div>
    </>
  );
}
