import '../Styles/ListItem.css'
export interface Item {
  picture: string;
  name: string;
  price: string;
  salePrice: string;
  sale: boolean;
}
export const ListItem = (params: Item) => {
  return (
    <div className="ListItem">
      <img src={params.picture} alt="picture Item" />
      <div className="ListItem__Title">{params.name}</div>
      {params.sale ? 
        <div className="ListItem__Sale">sale</div>:
         null}
      <div className="ListItem__Price-Block">
        {params.sale ? 
         <><div className="ListItem__Price-Block_New">{params.salePrice + " .р"}</div><div className="ListItem__Price-Block_Old">{params.price + " .р"}</div></>:
         <div className="ListItem__Price-Block_New">{params.price + " .р"}</div>}
       
      </div>
    </div>
  );
};
