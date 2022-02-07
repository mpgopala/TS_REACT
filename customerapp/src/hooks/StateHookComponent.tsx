import React from "react";

export default function StateHookComponent() {
    let [count, setCount] = React.useState<number>(0)
    let [user, setUser] = React.useState<string>("Smith");
    return <>
        Count {count} <br />
        User {user} <br />
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
}