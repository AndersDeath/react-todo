
import { AddInput } from '../AddInput/AddInput'
import './App.scss';
import { IItem, STATUS_REMOVED, IList } from '../../interfaces';
import { ItemsList } from '../ItemsList/ItemsList';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getLists } from '../../store/selectors';
import { ListAddPopup } from '../ListAddPopup/ListAddPopup';
import { Dispatch, useCallback, useState } from 'react';
import { createList } from '../../entities/List/List';
import { addListAction } from '../../store/actionCreators';

function App() {
  const lists: IList[] = useSelector(getLists);
  const items: IItem[] = lists[0].items;
  const activeItems: IItem[] = [];
  const removedItems: IItem[] = [];
  const [showPopup, setShowPopup] = useState(false);
  // let i:IList[] = []
  // const [lists, setList] = useState<IList[]>(i);
  
  items.forEach((item: IItem) => {
    if(item.status !== STATUS_REMOVED) {
      activeItems.push(item);
    } else {
      removedItems.push(item);
    }
  });

  const dispatch: Dispatch<any> = useDispatch()

  const addList = useCallback(
    (list: IList) => dispatch(addListAction(list)),
    [dispatch]
  )

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
            listId={lists[0].key}
          />
          <ItemsList
            items={removedItems}
            listId={lists[0].key}
          />
        </div>
        <ListAddPopup
      closeHandler={(title: string) =>{
          setShowPopup(false);
          console.log(title);
          addList(createList(title));
      }}
      show={showPopup}/>
    </div>
   
  );
}

export default App;
