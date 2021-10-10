import * as actionTypes from "./actionTypes"
import { itemIdGen, listIdGen } from "../services/IdGen/IdGen";
import { IItem, IList, ItemAction, ItemState, ListAction, MainState } from "../interfaces";
import { defaultItemData } from "../entities/Item";


let date = new Date();
let defaultListData1: IList[] = [{
  key: listIdGen.get(),
  title: "first",
  status: '',
  comment: '',
  datetime: date.toISOString(),
  items: defaultItemData
}]

export const initialState: MainState = {
  lists: defaultListData1
};

const reducer = (
  state: MainState = initialState,
  action: ListAction
): MainState => {
  switch (action.type) {
    case actionTypes.ADD_LIST:
      return {
        ...state,
        lists: state.lists.concat(action.list)
      }
    // case actionTypes.ADD_ITEM:
    //   const newItem: IItem = {
    //     key: itemIdGen.get(),
    //     title: action.item.title,
    //     status: '',
    //     done: false,
    //     body: action.item.body || '',
    //     datetime: date.toISOString()
    //   }
    //   return {
    //     ...state,
    //     items: state.items.concat(newItem),
    //   }
    // case actionTypes.UPDATE_ITEM:
    //   const updatedItems: IItem[] = state.items.map((e:IItem) => {
    //     if (action.item.key === e.key) {
    //       e = action.item
    //     };
    //     return e;
    //   });
    //   return {
    //     ...state,
    //     items: updatedItems,
    //   }
  }
  return state
}

export default reducer