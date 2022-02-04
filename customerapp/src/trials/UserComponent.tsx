import React from "react";

interface IUser {
    name:string,
    age:number
}

export default class UserComponent extends  React.Component<IUser, {}> {
    // constructor(props:IUser) {
    //     super(props);
    // }

    render() {
        let {name,age} = this.props;
        return <div>
            <h1>User Component</h1>
            Hello {name} <br />
            Age : {age}
        </div>
    }
}


