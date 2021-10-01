
export interface IItem {
    key: number;
    title: string;
    status: string;
  }

export const STATUS_TODO = 'status_todo';
export const STATUS_DONE = 'status_done';
export const STATUS_REMOVED = 'status_removed';