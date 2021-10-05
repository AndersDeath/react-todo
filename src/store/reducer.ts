import * as actionTypes from "./actionTypes"
import { idGen } from "../services/IdGen/IdGen";
import { IItem, ItemAction, ItemState } from "../interfaces";
import { defaultItemData } from "../entities/Item";


let date = new Date();
export const initialState: ItemState = {
  items: defaultItemData
};

const reducer = (
  state: ItemState = initialState,
  action: ItemAction
): ItemState => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newItem: IItem = {
        key: idGen.get(),
        title: action.item.title,
        status: '',
        done: false,
        datetime: date.toISOString()
      }
      return {
        ...state,
        items: state.items.concat(newItem),
      }
    case actionTypes.UPDATE_ITEM:
      const updatedItems: IItem[] = state.items.map((e:IItem) => {
        if (action.item.key === e.key) {
          e = action.item
        };
        return e;
      });
      return {
        ...state,
        items: updatedItems,
      }
  }
  return state
}

export default reducer