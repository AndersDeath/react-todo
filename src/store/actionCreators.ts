import { DispatchType, DispatchType2, IItem, IList, ItemAction, ListAction } from "../interfaces"
import * as actionTypes from "./actionTypes"


export function addListAction(list: IList) {
  const action: ListAction = {
    type: actionTypes.ADD_LIST,
    list,
  }

  return simulateHttpRequest(action)
}

// export function addItemAction(item: IItem) {
//   const action: ItemAction = {
//     type: actionTypes.ADD_ITEM,
//     item,
//   }

//   return simulateHttpRequest(action)
// }

// export function removeItemAction(item: IItem) {
//   const action: ItemAction = {
//     type: actionTypes.REMOVE_ITEM,
//     item,
//   }
//   return simulateHttpRequest(action)
// }

// export function updateItemAction(item: IItem) {
//     const action: ItemAction = {
//         type: actionTypes.UPDATE_ITEM,
//         item,
//     }
//     return simulateHttpRequest(action)
// }

export function simulateHttpRequest(action: ListAction) {
  return (dispatch: DispatchType2) => {
    setTimeout(() => {
      dispatch(action)
    }, 100)
  }
}