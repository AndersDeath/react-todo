import './ItemInfoPopup.scss';

export function ItemInfoPopup(props: any) {
    let fragment = <></>;
    console.log(props.item);
    console.log(props.closeHandler);
    if(props.show) {
        fragment =  <div className="item-info-popup active">
        <div className="item-info-popup__overlay">
            <div className="item-info-popup__body">
                <button onClick={() => {
                    props.closeHandler()
                }}>Close</button>
            </div>
        </div>
    </div>;
    }
    return (<>{fragment}</>);
}