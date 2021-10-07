import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IItem } from '../../interfaces';
import { updateItemAction } from '../../store/actionCreators';
import './ItemInfoPopup.scss';

export function ItemInfoPopup(props: any) {

    const [title, setTitle] = useState(props.item.title);
    const [body, setBody] = useState(props.item.body);

    const dispatch: Dispatch<any> = useDispatch()

    const updateItem = useCallback(
      (item: IItem) => dispatch(updateItemAction(item)),
      [dispatch]
    )

    function titleOnChange(val: React.ChangeEvent<HTMLInputElement>) {
        setTitle(val.target.value);
        props.item.title = val.target.value;
        updateItem(props.item);
    }

    function bodyOnChange(val: React.ChangeEvent<HTMLTextAreaElement>) {
        setBody(val.target.value);
        props.item.body = val.target.value;
        updateItem(props.item);
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
                    <input type="text" className="text-input-popup" value={title} onChange={titleOnChange}/>
                    <textarea defaultValue={body} onChange={bodyOnChange}>
                    </textarea>
                </div>
                <div className="item-info-popup__bottom">
                    <button onClick={() => {
                            props.closeHandler()
                        }}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>;
    }
    return (<>{fragment}</>);
}