import React from "react";

export default function Welcome({msg} :{msg?:string}):React.ReactElement | null {
    return <h1>Hello {msg}</h1>
}