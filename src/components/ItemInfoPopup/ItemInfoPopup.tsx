import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IItem } from '../../interfaces';
import { updateItemAction } from '../../store/actionCreators';
import './ItemInfoPopup.scss';

export function ItemInfoPopup(props: any) {

    const [input, setInput] = useState(props.item.title);
    const dispatch: Dispatch<any> = useDispatch()

    const updateItem = useCallback(
      (item: IItem) => dispatch(updateItemAction(item)),
      [dispatch]
    )
    function inputOnChange(val: React.ChangeEvent<HTMLInputElement>) {
        setInput(val.target.value);
        props.item.title = val.target.value;
        updateItem(props.item);
    }

    let fragment = <></>;
    if(props.show) {
        fragment =  <div className="item-info-popup active">
        <div className="item-info-popup__overlay">
            <div className="item-info-popup__container">
                <div className="item-info-popup__header">
                    <span className="icon icon-close">
                        <FontAwesomeIcon onClick={() => {
                            props.closeHandler()
                        }} icon={faTimesCircle} />
                    </span>
                </div>
                <input type="text" className="text-input" value={input} onChange={inputOnChange}/>
            </div>
        </div>
    </div>;
    }
    return (<>{fragment}</>);
}