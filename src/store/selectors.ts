import { IItem, ItemState } from "../interfaces";

export const getItems = (state: ItemState) => state.items;

export const getItem =
  (itemId: number) => 
  ( el: ItemState ) =>
  el.items.find((item: IItem) => item.key === itemId)
  
