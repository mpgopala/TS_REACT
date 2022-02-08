import {useState, useEffect} from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

type ReturnType = {
    data:User[] | null,
    done:boolean
}

function useApiCall(url:string):ReturnType {
    const [data, setData] = useState<User[]|null>(null);
    const [done, isDone] = useState<boolean>(false);

    useEffect( () => {
        // iife
        (async () => {
            let response = await fetch(url);
            let retdata = await response.json();
            setData(retdata);
            isDone(true);
        })();
    }, [url]);

    return {
        data,
        done
    }
}

export default function CustomHookComponent() {
    let {data, done} = useApiCall("https://jsonplaceholder.typicode.com/users");
    if(!done) return <h1>Loading ....</h1>
    else return <>
    {
        data?.map(user => <h3 key={user.id}>{user.name}, {user.email}</h3>)
    }
    </>
}