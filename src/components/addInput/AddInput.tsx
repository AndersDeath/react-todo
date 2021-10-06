import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, KeyboardEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { createItem } from "../../entities/Item";
import { IItem } from "../../interfaces";
import { addItemAction } from "../../store/actionCreators";

export function AddInput() {
    const [input, setInput] = useState<string>('')

    function inputOnChange(val: React.ChangeEvent<HTMLInputElement>) {
        setInput(val.target.value);
    }

    function onKeyDownHandler(event: KeyboardEvent) {
        if (event.code === 'Enter') {
            addItem(createItem(input));
            setInput('')
        }
    }

    const dispatch: Dispatch<any> = useDispatch()

    const addItem = useCallback(
      (item: IItem) => dispatch(addItemAction(item)),
      [dispatch]
    )

    return <div className="input">
        <button onClick={() => {
            addItem(createItem(input));
            setInput('')
        }}>
            <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <input value={input} onKeyUp={onKeyDownHandler} onChange={inputOnChange} type="search" />
    </div>
}
