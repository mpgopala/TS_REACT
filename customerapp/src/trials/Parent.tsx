import React from "react";

export default function Parent({children}:{children:React.ReactNode}) {
    return <div>Parent <br/> {children}</div>
}

// <Parent></Parent>