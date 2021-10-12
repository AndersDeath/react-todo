import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, KeyboardEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../../entities/Item";
import { addItemToList } from "../../entities/List";
import { IList } from "../../interfaces";
import { addItemToListAction } from "../../store/actionCreators";
import { getList } from "../../store/selectors";

export function AddInput(props: {listId:number}) {
    const [input, setInput] = useState<string>('')
    const list: any = useSelector(getList(props.listId));

    function inputOnChange(val: React.ChangeEvent<HTMLInputElement>) {
        setInput(val.target.value);
    }

    function onKeyDownHandler(event: KeyboardEvent) {
        if (event.code === 'Enter') {
            addItem(addItemToList(list, createItem(input)));
            setInput('')
        }
    }

    const dispatch: Dispatch<any> = useDispatch()

    const addItem = useCallback(
      (list: IList) => dispatch(addItemToListAction(list)),
      [dispatch]
    )

    return <div className="input">
        <button onClick={() => {
            addItem(addItemToList(list, createItem(input)));
            setInput('')
        }}>
            <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <input value={input} onKeyUp={onKeyDownHandler} onChange={inputOnChange} type="search" />
    </div>
}
