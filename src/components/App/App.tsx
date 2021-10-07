
import { AddInput } from '../AddInput/AddInput'
import './App.scss';
import { IItem, ItemState, STATUS_REMOVED } from '../../interfaces';
import { ItemsList } from '../ItemsList/ItemsList';
import { shallowEqual, useSelector } from 'react-redux';
// import { ItemInfoPopup } from '../ItemInfoPopup/ItemInfoPopup';
// import { idGen } from '../../services/IdGen/IdGen';

function App() {

  const items: readonly IItem[] = useSelector(
    (state: ItemState) => state.items,
    shallowEqual
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
  // let date = new Date();

  return (
    <div className="containter">
      <AddInput />
      <ItemsList
        items={activeItems}
      />
      <ItemsList
        items={removedItems}
      />
      {/* <ItemInfoPopup show={true} item={
        {
          key: idGen.get(),
          title: 'first',
          status: '',
          done: false,
          datetime: date.toISOString()
        }
      }/> */}
    </div>
  );
}

export default App;
