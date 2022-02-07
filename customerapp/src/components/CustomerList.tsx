import {Component} from 'react'
import ICustomer from '../model/ICustomer'
import CustomerRow from './CustomerRow'
import Filter from './Filter'
// props passed from parent
type IAppProps = {
}

type IAppState = {
    "customers": ICustomer[],
    "complete": ICustomer[]
}

export default class CustomerList extends Component<IAppProps, IAppState> {
    state = {
       "complete": [] as ICustomer[],
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

    constructor(props:IAppProps) {
        super(props);
        this.state.complete = this.state.customers;
    }

    public render() {
        return <div>
            <Filter filterEvent={this.filterCustomer.bind(this)}/>
            {
                this.state.customers.map(customer => <CustomerRow 
                    key={customer.id} 
                    customer={customer}
                    delEvent={this.deleteCustomer.bind(this)}
                    />)
            }
        </div>
    }

    public filterCustomer(txt:string) : void {
        let custs =  this.state.complete.filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >=0);
        this.setState({
            customers: custs
        });
    }
    public deleteCustomer(id:number): void {
        let custs = this.state.customers.filter(c => c.id !== id);
        // state and props are read-only
        // this.state.customers = custs; // not valid
        // async method
        this.setState({
            customers: custs
        }, () => console.log("customer deleted ", id));
    }
}