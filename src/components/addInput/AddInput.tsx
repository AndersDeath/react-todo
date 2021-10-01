import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { KeyboardEvent, useState } from "react";

export function AddInput(props: any) {
    const [input, setInput] = useState<string>('')

    function inputOnChange(val: React.ChangeEvent<HTMLInputElement>) {
        setInput(val.target.value);
    }

    function onKeyDownHandler(event: KeyboardEvent) {
        if (event.code === 'Enter') {
            props.addItem(input);
            setInput('')
        }
    }

    return <div className="input">
        <button onClick={() => {
            props.addItem(input);
            setInput('')
        }}>
            <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <input value={input} onKeyUp={onKeyDownHandler} onChange={inputOnChange} type="search" />
    </div>
}
