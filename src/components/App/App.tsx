import React, { useState, KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSquare, faCheckSquare, faSquareRootAlt, faShareSquare, faCheck } from '@fortawesome/free-solid-svg-icons'

import './App.scss';
interface IItem {
  key: number;
  title: string;
  status: boolean;
}
const defaultData: IItem[] = [
  {
    key: 0,
    title:'first',
    status: false
  },
  {
    key: 1,
    title:'second',
    status: false
  },
  {
    key: 2,
    title:'third ',
    status: false
  },   
]



function App() {

  const [input, setInput] = useState<string>('')
  const [iterator, setIterator] = useState<number>(3)

  const [items, setItem] = useState<IItem[]>([...defaultData]);
  
  function inputOnChange(val: React.ChangeEvent<HTMLInputElement>){
    setInput(val.target.value);
  } 
  
  function addItem(iterator: number){
    if(input.trim().length > 0) {
      let item:IItem[] = [...items,{
        key: iterator,
        title: input,
        status: false,
      }];
      setIterator(++iterator);
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
      addItem(iterator);
    }
  }

  return (
    <div className="containter">
      <div className="input">
      <button onClick={() => {
          addItem(iterator);
        }}>
          <FontAwesomeIcon icon={faPlusCircle} />
      </button>  
        <input value={input} onKeyUp={onKeyDownHandler} onChange={inputOnChange} type="search" />
      </div>
      <div className="list">
        {
         items.map((item: IItem) => {
          let style = 'list__item';
          let styleDone = '';
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
