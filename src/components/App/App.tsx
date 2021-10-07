
import { AddInput } from '../AddInput/AddInput'
import './App.scss';
import { IItem, STATUS_REMOVED } from '../../interfaces';
import { ItemsList } from '../ItemsList/ItemsList';
import { useSelector } from 'react-redux';
import { getItems } from '../../store/selectors';
import { ListAddPopup } from '../ListAddPopup/ListAddPopup';
import { useState } from 'react';

function App() {
  const items: IItem[] = useSelector(getItems);
  const activeItems: IItem[] = [];
  const removedItems: IItem[] = [];
  const [showPopup, setShowPopup] = useState(false);

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
        <div className="list-btn">
          First List
        </div>
        <div className="list-btn">
          Second List
        </div>
        <div className="list-btn">
          THird List
        </div>
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
      }}
      show={showPopup}/>
    </div>
   
  );
}

export default App;
