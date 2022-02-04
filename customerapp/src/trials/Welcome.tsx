import React from "react";

interface Props {
    msg?:string, 
    children?:React.ReactNode
}
export default function Welcome({msg, children} : Props):React.ReactElement | null {
    return <h1>Hello {msg}</h1>
}