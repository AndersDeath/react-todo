import { IItem } from "../../interfaces";
import { itemIdGen } from "../../services/IdGen/IdGen";

let date = new Date();
export const defaultItemData: IItem[] = [
  {
    key: itemIdGen.get(),
    title: 'first',
    status: '',
    done: false,
    body: '',
    datetime: date.toISOString()
  },
  {
    key: itemIdGen.get(),
    title: 'second',
    status: '',
    done: false,
    body: '',
    datetime: date.toISOString()
  },
  {
    key: itemIdGen.get(),
    title: 'third ',
    status: '',
    done: false,
    body: '',
    datetime: date.toISOString()
  },
  
];

export function createItem(input: string, body?: string): IItem {
    const date = new Date();
    return {
        key: itemIdGen.get(),
        title: input,
        status: '',
        done: false,
        body: body || '',
        datetime: date.toISOString()
      }
}
