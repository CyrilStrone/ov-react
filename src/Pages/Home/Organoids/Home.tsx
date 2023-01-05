import { Snow } from "../Molecules/Snow";
import "../Styles/Home.css";
import minStar from "../../../Common/Pictures/Home/Star.png";
import { SwiperBlock } from "../Molecules/Swiper";
import { WeSale } from "../Molecules/WeSale";
export const Home = () => {
  return (
    <div className="Home">
      <Snow />
      <div className="Home__Line__Star">
        <img src={minStar} alt="" />
        <img src={minStar} alt="" />
      </div>
      <SwiperBlock />
      <WeSale />
      Ваня и рита
    </div>
  );
};
