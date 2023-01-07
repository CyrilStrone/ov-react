import { SwipperList } from "../Molecules/SwipperList";
import BIG from "../../../Common/Pictures/Stock/BIG.jpg";

import "../Styles/Stock.css";
import { BigPicture } from "../../../Common/BigPicture/Organoids/BigPicture";
export const Stock = () => {
  return (
    <div className="Stock">
      <BigPicture text={"ТОВАР В НАЛИЧИИ"} picture={BIG} />
      <SwipperList />
    </div>
  );
};
