import { IItem, IList, ItemState, MainState } from "../interfaces";

export const getItems = (state: ItemState) => state.items;

export const getLists = (state: MainState) => state.lists;

export const getItem =
  (itemId: number, listId: number) => 
  ( el: MainState ) => {
    const list = el.lists.find((l: IList) => {
      return l.key === listId;
    });
    if(list !== undefined) {
      return list.items.find((item: IItem) => item.key === itemId);
    }
    return {};
  }
  
