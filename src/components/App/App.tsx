import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faTrash, faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import { idGen } from '../../services/IdGen/IdGen';
import { AddInput } from '../addInput/AddInput'
import './App.scss';
import { IItem, STATUS_REMOVED, STATUS_RESTORED } from '../../interfaces';

let date = new Date();
const defaultData: IItem[] = [
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


function updateStatus(items: IItem[], key: number) {
  return items.map((e) => {
    if (key === e.key) {
      e.done = !e.done;
    }
    return e;
  })
}

function App() {
  const [items, setItem] = useState<IItem[]>([...defaultData]);

  function addItemHandler(input: string) {
    if (input.trim().length > 0) {
      const date = new Date();
      let item: IItem[] = [...items, {
        key: idGen.get(),
        title: input,
        status: '',
        done: false,
        datetime: date.toISOString()
      }];
      setItem(item);
    }
  }

  function setStatusHandler(key: number) {
    setItem(updateStatus(items, key));
  }

  function setStatus(data: IItem[], status: string, key: number) {
    return data.map((e) => {
      if (key === e.key) {
        e.status = status;
      }
      return e;
    })
  }

  function removeHandler(key: number) {
    setItem(setStatus(items, STATUS_REMOVED, key));
  }

  function restoreHandler(key: number) {
    setItem(setStatus(items, STATUS_RESTORED, key));
  }

  return (
    <div className="containter">
      <AddInput addItem={(item: string) => {
        addItemHandler(item)
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
                setStatusHandler(item.key);
              }
            }}>
              <span className="icon">
                <FontAwesomeIcon icon={icon} />
              </span>
              <span className="text">{item.title}</span>
              <span className="icon-trash" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeHandler(item.key);
              }}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span className="icon-restore" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                restoreHandler(item.key);
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
