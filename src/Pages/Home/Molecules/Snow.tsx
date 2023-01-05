import "../Styles/Snow.css";
import Star from "../../../Common/Pictures/Home/Star.png";
export const Snow = () => {
  return (
    <div className="Snow">
      <div className="Snow__Absolute">
        <div className="Snow__Picture"></div>
      </div>
      <div className="Snow__Picture__Star">
          <img src={Star} alt="Star" />
        </div>
    </div>
  );
};
