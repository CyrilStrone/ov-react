import "../Styles/Header.css";
import HeaderLogo from "../../Pictures/Header/HeaderLogo.png";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Left-Block">
        <a href="/">
          <img src={HeaderLogo} alt="Logo" />
        </a>
      </div>
      <div className="Header__Right-Block">
        <Link to={"HowOrder"}>Как заказать</Link>
        <Link to={"Basket"}>Корзина</Link>
      </div>
    </div>
  );
};
