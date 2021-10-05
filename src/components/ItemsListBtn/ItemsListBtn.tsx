import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ItemsListBtn(props: any) {
    return (<span className={props.className} onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.handler(props.item);
      }}>
        <FontAwesomeIcon icon={props.fontAwesomIconLink} />
    </span>
    )
}