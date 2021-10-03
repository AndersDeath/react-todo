import { IItem } from "../../interfaces";
import { idGen } from "../../services/IdGen/IdGen";

let date = new Date();
export const defaultItemData: IItem[] = [
  {
    key: idGen.get(),
    title: 'first',
    status: '',
    done: false,
    datetime: date.toISOString()
  },
  {
    key: idGen.get(),
    title: 'second',
    status: '',
    done: false,
    datetime: date.toISOString()
  },
  {
    key: idGen.get(),
    title: 'third ',
    status: '',
    done: false,
    datetime: date.toISOString()
  },
];

export function createItem(input: string): IItem {
    const date = new Date();

    return {
        key: idGen.get(),
        title: input,
        status: '',
        done: false,
        datetime: date.toISOString()
      }
}

export function setItemStatus(data: IItem[], status: string, key: number) {
    return data.map((e) => {
      if (key === e.key) {
        e.status = status;
      }
      return e;
    })
  }


export function updateItemStatus(items: IItem[], key: number) {
    return items.map((e) => {
      if (key === e.key) {
        e.done = !e.done;
      }
      return e;
    })
  }
  