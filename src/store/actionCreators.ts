import { CurrentListIdAction, DispatchType2, IList, ListAction } from "../interfaces"
import * as actionTypes from "./actionTypes"


export function addListAction(list: IList) {
  const action: ListAction = {
    type: actionTypes.ADD_LIST,
    list,
  }

  return simulateHttpRequest(action)
}

export function addItemToListAction(list: IList) {
  const action: ListAction = {
    type: actionTypes.UPDATE_LIST,
    list,
  }

  return simulateHttpRequest(action)
}

export function updateItemIntoListAction(list: IList) {
  const action: ListAction = {
      type: actionTypes.UPDATE_LIST,
      list,
  }
  return simulateHttpRequest(action)
}

export function setCurrentListIdAction(listId: number) {
  const action: CurrentListIdAction = {
    type: actionTypes.SET_CURRENT_LIST_ID,
    listId,
  }

  return (dispatch: any) => {
    dispatch(action)
  }
}

export function simulateHttpRequest(action: ListAction) {
  return (dispatch: DispatchType2) => {
    setTimeout(() => {
      dispatch(action)
    }, 100)
  }
}