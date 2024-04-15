import { Link } from 'react-router-dom';
export default function Contact() {
  return (
    <div>
      <Link to={'/'} className="">
        Meniu Principal
      </Link>
      <Link to={'/creeaza_pizza'} className="">
        Fi Creativ
      </Link>
    </div>
  );
}
