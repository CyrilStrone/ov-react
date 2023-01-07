import { createEvent, createStore } from "effector";

export const $checkStock = createStore<any>(0)  
export const setcheckStock = createEvent<any>()
$checkStock.on(setcheckStock, (_,val)=> val);
export const $checkAmazing = createStore<any>(false)  
export const setcheckAmazing = createEvent<any>()
$checkAmazing.on(setcheckAmazing, (_,val)=> val);