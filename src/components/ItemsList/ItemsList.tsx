import { faCheckSquare, faSquare, faTrash, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IItem, STATUS_REMOVED } from "../../interfaces";
import { ItemsListBtn } from "../ItemsListBtn/ItemsListBtn";

export function ItemsList(props: any) {

    return (<div className="list">
    {
      props.items.map((item: IItem) => {
        let style = 'list__item';
        let icon = faSquare;
        if (item.done) {
          style += ' done';
          icon = faCheckSquare;
        }
        if (item.status === STATUS_REMOVED) {
          style += ' removed';
        }
        return <div className={style} key={item.key} onClick={() => {
          if(item.status !== STATUS_REMOVED) {
            props.toggleDoneHandler(item);
          }
        }}>
          <span className="icon">
            <FontAwesomeIcon icon={icon} />
          </span>
          <span className="text">{item.title}</span>
          <ItemsListBtn
            className="icon-trash"
            handler={props.removeHandler}
            item={item}
            fontAwesomIconLink={faTrash}
          />
          <ItemsListBtn
            className="icon-restore"
            handler={props.restoreHandler}
            item={item}
            fontAwesomIconLink={faTrashRestore}
          />
        </div>
      })
    }
  </div>);

}