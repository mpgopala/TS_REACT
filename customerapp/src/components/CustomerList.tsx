import {Component} from 'react'
import ICustomer from '../model/ICustomer'
import CustomerRow from './CustomerRow'
// props passed from parent
type IAppProps = {
}

type IAppState = {
    "customers": ICustomer[]
}

export default class CustomerList extends Component<IAppProps, IAppState> {
    state = {
    "customers" : [
        {
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }
    ]}

    public render() {
        return <div>
            {
                this.state.customers.map(customer => <CustomerRow key={customer.id} customer={customer}/>)
            }
        </div>
    }
}