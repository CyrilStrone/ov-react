import VK from '../../../Common/Pictures/Footer/VK.png'
import '../Styles/Footer.css'
export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__Mail">
      iasautkin@gmail.com
      </div>
      <div className="Footer__Adress">
      Красноярск, <a href='https://2gis.ru/krasnoyarsk/firm/986145966616730/tab/info'>​Академика Киренского, 26 к1</a>
      </div>
      <a className="Footer__Vk" href='https://vk.com/newstkn'>
        <img src={VK}  alt="VK" />
      </a>
    </div>
  );
};
