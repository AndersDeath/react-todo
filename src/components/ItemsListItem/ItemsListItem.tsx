import { faCheckSquare, faInfoCircle, faSquare, faTrash, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IItem, STATUS_REMOVED, STATUS_RESTORED } from "../../interfaces";
import { updateItemAction } from "../../store/actionCreators";
import { getItem } from "../../store/selectors";
import { ItemInfoPopup } from "../ItemInfoPopup/ItemInfoPopup";
import { ItemsListBtn } from "../ItemsListBtn/ItemsListBtn";


export function ItemsListItem(props: any) {
    const item: any = useSelector(getItem(props.item.key));
    const [showPopup, setShowPopup] = useState(false);
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
        item.title = val.target.value;
        updateItem(item);
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
      <input disabled={isDisabled} type="text" className="text-input" value={item.title} onChange={inputOnChange}/>
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
      closeHandler={() =>{
          setShowPopup(false);  
      }}
      show={showPopup}/>
    </div>)
}