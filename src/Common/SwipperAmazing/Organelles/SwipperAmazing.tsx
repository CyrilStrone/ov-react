import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/SwipperAmazing.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Picture_1 from "../../../Common/Pictures/Stock/Fake Gen Jersey.jpg";
import Picture_2 from "../../../Common/Pictures/Stock/Evil Jersey.jpg";
import Picture_3 from "../../../Common/Pictures/Stock/Angel Hood.jpg";
import Picture_4 from "../../../Common/Pictures/Stock/Over Stars Scarfe.jpg";
import { useStore } from "effector-react";
import {
  $checkStock,
  setcheckAmazing,
  setcheckStock,
} from "../../../Pages/Stock/Logics/hooks";

export const SwipperAmazingList = () => {
  const checkStock = useStore($checkStock);

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
    <div className="SwipperAmazingList">
      <div
        className="SwipperAmazingList__Close"
        onClick={() => {
          setcheckAmazing(false);
        }}
      >
        ×
      </div>
      <div className="SwipperAmazingList__Swipper">
        <Swiper
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          onRealIndexChange={(swiper: any) => {
            setcheckStock(swiper.activeIndex);
          }}
          pagination={{
            clickable: true,
          }}
        >
          {StockObjects.map((e: any) => (
            <SwiperSlide>
              <img src={e.picture} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="SwipperAmazingList__Info">
          <div className="SwipperAmazingList__Info__Name">
            {StockObjects.map((e: any, i: any) =>
              i == checkStock ? e.name : null
            )}
          </div>
          <div className="SwipperAmazingList__Info__Price">
            {StockObjects.map((e: any, i: any) =>
              i == checkStock ? e.price + " Руб." : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
