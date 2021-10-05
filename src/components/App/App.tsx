
import { AddInput } from '../AddInput/AddInput'
import './App.scss';
import { IItem, ItemState, STATUS_REMOVED, STATUS_RESTORED } from '../../interfaces';
import { createItem } from '../../entities/Item';
import { ItemsList } from '../ItemsList/ItemsList';
import { Dispatch, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAction, updateItemAction } from '../../store/actionCreators';

function App() {

  const items: readonly IItem[] = useSelector(
    (state: ItemState) => state.items
  )
  const dispatch: Dispatch<any> = useDispatch()

  const addItem = useCallback(
    (item: IItem) => dispatch(addItemAction(item)),
    [dispatch]
  )

  const updateItem = useCallback(
    (item: IItem) => dispatch(updateItemAction(item)),
    [dispatch]
  )

  function toggleDoneHandler(item: IItem) {
    item.done = !item.done;
    updateItem(item);
  }

  function removeHandler(item: IItem) {
    item.status = STATUS_REMOVED;
    updateItem(item);
  }

  function restoreHandler(item: IItem) {
    item.status = STATUS_RESTORED;
    updateItem(item);
  }

  return (
    <div className="containter">
      <AddInput addItem={(item: string) => {
        addItem(createItem(item))
      }} />
      <ItemsList
      items={items}
      toggleDoneHandler={toggleDoneHandler}
      removeHandler={removeHandler}
      restoreHandler={restoreHandler}
      />
    </div>
  );
}

export default App;
