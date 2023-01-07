import { useEffect, useState } from "react";
import "../Styles/ItemsByType.css";
import Shirt_1 from "../../../Common/Pictures/ItemsByType/Shirts/1.jpg";
import Shirt_2 from "../../../Common/Pictures/ItemsByType/Shirts/2.jpg";
import Shirt_3 from "../../../Common/Pictures/ItemsByType/Shirts/3.jpg";
import Shirt_4 from "../../../Common/Pictures/ItemsByType/Shirts/4.jpg";
import Shirt_5 from "../../../Common/Pictures/ItemsByType/Shirts/5.jpg";
import { ListItem } from "../Atoms/ListItem";

export interface IItems {
  item: number;
}

export const Items = (params: IItems) => {
  const [list, setList] = useState([{}]);
  useEffect(() => {
    setList(
      params.item === 0
        ? [
            {
              picture: Shirt_1,
              name: "PSYCHOSOCIAL TEE",
              price: "1800",
              salePrice: "",
              sale: false,
            },
            {
              picture: Shirt_2,
              name: "SALUKI RIP BABY AIDS DOUBLETEE",
              price: "1800",
              salePrice: "",
              sale: false,
            },
            {
              picture: Shirt_3,
              name: "Fast Food Music TEE",
              price: "3000",
              salePrice: "2000",
              sale: true,
            },
            {
              picture: Shirt_4,
              name: "MERCH MARKET DARK TEE",
              price: "1800",
              salePrice: "",
              sale: false,
            },
            {
              picture: Shirt_5,
              name: "MERCH MARKET BLUE TEE",
              price: "1800",
              salePrice: "",
              sale: false,
            },
          ]
        : params.item === 1
        ? []
        : params.item === 2
        ? []
        : params.item === 3
        ? []
        : []
    );
  }, []);
  return <div className="ItemsByType__Items">
    {list.map((e:any)=>
    <ListItem picture={e.picture} name={e.name} price={e.price} salePrice={e.salePrice} sale={e.sale}/>
    )}
  </div>;
};
