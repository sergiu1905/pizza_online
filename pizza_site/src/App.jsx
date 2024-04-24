import { useState, useEffect } from 'react';

import Header from './components/Header/Header.jsx';
import Shop from './components/Shop/Shop.jsx';
import {
  PizzaProducts,
  Salate,
  Sandwich,
  SosuriProduct,
  DressingsSalate,
  Drinks,
} from './PizzaProducts.js';
import SlideShow from './components/SlideShow/SlideShow.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreeazaPizza from './components/CreeazaPizza/CreeazaPizza.jsx';
import Contact from './components/Contact/Contact.jsx';
import Foother from './components/Foother/Foother.jsx';
function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const allProducts = [
          ...PizzaProducts,
          ...Sandwich,
          ...SosuriProduct,
          ...Salate,
          ...DressingsSalate,
          ...Drinks,
        ];
        const product = allProducts.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }
  function handleCancelOrder() {
    setShoppingCart({ items: [] });
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  }, [setShoppingCart, shoppingCart]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="creeaza_pizza" element={<CreeazaPizza />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="/"
            element={
              <>
                <Header
                  cart={shoppingCart}
                  onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
                  handleCancelOrder={handleCancelOrder}
                />
                <SlideShow />
                <Shop onAddItemToCart={handleAddItemToCart} />
              </>
            }
          />
        </Routes>
      </Router>
      <Foother />
    </>
  );
}

export default App;
