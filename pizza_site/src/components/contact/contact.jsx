import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import './Contact.css';
export default function Contact() {
  return (
    <>
      <div className="buttons-nav">
        <Link to={'/'} className="button-nav">
          Meniu Principal
        </Link>
        <Link to={'/creeaza_pizza'} className="button-nav">
          Fii Creativ
        </Link>
      </div>
      <div className="contact-body">
        <iframe
          className="map"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=Brasov%2C%20Strada%20Iuliu%20Maniu%20Nr.%2038&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
          title="Brasov Strada Iuliu Maniu Nr.38"
          aria-label="Brasov Strada Iuliu Maniu Nr.38"
        ></iframe>
        <div>
          <h1>Contact</h1>
          <p>BlueViking © Pizza Brasov.</p>
          <p>Pizza non-stop si livrari la domiciliu in judetul Brasov.</p>
          <p id="address">Adresa :</p>
          <p>Brasov, Romania, 500084</p>
          <p>Strada Iuliu Maniu Nr. 38</p>
          <p>0268 989</p>
          <p>contact@blueviking.ro</p>
          <p>www.blueviking.ro</p>
          <p>www.blueviking.ro</p>
          <p>
            {' '}
            <a href="https://www.facebook.com/">
              <FaFacebookSquare size={32} color="blue" />
            </a>{' '}
            <a href="https://www.instagram.com/">
              <FaInstagram size={32} color="blue" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
