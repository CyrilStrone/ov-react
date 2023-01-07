import "../Styles/BigPicture.css";
import Picture_1 from "../../../Common/Pictures/Home/1.jpg";
import Picture_2 from "../../../Common/Pictures/Home/2.jpg";
import Picture_3 from "../../../Common/Pictures/Home/3.jpg";

export const BigPicture = () => {
  return (
    <div className="BigPicture">
          <div className="BigPicture__LeftBlock">
          <img src={Picture_1} alt="BigPicture" />
          <img src={Picture_2} alt="BigPicture" />

          </div>
          <div className="BigPicture__RightBlock">
          <img src={Picture_3} alt="BigPicture" />

          </div>

    </div>
  );
};
