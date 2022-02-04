import './styles.css';

import {add, sub} from './compute';
import Person from './Person';

import {random} from 'lodash';

console.log("Random :" + random(1,100));

console.log("Hello World!!!");

let p1:Person = new Person("Gopal", 21);

console.log(p1.getName(), p1.getAge());

console.log(add(3,4));
console.log(sub(41,1));
