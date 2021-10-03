import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faTrash, faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import { idGen } from '../../services/IdGen/IdGen';
import { AddInput } from '../addInput/AddInput'
import './App.scss';
import { IItem, STATUS_DONE, STATUS_REMOVED, STATUS_RESTORED, STATUS_TODO } from '../../interfaces';

let date = new Date();
const defaultData: IItem[] = [
  {
    key: idGen.get(),
    title: 'first',
    status: STATUS_TODO,
    done: false,
    datetime: date.toISOString()
  },
  {
    key: idGen.get(),
    title: 'second',
    status: STATUS_TODO,
    done: false,
    datetime: date.toISOString()
  },
  {
    key: idGen.get(),
    title: 'third ',
    status: STATUS_TODO,
    done: false,
    datetime: date.toISOString()
  },
];


function updateStatus(items: IItem[], key: number) {
  return items.map((e) => {
    if (key === e.key) {
      e.done = !e.done;
    }
    return e;
  })
}

function App() {
  let date = new Date();
  const [items, setItem] = useState<IItem[]>([...defaultData]);

  function addItem(input: string) {
    if (input.trim().length > 0) {
      let item: IItem[] = [...items, {
        key: idGen.get(),
        title: input,
        status: STATUS_TODO,
        done: false,
        datetime: date.toISOString()
      }];
      setItem(item);
    }
  }

  function setStatus(key: number) {
    setItem(updateStatus(items, key));
  }

  function remove(key: number) {
    setItem(items.map((e) => {
      if (key === e.key) {
        e.status = STATUS_REMOVED;
      }
      return e;
    }));
  }

  function restore(key: number) {
    setItem(items.map((e) => {
      if (key === e.key) {
        e.status = STATUS_RESTORED;
      }
      return e;
    }));
  }

  return (
    <div className="containter">
      <AddInput addItem={(item: string) => {
        addItem(item)
      }} />
      <div className="list">
        {
          items.map((item: IItem) => {
            let style = 'list__item';
            let icon = faSquare;
            if (item.done && item.status) {
              style += ' done';
              icon = faCheckSquare;
            }
            if (item.status === STATUS_REMOVED) {
              style += ' removed';
            }
            return <div className={style} key={item.key} onClick={() => {
              if(item.status !== STATUS_REMOVED) {
                setStatus(item.key);
              }
            }}>
              <span className="icon">
                <FontAwesomeIcon icon={icon} />
              </span>
              <span className="text">{item.title}</span>
              <span className="icon-trash" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                remove(item.key);
              }}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span className="icon-restore" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                restore(item.key);
              }}>
                <FontAwesomeIcon icon={faTrashRestore} />
              </span>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
