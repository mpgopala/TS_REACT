import React from "react";

export default function EffectHook() {
    let [count, setCount] = React.useState<number>(0)
    let [user, setUser] = React.useState<string>("Smith");
    // componentDidUpdate
    React.useEffect(() => {
        console.log("effect 1");
    });

    // gets called only if count changes, user change wont trigger this
    React.useEffect(() => {
        console.log("effect 2");
    },[count]);

    // similar to componentDidMount
    React.useEffect(() => {
        console.log("effect 3");
        return () => { console.log("unmount")} // componentDidUnmount
    }, []);
    
    return <>
        Count {count} <br />
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
}