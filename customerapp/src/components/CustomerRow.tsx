import ICustomer from "../model/ICustomer";
import {Component} from 'react'
type IAppProps = {
    customer: ICustomer,
    delEvent:(id:number) =>void
}

export default class CustomerRow extends Component<IAppProps> {
    public render() {
        let {id, firstName, lastName} = this.props.customer;
        return <div className="row">
            {firstName} &nbsp; {lastName} &nbsp;
            <button onClick={()=> this.props.delEvent(id) }>&times;</button>
        </div>
    }
  
}