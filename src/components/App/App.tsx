
import { AddInput } from '../AddInput/AddInput'
import './App.scss';
import { IItem, ItemState, STATUS_REMOVED } from '../../interfaces';
import { ItemsList } from '../ItemsList/ItemsList';
import { useSelector } from 'react-redux';

function App() {

  const items: readonly IItem[] = useSelector(
    (state: ItemState) => state.items
  )
  const activeItems: IItem[] = [];
  const removedItems: IItem[] = [];

  items.forEach((item: IItem) => {
    if(item.status !== STATUS_REMOVED) {
      activeItems.push(item);
    } else {
      removedItems.push(item);
    }
  });
  return (
    <div className="containter">
      <AddInput />
      <ItemsList
        items={activeItems}
      />
      <ItemsList
        items={removedItems}
      />
    </div>
  );
}

export default App;
