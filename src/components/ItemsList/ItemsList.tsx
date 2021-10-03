import { faCheckSquare, faSquare, faTrash, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IItem, STATUS_REMOVED } from "../../interfaces";

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
            props.toggleDoneHandler(item.key);
          }
        }}>
          <span className="icon">
            <FontAwesomeIcon icon={icon} />
          </span>
          <span className="text">{item.title}</span>
          <span className="icon-trash" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            props.removeHandler(item.key);
          }}>
            <FontAwesomeIcon icon={faTrash} />
          </span>
          <span className="icon-restore" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            props.restoreHandler(item.key);
          }}>
            <FontAwesomeIcon icon={faTrashRestore} />
          </span>
        </div>
      })
    }
  </div>);

}