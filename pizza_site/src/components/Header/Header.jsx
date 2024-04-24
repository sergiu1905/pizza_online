import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../pictures/logo.png';
import CartModal from '../CartModal/CartModal.jsx';
import './Header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Header({
  cart,
  onUpdateCartItemQuantity,
  handleCancelOrder,
}) {
  const modal = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartQuantity = cart.items.length;
  async function handlePaymentClick() {
    const cartPay = JSON.parse(localStorage.getItem('cart'));
    let total = 0;
    cartPay.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    const response = await axios.post(
      'http://localhost:8085/stripe/create-payment-link',
      { amount: Number(total) * 100, currency: 'ron' }
    );
    window.location.href = response.data.paymentLink;
  }
  function handleOpenCartClick() {
    modal.current.open();
  }
  function handleMenuToggle(event) {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }

  function handleOutsideClick() {
    setIsMenuOpen(false);
  }

  let modalActions = <button>Anuleaza</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button onClick={handleCancelOrder}>Anuleaza</button>
        <button onClick={handlePaymentClick}>Plateste</button>
      </>
    );
  }
  function handleScroll() {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);
  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Produsele Tale"
        actions={modalActions}
      />
      <div className={isSticky ? 'sticky' : ''}>
        <div>
          <header id="main-header">
            <div id="main-title">
              <img src={Logo} alt="Logo" />
              <h1>Blue Viking Pizza</h1>
            </div>
            <div>
              <button>
                <Link to={'/contact'}>Contact</Link>
              </button>

              <button onClick={handleOpenCartClick}>
                Produse({cartQuantity})
              </button>
            </div>
          </header>
          <div>
            <div
              className="buttons-menu burger-menu"
              onClick={handleMenuToggle}
            >
              <FaBars className="burger-icon" />
              <div className="buttons-burger">
                {isMenuOpen && (
                  <div className="dropdown-menu">
                    <a href="#pizza">Pizza</a>
                    <a href="#sandwich">Sandwich</a>
                    <a href="#salads">Salate</a>
                    <a href="#drinks">Bauturi</a>
                    <Link to={'/creeaza_pizza'}>Creeaza Pizza</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
