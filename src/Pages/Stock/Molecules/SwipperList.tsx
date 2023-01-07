import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/Swipper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Picture_1 from "../../../Common/Pictures/Stock/Fake Gen Jersey.jpg";
import Picture_2 from "../../../Common/Pictures/Stock/Evil Jersey.jpg";
import Picture_3 from "../../../Common/Pictures/Stock/Angel Hood.jpg";
import Picture_4 from "../../../Common/Pictures/Stock/Over Stars Scarfe.jpg";
import { useStore } from "effector-react";
import {
  $checkAmazing,
  $checkStock,
  setcheckAmazing,
  setcheckStock,
} from "../Logics/hooks";
import { Link } from "react-router-dom";
import { SwipperAmazingList } from "../../../Common/SwipperAmazing/Organoids/SwipperAmazing";

export const SwipperList = () => {
  const checkStock = useStore($checkStock);
  const checkAmazing = useStore($checkAmazing);
  const StockObjects = [
    {
      picture: Picture_1,
      name: "Fake Gen Jersey",
      price: "3000",
    },
    { picture: Picture_2, name: "Evil Jersey", price: "3500" },
    { picture: Picture_3, name: "Angel Hood", price: "5500" },
    { picture: Picture_4, name: "Over Stars Scarfe", price: "2200" },
  ];

  return (
    <div className="Stock__SwipperList">
      {checkAmazing ? <SwipperAmazingList /> : null}

      <div className="Stock__SwipperList__Swipper">
        <Swiper
          // cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          onRealIndexChange={(swiper: any) => {
            setcheckStock(swiper.activeIndex);
          }}
          onClick={() => {
            setcheckAmazing(true);
          }}
        >
          {StockObjects.map((e: any) => (
            <SwiperSlide>
              <img src={e.picture} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="Stock__SwipperList__Info">
          <div className="Stock__SwipperList__Info__Name">
            {StockObjects.map((e: any, i: any) =>
              i == checkStock ? e.name : null
            )}
          </div>
          <div className="Stock__SwipperList__Info__Price">
            {StockObjects.map((e: any, i: any) =>
              i == checkStock ? e.price + " Руб." : null
            )}
          </div>
        </div>
        <Link to={"/Basket"}>Купить</Link>
      </div>
    </div>
  );
};
