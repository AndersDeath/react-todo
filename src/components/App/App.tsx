
import { AddInput } from '../AddInput/AddInput'
import './App.scss';
import { IItem, STATUS_REMOVED, IList } from '../../interfaces';
import { ItemsList } from '../ItemsList/ItemsList';
import { useSelector } from 'react-redux';
import { getItems } from '../../store/selectors';
import { ListAddPopup } from '../ListAddPopup/ListAddPopup';
import { useState } from 'react';
import { createList } from '../../entities/List/List';

function App() {
  const items: IItem[] = useSelector(getItems);
  const activeItems: IItem[] = [];
  const removedItems: IItem[] = [];
  const [showPopup, setShowPopup] = useState(false);
  let i:IList[] = []
  const [lists, setList] = useState<IList[]>(i);
  
  items.forEach((item: IItem) => {
    if(item.status !== STATUS_REMOVED) {
      activeItems.push(item);
    } else {
      removedItems.push(item);
    }
  });

  function addListHandler() {
    setShowPopup(true);
}

  return (
    <div className="container">
      <div className="left-container">
        {
          lists.map((e:IList) => {
            return <div key={e.key} className="list-btn">
            {e.title}
          </div>
          })
        }

        <div className="add-list-btn" onClick={() => {
          addListHandler();
        }}>
          Create list
        </div>
      </div>
        <div className="right-container">

          <AddInput />
          <ItemsList
            items={activeItems}
          />
          <ItemsList
            items={removedItems}
          />
        </div>
        <ListAddPopup
      closeHandler={(title: string) =>{
          setShowPopup(false);
          console.log(title);
          setList([...lists, createList(title)]);
      }}
      show={showPopup}/>
    </div>
   
  );
}

export default App;
