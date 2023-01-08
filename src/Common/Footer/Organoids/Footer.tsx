import VK from '../../../Common/Pictures/Footer/VK.svg'
import TG from '../../../Common/Pictures/Footer/TG.svg'
import IN from '../../../Common/Pictures/Footer/IN.svg'
import GH from '../../../Common/Pictures/Footer/GH.svg'

import '../Styles/Footer.css'
export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__Autor">
        Автор
      </div>
      <div className="Footer__Mail">
        Cyril Strone
      </div>
      <div className="Footer__Mail">
        cyrilstrone@gmail.com
      </div>
      <div className="Footer__GitHub">
        <a target="_blank" href='https://github.com/CyrilStrone/OV' rel="noreferrer">
          Исходный код
        </a>
      </div>
      <div className="Footer__Adress">
        <a target="_blank" href='https://www.google.com/maps/place/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA,+%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9/@56.0266501,92.7256518,11z/data=!3m1!4b1!4m5!3m4!1s0x5cd7afc9a1ff37e3:0xd597e1468fd647ff!8m2!3d56.0152834!4d92.8932476' rel="noreferrer">Красноярск, Сибирь</a>
      </div>
      <div className="Footer__CN">
        <a target="_blank" href='https://github.com/CyrilStrone' rel="noreferrer">
          <img src={GH} alt="GH" />
        </a>
        <a target="_blank" href='https://t.me/cyrilstrone' rel="noreferrer">
          <img src={TG} alt="TG" />
        </a>
        <a target="_blank" href='https://www.linkedin.com/in/cyrilstrone/' rel="noreferrer">
          <img src={IN} alt="IN" />
        </a>
        <a target="_blank" href='https://vk.com/simsalarill' rel="noreferrer">
          <img src={VK} alt="VK" />
        </a>
      </div>
    </div>
  );
};
