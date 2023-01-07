import "../Styles/ItemsByType.css";
import Shirts from "../../../Common/Pictures/ItemsByType/Shirt.jpg";
import Hoodie from "../../../Common/Pictures/ItemsByType/Hoodie.jpg";
import Scarves from "../../../Common/Pictures/ItemsByType/Scarves.jpg";
import Jersey from "../../../Common/Pictures/ItemsByType/Jersey.jpg";
import { BigPicture } from "../../../Common/BigPicture/Organoids/BigPicture";
import { useEffect, useState } from "react";
import { Items } from "../Molecules/items";

export interface IItemsByType {
  type: string;
}
export const ItemsByType = (params: IItemsByType) => {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [item, setitem] = useState(0);

  useEffect(() => {
    setTitle(
      params.type === "T-shirts"
        ? "Футболки"
        : params.type === "Hoodie"
        ? "Худи"
        : params.type === "Scarves"
        ? "Шарфы"
        : params.type === "Jersey"
        ? "Джерси"
        : ""
    );
    setPicture(
      params.type === "T-shirts"
        ? Shirts
        : params.type === "Hoodie"
        ? Hoodie
        : params.type === "Scarves"
        ? Scarves
        : params.type === "Jersey"
        ? Jersey
        : ""
    );
    setitem(
      params.type === "T-shirts"
        ? 0
        : params.type === "Hoodie"
        ? 1
        : params.type === "Scarves"
        ? 2
        : params.type === "Jersey"
        ? 3
        : 4
    );
  }, []);
  return (
    <div className="ItemsByType">
      <BigPicture text={title} picture={picture} />
      <Items item={item}/>
    </div>
  );
};
