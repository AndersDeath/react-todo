
import { AddInput } from '../AddInput/AddInput'
import './App.scss';
import { IItem, STATUS_REMOVED, IList } from '../../interfaces';
import { ItemsList } from '../ItemsList/ItemsList';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentListId, getList, getLists } from '../../store/selectors';
import { ListAddPopup } from '../ListAddPopup/ListAddPopup';
import { Dispatch, useCallback, useState } from 'react';
import { createList } from '../../entities/List/List';
import { addListAction, setCurrentListIdAction } from '../../store/actionCreators';

function App() {
  const dispatch: Dispatch<any> = useDispatch()
  const addList = useCallback(
    (list: IList) => dispatch(addListAction(list)),
    [dispatch]
  )
  const setCurrentListId = useCallback(
    (listId: number) => dispatch(setCurrentListIdAction(listId)),
    [dispatch]
  )
  const lists: IList[] = useSelector(getLists);
  const currentListId: number = useSelector(getCurrentListId);
  const list = useSelector(getList(currentListId));
  const items: IItem[] = list.items;
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
        {
          lists.map((e:IList) => {
            return <div key={e.key} className="list-btn" onClick={() => {
              setCurrentListId(e.key)
            }}>
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

          <AddInput listId={list.key} />
          <ItemsList
            items={activeItems}
            list={list}
          />
          <ItemsList
            items={removedItems}
            list={list}
          />
        </div>
        <ListAddPopup
      closeHandler={(title: string) =>{
          setShowPopup(false);
          addList(createList(title));
      }}
      show={showPopup}/>
    </div>
   
  );
}

export default App;
