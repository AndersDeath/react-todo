
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

export interface IList {
  key: number;
  title: string;
  status: string;
  comment: string;
  datetime: string;
  items: IItem[];
}

export type ItemAction = {
  type: string
  item: IItem
}

export type ListAction = {
  type: string;
  list: IList;
}
export type CurrentListIdAction = {
  type: string;
  listId: number;
}

export type ItemState = {
  items: IItem[]
}

export type MainState = {
  lists: ListState
  currentListId: CurrentListIdState;
}

export type ListState = {lists:IList[]};

export type CurrentListIdState = {
  currentListId: number;
};


export type DispatchType = (args: ItemAction) => ItemAction

export type DispatchType2 = (args: ListAction) => ListAction
