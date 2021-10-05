import { DispatchType, IItem, ItemAction } from "../interfaces"
import * as actionTypes from "./actionTypes"

export function addItemAction(item: IItem) {
  const action: ItemAction = {
    type: actionTypes.ADD_ITEM,
    item,
  }

  return simulateHttpRequest(action)
}

export function removeItemAction(item: IItem) {
  const action: ItemAction = {
    type: actionTypes.REMOVE_ITEM,
    item,
  }
  return simulateHttpRequest(action)
}

export function updateItemAction(item: IItem) {
    const action: ItemAction = {
        type: actionTypes.UPDATE_ITEM,
        item,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ItemAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 100)
  }
}