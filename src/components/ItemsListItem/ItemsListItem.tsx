import { faCheckSquare, faSquare, faTrash, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { IItem, STATUS_REMOVED, STATUS_RESTORED } from "../../interfaces";
import { updateItemAction } from "../../store/actionCreators";
import { ItemsListBtn } from "../ItemsListBtn/ItemsListBtn";


export function ItemsListItem(props: any) {

    const dispatch: Dispatch<any> = useDispatch()

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

    function inputOnChange(val: React.ChangeEvent<HTMLInputElement>) {
        setInput(val.target.value);
        props.item.title = val.target.value;
        updateItem(props.item);
    }

    const [input, setInput] = useState<string>(props.item.title)


    let style = 'list__item';
    let icon = faSquare;
    if (props.item.done) {
      style += ' done';
      icon = faCheckSquare;
    }
    if (props.item.status === STATUS_REMOVED) {
      style += ' removed';
    }
    return (<div className={style} key={props.item.key} >
      <span className="icon" onClick={() => {
      if(props.item.status !== STATUS_REMOVED) {
        toggleDoneHandler(props.item);
      }
    }}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <input type="text" className="text-input" value={input} onChange={inputOnChange}/>
      <div className="button-area">
        <ItemsListBtn
          className="icon-trash"
          handler={() => {
            removeHandler(props.item);
          }}
          item={props.item}
          fontAwesomIconLink={faTrash}
        />
        <ItemsListBtn
          className="icon-restore"
          handler={() => {
            restoreHandler(props.item);
          }}
          item={props.item}
          fontAwesomIconLink={faTrashRestore}
        />
      </div>
    </div>)
}