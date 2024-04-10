// import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
// import './PaymentPage.css';
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// const stripePromise = loadStripe(
//   'pk_test_51P3yghHYT7VVLHLz0URpDef7BZewebwYXyiX3xH7uaZzlt2OPlsNrrSDimxvAIZzRUAgOGFTGeMtLYOJa9MO7ted006L3iianJ'
// );
// export default function PaymentPage() {
//   const cart = JSON.parse(localStorage.getItem('cart'));
//   const [paymentDetails, setPaymentDetails] = useState({ total: 0 });
//   useEffect(() => {
//     cart.items.forEach((item) => {
//       setPaymentDetails({
//         total: paymentDetails.total + item.price * item.quantity,
//       });
//     });
//   }, []);

//   async function handlePaymentClick() {
//     const response = await axios.post(
//       'http://localhost:8085/stripe/create-payment-link',
//       { amount: Number(paymentDetails.total) * 100, currency: 'ron' }
//     );
//     window.location.href = response.data.paymentLink;
//   }
//   return (
//     <div className="payment-card">
//       <h2>Plata cu card bancar</h2>
//       <button onClick={handlePaymentClick}>Plateste acum</button>
//       <Link to="/">Inapoi la Site</Link>
//     </div>
//   );
// }
