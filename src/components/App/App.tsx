import React, { useState, KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { idGen } from '../../services/IdGen/IdGen';

import './App.scss';
interface IItem {
  key: number;
  title: string;
  status: boolean;
}
const defaultData: IItem[] = [
  {
    key: idGen.get(),
    title:'first',
    status: false
  },
  {
    key: idGen.get(),
    title:'second',
    status: false
  },
  {
    key: idGen.get(),
    title:'third ',
    status: false
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
        status: false,
      }];
      setItem(item);
      setInput('')
    }
  }
  function setStatus(key:number) {
    setItem(items.map((e) => {
      if(key === e.key) {
        e.status = !e.status;
      }
      return e;
    }))
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
          if(item.status) {
            style += ' done';
            icon = faCheckSquare;
          }
          return <div className={style}  key={item.key} onClick={() => {
            setStatus(item.key);
          }}>
            <span className="icon">
              <FontAwesomeIcon icon={icon} />
            </span>
            <span className="text">{item.title}</span>
            </div>
         })
        }
      </div>
    </div>
  );
}

export default App;
