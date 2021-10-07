
export const STATUS_TODO = 'status_todo';
export const STATUS_DONE = 'status_done';
export const STATUS_REMOVED = 'status_removed';
export const STATUS_RESTORED = 'status_restored';

export interface IItem {
  key: number;
  title: string;
  status: string;
  done: boolean;
  body: string;
  datetime: string;
}

export type ItemAction = {
  type: string
  item: IItem
}

export type ItemState = {
  items: IItem[]
}

export type DispatchType = (args: ItemAction) => ItemAction