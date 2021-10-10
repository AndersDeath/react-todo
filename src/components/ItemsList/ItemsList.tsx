
import { IItem } from "../../interfaces";
import { ItemsListItem } from "../ItemsListItem/ItemsListItem";

export function ItemsList(props: any) {
  return (<div className="list">
    {
      props.items.map((item: IItem) => {
        return <ItemsListItem key={item.key} item={item} listId={props.listId}/>
      })
    }
  </div>);
}