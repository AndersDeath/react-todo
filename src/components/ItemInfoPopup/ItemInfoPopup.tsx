import { Dispatch, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IItem } from '../../interfaces';
// import { updateItemAction } from '../../store/actionCreators';
import { getItem } from '../../store/selectors';
import './ItemInfoPopup.scss';

export function ItemInfoPopup(props: any) {

    const el: any = useSelector(getItem(props.item.key, props.listId));
    const [item, setItem] = useState(el);
  
    // const dispatch: Dispatch<any> = useDispatch()

    // const updateItem = useCallback(
    //   (item: IItem) => dispatch(updateItemAction(item)),
    //   [dispatch]
    // )

    function titleOnChange(val: React.ChangeEvent<HTMLInputElement>) {
        item.title = val.target.value;
        setItem(item);
        // updateItem(item);
    }

    function bodyOnChange(val: React.ChangeEvent<HTMLTextAreaElement>) {
        item.body = val.target.value;
        setItem(item);
        // updateItem(item);
    }

    let fragment = <></>;
    if(props.show) {
        fragment =  <div className="item-info-popup active">
        <div className="item-info-popup__overlay">
            <div className="item-info-popup__container">
                <div className="item-info-popup__header">
                    <span className="icon icon-close">
                        
                    </span>
                </div>
                <div className="item-info-popup__body">
                    <input type="text" className="text-input-popup" defaultValue={item.title} onChange={titleOnChange}/>
                    <textarea className="text-input-textarea" defaultValue={item.body} onChange={bodyOnChange}>
                    </textarea>
                    Date: {item.datetime} <br/>
                    Done:  {item.done.toString()} <br/>
                    Status:  {item.status.toString()} <br/>
                </div>
                <div className="item-info-popup__bottom">
                    <div className="btn-area">
                        <button className="btn" onClick={() => {
                                props.closeHandler(item.title)
                            }}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
    }
    return (<>{fragment}</>);
}