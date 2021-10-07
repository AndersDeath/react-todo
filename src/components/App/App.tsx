
import { AddInput } from '../AddInput/AddInput'
import './App.scss';
import { IItem, STATUS_REMOVED } from '../../interfaces';
import { ItemsList } from '../ItemsList/ItemsList';
import { useSelector } from 'react-redux';
import { getItems } from '../../store/selectors';

function App() {
  const items: IItem[] = useSelector(getItems);
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
