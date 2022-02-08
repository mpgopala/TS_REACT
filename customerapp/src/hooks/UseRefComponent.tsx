import React, { MutableRefObject } from "react";

export default function UseRefComponent() {
    const inputEl = React.useRef() as MutableRefObject<HTMLInputElement>;
    function handleClick() {
        console.log(inputEl.current.value);     
    }
    return <>
        <input type="text" ref={inputEl}/>
        <button onClick={handleClick}>Do Task</button>
    </>
}