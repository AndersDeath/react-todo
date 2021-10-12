import * as actionTypes from "./actionTypes"
import { listIdGen } from "../services/IdGen/IdGen";
import { CurrentListIdAction, CurrentListIdState, IList, ListAction, ListState } from "../interfaces";
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


const listsReducer = (
  state: ListState = {lists: defaultListData1},
  action: ListAction
): ListState => {
  switch (action.type) {
    case actionTypes.ADD_LIST:
      return {
        ...state,
        lists: state.lists.concat(action.list)
      }
    case actionTypes.UPDATE_LIST:
      const updatedLists: IList[] = state.lists.map((e:IList) => {
        if (action.list.key === e.key) {
          e = action.list
        };
        return e;
      });
      return {
        ...state,
        lists: updatedLists,
      }
  }
  return state
}

const listIdReducer = (
  state: CurrentListIdState = { currentListId: 1},
  action: CurrentListIdAction
): CurrentListIdState => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_LIST_ID:
      return {
        ...state,
        currentListId: action.listId
      }

  }
  return state
}


export { listsReducer, listIdReducer}