import { createList } from "../entities/List";
import { IItem, IList, ItemState, MainState } from "../interfaces";

export const getItems = (state: ItemState) => state.items;

export const getLists = (state: MainState) => {
  return state.lists.lists;
}


export const getCurrentListId = (state: MainState) => {
  return state.currentListId.currentListId;
}

export const getItem =
  (itemId: number, listId: number) => 
  ( el: MainState ) => {
    const list = el.lists.lists.find((l: IList) => {
      return l.key === listId;
    });
    if(list !== undefined) {
      return list.items.find((item: IItem) => item.key === itemId);
    }
    return {};
  }
  
  export const getList =
  (listId: number) => 
  ( el: MainState ) => {
    const list = el.lists.lists.find((l: IList) => {
      return l.key === listId;
    });
    if (list === undefined) {
      return  createList('')
    }
    return list;
  }
  
