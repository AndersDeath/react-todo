import { IItem, IList } from '../../interfaces';
import { itemIdGen, listIdGen } from "../../services/IdGen/IdGen";

let date = new Date();
export const defaultListData: IList[] = [
  {
    key: itemIdGen.get(),
    title: 'first',
    status: '',
    comment: '',
    items: [],
    datetime: date.toISOString()
  },
  {
    key: itemIdGen.get(),
    title: 'second',
    status: '',
    comment: '',
    items: [],
    datetime: date.toISOString()
  },
  {
    key: itemIdGen.get(),
    title: 'third',
    status: '',
    comment: '',
    items: [],
    datetime: date.toISOString()
  },
  
];

export function createList(input: string, comment?: string): IList {
    const date = new Date();
    return  {
        key: listIdGen.get(),
        title: input,
        status: '',
        comment: comment || '',
        items: [],
        datetime: date.toISOString()
      }
}

export function addItemToList(list: IList, item: IItem): IList {
  list.items.push(item);
  return list;
}

export function updateItemIntoList(list: IList, item: IItem): IList {
  if(list.items.length === 0) {
    return list;
  }
  list.items.map((e: IItem) => {
    if(e.key === item.key) {
      e = item;
    }
    return e;
  });
  return list;
}