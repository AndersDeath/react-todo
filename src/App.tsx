import React, { useState, KeyboardEvent } from 'react';
import './App.scss';

interface IItem {
  key: number;
  title: string;
  status: boolean;
}

function App() {

  const [input, setInput] = useState<string>('')
  const [iterator, setIterator] = useState<number>(3)

  const [items, setItem] = useState<IItem[]>([
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
  ]);
  
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
        <input value={input} onKeyUp={onKeyDownHandler} onChange={inputOnChange} type="text" /><button onClick={() => {
          addItem(iterator);
        }}>add</button>     
      </div>
      <div className="list">
        {
         items.map((item: IItem) => {
          let style = 'list__item';
          if(item.status) {
            style += ' done'
          }
          return <div className={style}  key={item.key} onClick={() => {
            setStatus(item.key);
          }}>{item.title}</div>
         })
        }
      </div>
    </div>
  );
}

export default App;
