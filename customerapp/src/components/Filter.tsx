import React, { MutableRefObject } from "react";

type IAppProps = {
    filterEvent:(txt:string) => void
}
export default function Filter(props:IAppProps){
    const inputEl = React.useRef() as MutableRefObject<HTMLInputElement>;
    function handleChange() {
        props.filterEvent(inputEl.current.value)
    }
    return <>
        <input type="text" 
            ref = {inputEl}
            placeholder="search by name" 
            onChange={handleChange} />
    </>
}