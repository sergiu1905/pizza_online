import { PizzaProducts } from '../../PizzaProducts.js';
import { Sandwich } from '../../PizzaProducts.js';
import { SosuriProduct } from '../../PizzaProducts.js';
import { Salate } from '../../PizzaProducts.js';
import { DressingsSalate } from '../../PizzaProducts.js';
import { Drinks } from '../../PizzaProducts.js';
import Product from '../Product/Product.jsx';
import './Shop.css';
export default function Shop({ onAddItemToCart }) {
  return (
    <section id="shop">
      <h2 id="pizza">Pizza Pentru Toate Gustrurile</h2>

      <ul id="products">
        {PizzaProducts.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
      <h2 id="dressings">Sosuri</h2>
      <ul id="products">
        {SosuriProduct.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
      <h2 id="sandwich">Sandwich</h2>
      <ul id="products">
        {Sandwich.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
      <h2 id="salads">Salate</h2>
      <ul id="products">
        {Salate.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
      <h2 id="dressingSalate">Dressings Salate</h2>
      <ul id="products">
        {DressingsSalate.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
      <h2 id="drinks">Bauturi</h2>
      <ul id="products">
        {Drinks.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
