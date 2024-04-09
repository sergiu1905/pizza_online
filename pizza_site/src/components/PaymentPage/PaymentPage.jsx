import './PaymentPage.css';
import { Link } from 'react-router-dom';
export default function PaymentPage() {
  return (
    <div className="payment-card">
      <h2>Plata cu card bancar</h2>
      <Link to="/">Inapoi la Site</Link>
    </div>
  );
}
