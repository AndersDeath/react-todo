import { IList } from '../../interfaces';
import { listIdGen } from "../../services/IdGen/IdGen";

let date = new Date();
export const defaultListData: IList[] = [
  {
    key: listIdGen.get(),
    title: 'first',
    status: '',
    comment: '',
    items: [],
    datetime: date.toISOString()
  },
  {
    key: listIdGen.get(),
    title: 'second',
    status: '',
    comment: '',
    items: [],
    datetime: date.toISOString()
  },
  {
    key: listIdGen.get(),
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
