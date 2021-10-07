import {useState } from 'react';
import './ListAddPopup.scss';

export function ListAddPopup(props: any) {

    const [val, setVal] = useState('');
    function titleOnChange(val: React.ChangeEvent<HTMLInputElement>) {
        setVal(val.target.value);
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
                    <input type="text" className="text-input-popup" defaultValue={val} onChange={titleOnChange}/>
                 
                </div>
                <div className="item-info-popup__bottom">
                    <div className="btn-area">
                        <button className="btn" onClick={() => {
                                props.closeHandler(val)
                            }}>
                            Create list
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
    }
    return (<>{fragment}</>);
}