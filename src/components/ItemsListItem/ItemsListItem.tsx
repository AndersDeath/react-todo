import { faCheckSquare, faInfoCircle, faSquare, faTrash, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemIntoList } from "../../entities/List";
import { IItem, IList, STATUS_REMOVED, STATUS_RESTORED } from "../../interfaces";
import { updateItemIntoListAction } from "../../store/actionCreators";
import { getItem } from "../../store/selectors";
import { ItemInfoPopup } from "../ItemInfoPopup/ItemInfoPopup";
import { ItemsListBtn } from "../ItemsListBtn/ItemsListBtn";

export function ItemsListItem(props: any) {
    const item: any = useSelector(getItem(props.item.key, props.list.key));
    const [val, setVal] = useState(item.title);

    const [showPopup, setShowPopup] = useState(false);
    const dispatch: Dispatch<any> = useDispatch()

    const updateItem = useCallback(
      (list: IList) => dispatch(updateItemIntoListAction(list)),
      [dispatch]
    )

    function toggleDoneHandler(item: IItem) {
      item.done = !item.done;
      updateItem(updateItemIntoList(props.list, item));
    }
  
    function removeHandler(item: IItem) {
      item.status = STATUS_REMOVED;
      updateItem(updateItemIntoList(props.list, item));
    }
  
    function restoreHandler(item: IItem) {
      item.status = STATUS_RESTORED;
      updateItem(updateItemIntoList(props.list, item));
    }

    function inputOnChange(val: React.ChangeEvent<HTMLInputElement>) {
        item.title = val.target.value;
        setVal(val.target.value);
        updateItem(updateItemIntoList(props.list, item));
      }

    function infoHandler() {
        setShowPopup(true);
    }

    let style = 'list__item';
    let icon = faSquare;
    let isDisabled = false
    if (item.done) {
      style += ' done';
      icon = faCheckSquare;
    }
    if (item.status === STATUS_REMOVED) {
      style += ' removed';
      isDisabled = true;
    }
    return (<div className={style} key={item.key} >
      <span className="icon" onClick={() => {
      if(item.status !== STATUS_REMOVED) {
        toggleDoneHandler(item);
      }
    }}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <input disabled={isDisabled} type="text" className="text-input" value={val} onChange={inputOnChange}/>
      <div className="button-area">
         <ItemsListBtn
          className="icon-info"
          handler={() => {
            infoHandler();
          }}
          item={item}
          fontAwesomIconLink={faInfoCircle}
        />
        <ItemsListBtn
          className="icon-trash"
          handler={() => {
            removeHandler(item);
          }}
          item={item}
          fontAwesomIconLink={faTrash}
        />
        <ItemsListBtn
          className="icon-restore"
          handler={() => {
            restoreHandler(item);
          }}
          item={item}
          fontAwesomIconLink={faTrashRestore}
        />

      </div>
      <ItemInfoPopup
      item={item}
      list={props.list}
      closeHandler={(item: string) =>{
          setShowPopup(false);
          setVal(item);
      }}
      show={showPopup}/>
    </div>)
}