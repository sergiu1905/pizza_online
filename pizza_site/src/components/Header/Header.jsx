import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../pictures/logo.png';
import CartModal from '../CartModal/CartModal.jsx';
import './Header.css';
export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }
  function handleMenuToggle(event) {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }
  function handleMenuClick(event) {
    event.stopPropagation();
  }
  function handleOutsideClick() {
    setIsMenuOpen(false);
  }
  let modalActions = <button>Anuleaza</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Anuleaza</button>
        <button>Comanda</button>
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
            <p>
              <button className="contact">Contact</button>
              <button onClick={handleOpenCartClick}>
                Produse({cartQuantity})
              </button>
            </p>
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
                    <a href="#dressings">Sosuri</a>
                    <a href="#sandwich">Sandwich</a>
                    <a href="#salads">Salate</a>
                    <a href="#desserts">Desert</a>
                    <a href="drinks">Bauturi</a>
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
