import "../Styles/WeSale.css";
import Picture_1 from "../../../Common/Pictures/WeSale/1.jpg";
import Picture_2 from "../../../Common/Pictures/WeSale/2.jpg";
import Picture_3 from "../../../Common/Pictures/WeSale/3.jpg";
import Picture_4 from "../../../Common/Pictures/WeSale/4.jpg";

export const WeSale = () => {
  return (
    <div className="WeSale">
      <div className="WeSale__Title">Мы продаем:</div>
      <div className="WeSale__Block">
        <div className="WeSale__Block__Picture">
          <div className="WeSale__Block__Picture__Block">
            <img src={Picture_1} alt="" />
            <div className="WeSale__Block__Picture__Block__Name">Футболки</div>
          </div>

          <div className="WeSale__Block__Picture__Block">
            <img src={Picture_2} alt="" />
            <div className="WeSale__Block__Picture__Block__Name">Худи</div>
          </div>
        </div>
        <div className="WeSale__Block__Picture">
          <div className="WeSale__Block__Picture__Block">
            <img src={Picture_3} alt="" />
            <div className="WeSale__Block__Picture__Block__Name">Шарфы</div>
          </div>
          <div className="WeSale__Block__Picture__Block">
            <img src={Picture_4} alt="" />
            <div className="WeSale__Block__Picture__Block__Name">Джерси</div>
          </div>
        </div>
      </div>
    </div>
  );
};
