
import { AddInput } from '../AddInput/AddInput'
import './App.scss';
import { IItem, STATUS_REMOVED, STATUS_RESTORED } from '../../interfaces';
import { createItem, defaultItemData, setItemStatus, updateItemStatus } from '../../entities/Item';
import { ItemsList } from '../ItemsList/ItemsList';
import { useState } from 'react';

function App() {
  const [items, setItem] = useState<IItem[]>([...defaultItemData]);

  function addItemHandler(input: string) {
    if (input.trim().length > 0) {
      setItem([...items, createItem(input)]);
    }
  }

  function toggleDoneHandler(key: number) {
    setItem(updateItemStatus(items, key));
  }

  function removeHandler(key: number) {
    setItem(setItemStatus(items, STATUS_REMOVED, key));
  }

  function restoreHandler(key: number) {
    setItem(setItemStatus(items, STATUS_RESTORED, key));
  }

  return (
    <div className="containter">
      <AddInput addItem={(item: string) => {
        addItemHandler(item)
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
