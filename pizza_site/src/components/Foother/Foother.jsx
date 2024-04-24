import './Foother.css';
import Info from '../Foother/info.pdf';
import { useState } from 'react';
export default function Foother() {
  const [showPDF, setShowPDF] = useState(false);
  const handleClickPDF = () => {
    setShowPDF(true);
  };
  return (
    <div className="foother">
      <div className="foother-1">
        <h3>BLUE VIKING PIZZA</h3>
        <p>
          Iti oferim cea mai larga gama de pizza din oras. Exista si optiunea de
          a-ti crea propria pizza folosindu-ti toata imaginatia culinara.
        </p>
      </div>
      <div className="foother-2">
        {' '}
        <h3>CONTACTEAZA-NE</h3>
        <p>0722xxxxxx</p>
        <p>0733xxxxxx</p>
        <p>0268xxxxxx</p>
      </div>
      <div className="foother-3">
        <h3>
          {' '}
          <a href="../Foother/info.pdf'" onClick={handleClickPDF}>
            Descarcă gramaje, alergeni, ingrediente și valori nutriționale
          </a>{' '}
        </h3>
        <p>
          1995 - 2024 © FANCEA PROD Srl. Toate drepturile rezervate.
          BlueViking®, Pizza Party®, Pagrano®, Kido - Healthy and Tasty®,
          Race-Flavours for Heroes®, Good Life in the City® BlueViking -
          LiveFresh® sunt mărci înregistrate ale FANCEA PROD Srl.
        </p>
      </div>
    </div>
  );
}
