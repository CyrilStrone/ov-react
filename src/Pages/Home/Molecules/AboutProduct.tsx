import "../Styles/AboutProduct.css";
import Picture_1 from "../../../Common/Pictures/AboutProduct/1.jpg";

export const AboutProduct = () => {
  return (
    <div className="AboutProduct">
      <div className="AboutProduct__LeftBlock">
        <div className="AboutProduct__LeftBlock__Title">О продукции</div>
        <div className="AboutProduct__LeftBlock__Text">
          -100% хлопок (худи) -Принты на передней и задней части изделия (Screen Methode)<br/>-Бирки на капюшоне и внутренней части изделия<br/>-Специальный крой Sport Oversize Y17<br/>-Отсутствие манжетов широкие рукав, смешанный крой плеч, за счет этого достигается универсальный размер, который отлично сидит практически на каждом<br/>-Теплые двусторонние шарфы<br/>-Широкая гамма тщательно выбранных цветов и оттенков качественной кожи
        </div>
      </div>
      <div className="AboutProduct__RightBlock">
        <img src={Picture_1} alt="AboutProduct" />
      </div>
    </div>
  );
};
