import React, { useState, KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSquare, faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { idGen } from '../../services/IdGen/IdGen';

import './App.scss';

const STATUS_TODO = 'status_todo';
const STATUS_DONE = 'status_done';
const STATUS_REMOVED = 'status_removed';

interface IItem {
  key: number;
  title: string;
  status: string;
}
const defaultData: IItem[] = [
  {
    key: idGen.get(),
    title:'first',
    status: STATUS_TODO
  },
  {
    key: idGen.get(),
    title:'second',
    status: STATUS_TODO
  },
  {
    key: idGen.get(),
    title:'third ',
    status: STATUS_TODO
  },   
]



function App() {

  const [input, setInput] = useState<string>('')

  const [items, setItem] = useState<IItem[]>([...defaultData]);
  
  function inputOnChange(val: React.ChangeEvent<HTMLInputElement>){
    setInput(val.target.value);
  } 
  
  function addItem(){
    if(input.trim().length > 0) {
      let item:IItem[] = [...items,{
        key: idGen.get(),
        title: input,
        status: STATUS_TODO,
      }];
      setItem(item);
      setInput('')
    }
  }
  function setStatus(key:number) {
    setItem(items.map((e) => {
      if(key === e.key) {
        if(e.status === STATUS_TODO) {
          e.status = STATUS_DONE;
        } else if (e.status === STATUS_DONE) {
          e.status = STATUS_TODO;
        }
      }
      return e;
    }));
  }

  function remove(key: number) {
    setItem(items.map((e) => {
      if(key === e.key) {
          e.status = STATUS_REMOVED;
      }
      return e;
    }));
  }

  function onKeyDownHandler(event: KeyboardEvent) {
    if(event.code === 'Enter') {
      addItem();
    }
  }

  return (
    <div className="containter">
      <div className="input">
      <button onClick={() => {
          addItem();
        }}>
          <FontAwesomeIcon icon={faPlusCircle} />
      </button>  
        <input value={input} onKeyUp={onKeyDownHandler} onChange={inputOnChange} type="search" />
      </div>
      <div className="list">
        {
         items.map((item: IItem) => {
          let style = 'list__item';
          let icon = faSquare;
          if(item.status === STATUS_DONE) {
            style += ' done';
            icon = faCheckSquare;
          }

          if(item.status === STATUS_REMOVED) {
            style += ' removed';
          }
          return <div className={style}  key={item.key} onClick={() => {
            setStatus(item.key);
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
            </div>
         })
        }
      </div>
    </div>
  );
}

export default App;
