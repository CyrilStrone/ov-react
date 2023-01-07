import { BigPicture } from "../../../Common/BigPicture/Organoids/BigPicture";
import "../Styles/Basket.css";
import Picture from "../../../Common/Pictures/Basket/Basket.jpg";

export const Basket = () => {
  return (
    <div className="Basket">
      <BigPicture text={"Корзина"} picture={Picture} size={"500px"} littleTitle={"Заполните форму и свами свяжутся в течение 5 минут!"}/>
      <div className="Basket__Form">
        <div className="Basket__Form__Input">
          <div className="Basket__Form__Input__Title">Ваша почта</div>
          <input type="mail" placeholder="example@site.com" />
          <div className="Basket__Form__Input__Line"></div>
        </div>
        <div className="Basket__Form__Input">
          <div className="Basket__Form__Input__Title">Ваш номер телефона</div>
          <input type="password" placeholder="+7 123 456 7890" />
          <div className="Basket__Form__Input__Line"></div>
        </div>
        <div className="Basket__Form__Input">
          <div className="Basket__Form__Input__Title">Ваш адрес</div>
          <input
            type="text"
            placeholder="Москва, пр. Пушкина, ул. Колотушкина, д.10"
          />
          <div className="Basket__Form__Input__Line"></div>
        </div>
        <div className="Basket__Form__Button__Block"><div className="Basket__Form__Button__Block__Item">Отправить</div></div>
      </div>
    </div>
  );
};
