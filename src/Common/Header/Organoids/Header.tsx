import "../Styles/Header.css";
import HeaderLogo from "../../Pictures/Header/HeaderLogo.png";
export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Left-Block">
        <a href="/">
          <img src={HeaderLogo} alt="Logo" />
        </a>
      </div>
      <div className="Header__Right-Block">
        <a href="/">Как заказать</a>
        <a href="/">Корзина</a>
      </div>
    </div>
  );
};
