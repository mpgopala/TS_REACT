# TS_REACT
Typescript and React

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/TS_REACT

===============================

Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ] ==> 16.3.2 LTS
nvm manage versions

===============================================================


JavaScript ==> dynamically typed, loosely typed programming langange

var name = "Peter";

name.toUpperCase();

var age = 23;
age++;

age ="Twenty four";
age.toUpperCase();

JS needs JS engine for execution [ like JVM / MVM ]

JS engine ==> V8 [ Google ==> Chrome and NodeJS]
	SpiderMonkey ==> FireFox , Adobe
	Chakra ==> IE
	Nashorn ==> Oracle ==> Java


file.js

<button id="btn">Click</button>

console.log("Hi");

setInterval(function timed() {
	console.log("Done!!!")
}, 100);

$("#btn").click(function clicked(){
	console.log("clicked!!!")
});

console.log("Bye!!!");


PsuedoCode of event loop

pendingTimers:[]
pendingCallbacks:[]
pendingOsTasks:[]

while(shouldContinue()) {
	pendingCallbacks.forEach(fn => fn());
	pendingTimers.forEach(fn => fn();
	pendingOsTasks.forEach(fn => fn());
}

=========================================

Different ways of creating objects in JS

1) function prototype

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.getName = function() {
	return this.name;
}

Person("Rajeev", 32);

var p1 = new Person("Raj", 32);
var p2 = new Person("Rita", 22);
p1.getName();


p2.getName();


2) JSON

JavaScript Object notation ==> Singleton object

var person = {
	"name": "Tim",
	"age" : 42
}

person.name
person.age

=============================

var g = 100;

function doTask() {
	var a = 10;
	if(g > a) {
		var b = 20;
		c = 30;
	}

	console.log(g, a, b, c);
}

doTask();
console.log(g,  c);


======================================================================

NodeJS

What is NodeJS?
Platform with JS engine [v8] for executing JS code
Why?
* build traditional web applications ==> send presentation pages to client
* build RESTful APIs and GraphQL ==> representation of data is sent ==> XML or JSON ==> CSV
* Streaming API ==> OTT ==> netflix , prime , Hotstar
* Realtime app ==> chatBot

* use to Build web application
	1) Uber
		Customermodule, payment module, driver module, vehicle module, .....

		Earlier
		<script src="a.js"></script>
		<script src="b.js"></script>
		<script src="c.js"></script>
		<script src="d.js"></script>

		30+ files

	2) Developers start using latest technologies to write code
		DART, CoffeeScript, LiveScript, TypeScript, ES2015/ESNext instead of JS
		Transpile/Transcompile DART, CoffeeScript, LiveScript, TypeScript, ES2015/ESNext to JS

		Babel / Tracuer
		Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. 

		https://caniuse.com/

		TSC ==> typescript compiler to convert "file.ts" ==> "file.js"

	3) Static code analysis ==> ESLint
	4) Unit testing / E2E tesing
	5) Bundle the code
		<script src="vendor.js"></script>
		<script src="runtime.js"></script>
		<script src="main.js"></script>


		main.js ==> will contain all my components
		3rd party lib ==> vendor.js
		runtime.js contains react or angular or vue

	6) Lazy loading of bundle
		<script src="payment.chunk.js"></script>

====================

Node comes with NPM and YARN ==> like Maven/Gradle/PIP
* Node Package Manager
==> download dependencies from repo
==> publish libries
==> to run scripts

npm install -g yarn

===============================================

Node project

sample> npm init --y
sample> code .

package.json

{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

* dependencies
	==> any 3rd module required in production code also
	==> example react, lodash, jquery
	"dependencies": {
   		 "lodash": "^4.17.21"
  	}

  	any version equal or greater than ^4.17.21
  	exact version "4.17.21"
  	major version has to be "4", minor and patch can change  ~4.17.21


* devDependencies
	==> 3rd party librires required in development stage only
	==> unit testing libraries ==> [mocha, chai, jest, jasmine]
	==> e2e testing libraries ==> [ protractor, cypress]
	==> static code analylis ==> ESLint

"node_modules" folder where "dependencies" and "devDependencies" are downloaded

===========

sample> npm i lodash
sample> npm i -D mocha chai request

or yarn -D mocha chai request

==

npm uninstall mocha

npm i mocha@5.1.2

======================================

download project:
sample> npm i
checks package.json and downloads dependencies and "devDependencies"

=====================

NodeJS by default uses "commonJS" module sytem

Module System: ==> CommonJS, ES6 , AMD

=============

TypeScript

Global install typescript compiler

npm i -g typescript

TypeScript compiler into "users/AppData/Roaming/npm" 

"tsc" ==> typescript compiler

a.ts
...

tsc a.ts
==> generate a.js

===========================

TypeScript is a superset of JS
* provide type system for JavaScript ==> statically typed
* To enhance code quality and understandability
* catch erros at compiletime rathar than at runtime
* sort of documentation

* Read Many Write once

Basic Types: string, number, boolean

var name:string = "Gopal";

name = 34; // error by tsc

let age:number = 21;

var status:boolean = true;

status = false;

=========

Complex types: enum, object, array

enum Color {
	RED,
	GREEN,
	BLUE
}

let clr:Color = Color.GREEN;

--
Object type

let person : {
	name:string,
	age: number
} = {
	name: "Larry",
	age: 45
};

console.log(person.name, person.age);

Array type:

let people: { 
	name:string,
	age: number
} [] = [
	{
		name: "Larry",
		age: 45
	},
	{
		name: "Leena",
		age: 41
	}];


Function type:
function add(a: number , b: number) : number | string {
	return a + b;
}

console.log(add(4,5));
console.log(add("4",5)); // error by TSC

--------------------

"any" type

let data:any = 0;
data = "Sample";
data = true;

// any type
function doTask(callback:any) {
 callback();
}

doTask(100);

at runtime we get error and not by "tsc"


"unknown" type
// any type
function doTask(callback:unknown) {
 callback();
}

doTask(100);

will lead to "tsc" errors

to use "unknown" type we need to do typechecking
Solution:

function doTask(callback:unknown) {
	if(typeof callback === "function") {
		callback();		
	} else if (typeof callback === "number") {
		console.log(callback);
	}
 
}
doTask(100);

----------------------------------

npm i -g ts-node

ts-node a.ts

npx tsc a.ts
npx ts-node a.ts

=================

"optional properties"

function print(obj : {first :string, last? :string}) {

}

print({first: "Gopal"});
print({first: "Gopal", last: "Krishna"});


====

"type"

type Person = {
	name:string,
	age: number
};

let p : Person   = {
	name: "Larry",
	age: 45
};


let people: Person[];

==================

Interface type instead of Type

* Interface as shape similar to type

interface Person {
	name:string,
	age: number
}

function print(obj: Person) {
	console.log(obj.name, obj.age);
}

* interface for realization relationship

interface Shape {
	draw();
}

class Circle implements Shape {
	...
	draw() {

	}
}

class Rectangle implements Shape {
	...
	draw() {

	}
}

* interface is extendable

interface Dance {
	dance();
}


interface Fight extends Dance {
	fight();
}


class Actor implements Fight {
	fight() { }
	dance() { }
}

=================

Type Assertions : "as"

// some 3rd party js library
function getPerson() {
	return {};
}


my ts file:

interface Person {
	firstName: string,
	lastName: string
}

let person = getPerson();
person.firstName = "" ; // error person 'firstName' does not exist

Solution

let person = getPerson() as Person;
person.firstName = "A"; // ok

<button id="okbtn">Click</button>

const btn = document.getElementById("okbtn") as HTMLButtonElement;
btn.backgroundColor = 'red'; 

====================================================


Using "in" operator for Narrowing

```
type Circle = {
	radius : number;
}

type Rectangle = {
	width : number;
	height: number;
}

function computeArea(shape: Circle | Rectangle) {
	if("radius" in shape) {

		} else if ("width" in shape) {

		}
}

```
===========

TypeScript REST parameters

```
function getTotal(...numbers: number[]) :number {
	let total: number = 0;
	numbers.forEach(n => total + n);
	return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10,20)); // 30
console.log(getTotal(10, 20, 30)); // 60
```
without

let data:number[] = [5,6,2,3,2,1];
getTotal(data);

=================

let data:numbers[] = [5,3,2,11];

let {x, ...others} = data;

x will be 5
others = [ 3,2,11]

==========
let data = [5,6];

let ref= data; // reference

ref[0] = 100;

data[0] will also be 100

let clone = [...data]; // copy of data

===

let p = {"first" : "Raj", "age" : 23 };

let duplicate = {...p} ; // copy of object

==============================================================



Day 1 : JS, Typescipt type ==> strng, boolean, number, enum, object, array
"type" to define a type, 'interface' , "as" , "in", REST parameters, spread operator;

function add(x: number, y: number)  {
	return x + y;
}

let res = add(4,5);

Day 2


Synchronous methods:
```
let result = doTask(); ==> directly to stack
console.log("blocked.... until doTask() completes");

Promise API
	is for asynchronous task ==> anything using callback queue then to stack

	==> possible return type is resolved or rejected


	doTask() ==> Promise<Pending>
		RESOLVED
		REJECTED

  doTask().then(function(data) {


  }, function(err) {

  });

  console.log("not blocked!!!");

 ==============


 interface User {
 id:number,
 name:string
}

function fetchData(id:number): Promise<User> {
  return new Promise<User> (function(resolve, reject) {
    setTimeout(function() {
       resolve({"id": 5, "name": "Banuprakash"}); // data from server
     // reject("Not found");
   }, 2000);
 });
}

fetchData(5).then(function(data) {
  console.log(data);
},
function(err) {
 console.log("Boom :-(", err);
});


console.log("not blocked!!!");

// tsc --lib ES2015,dom promiseExample.ts
// node promiseExample.js

```

=======
Arrow functions:
```
interface User {
 id:number,
 name:string
}

function fetchData(id:number): Promise<User> {
  return new Promise<User> ((resolve, reject) => {
    setTimeout(() => {
       resolve({"id": 5, "name": "Banuprakash"}); // data from server
     // reject("Not found");
   }, 2000);
 });
}

fetchData(5).then(
data => console.log(data),
err => console.log("Boom :-(", err)
);

console.log("not blocked!!!");

```

// tsc --lib ES2015,dom promiseExample.ts
// node promiseExample.js

======================
chaining of promises:

fetch("https://jsonplaceholder.typicode.com/users/2")
.then(response => response.json())
.then(data => console.log(data));

=====

fetch(.../departments)
.then(depts ==> getEmployees(dept))
.then(emp ==> getAddress(emp))
.then(add ==> ..)


===========================

Async and Await ==> simplifiy using Promise API
```

interface User {
 id:number,
 name:string
}

async function fetchData(id:number): Promise<User> {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const json = await response.json();
	return json;
}
 
fetchData(2).then(user => console.log(user));

console.log("not blocked!!!");

```
// tsc --lib ES2015,dom asyncExample.ts
// node asyncExample.js won't work


===================================================


High Order Functions in TypeScript

* function accepts function as argument
* function returning a function

Generics <>
```
function forEach<T>(elems:T, action:(elem:T) => void) : void {
	let i:number;
	for(i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}


let nos:number[] = [6,22,67,1,13,56,19];

forEach(nos, console.log);
forEach(nos, alert);

let names:string[] = ["harry", "peter", "danny", "James"];
forEach(names, console.log);



for(i = 0; i < nos.length; i++) {
		alert(nos[i]);
}
for(i = 0; i < nos.length; i++) {
		console.log(nos[i]);
}


map, filter, reduce, limit, skip, flatMap

map(transformFn) ==> transformed data

filter(predicate) ==> subset

```

https://rxmarbles.com/

============================


HOF ==> Function return a Function ==> Closure
Whenever a function returns a function; returned function has access to all the members of outer function
using Closure [ scope pointer]

pure function:
```
function add(x, y) {
	return x + y;
}

HOF:

function adder(base) {
	return function(no) {
		return base + no;
	}
}

let fiveAdder = adder(5);

console.log(fiveAdder(2)); // 7
console.log(fiveAdder(5)); // 10

```
=============================================
```
getEmp(5); ==> REST api call ==> server ==> DB ==> server ==> json

getEmp(5); ==> cache

fibanocci(34) ==> compute and store in cache
fibanocci(34) ==> get from cache


function fibanocci(no:number) : number {
 return no ==0 || no === 1 ? no : fibanocci(no - 1) +  fibanocci(no - 2);
}

console.time("first");
 console.log(fibanocci(34));
console.timeEnd("first");

console.time("sec");
 console.log(fibanocci(34));
console.timeEnd("sec");

```
==============

Memoization pattern:In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again

React.memo(); 

=======================


RSS ==> Resident Set Size
Stack , Heap [ New Generation, Old Generation]

==================================

JavaScript in TypeScript

Approach 1)

index.html

<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

my.ts
```
declare var random:any;

function doTask(){
	console.log(random(1,100));
}


 Approach 2)
 using typings.d.ts

declare module 'lodash' {
    export function random(min:number, max:number);
}

example.ts

import {random} from 'lodash';

function doTask(){
	console.log(random(1,100));
}

```

Approach 3)
 https://github.com/DefinitelyTyped/DefinitelyTyped

 npm i lodash @types/lodash

 npm i @types/node

 don't need typings.d.ts

 ========================================
 Webpack

 webpackexample> npm init --y

 webpackexample> yarn add webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin -D


JavaScript Build Tools:
* Grunt
* Gulp
* Webpack

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, 
uglify, compilation, unit testing, and linting, bundle, ...

Webpack ==> default coming from scafolliding code of REACT, Angular , ...

webpackexample>tsc --init
creates tsconfig.json

===
```
export default class Person {
    private name:string;
    private age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    getName():string {
        return this.name;
    }
    getAge():number {
        return this.age;
    }
}

===

 constructor(private name:string, private age:number) {
  }

========
package.json

 "scripts": {
    "dev": "webpack --mode development",
    "prod": "webpack --mode production",
  
}

```
npm run dev
 

asset bundle.js 3.96 KiB [emitted] (name: main)    
./src/index.ts 513 bytes [built] [code generated]  
./src/compute.ts 248 bytes [built] [code generated]
./src/Person.ts 429 bytes [built] [code generated] 
webpack 5.68.0 compiled successfully in 6575 ms    

--
npm run prod
 
asset bundle.js 892 bytes [emitted] [minimized] (name: main)
./src/index.ts 513 bytes [built] [code generated]
./src/compute.ts 248 bytes [built] [code generated]
./src/Person.ts 429 bytes [built] [code generated]
webpack 5.68.0 compiled successfully in 3929 ms

==> minify, uglify


https://createapp.dev/

==================

HtmlWebpackPlugin
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

main.dgdg334sdf22.js
vendor.sdfsdf2324.js
runtime.dw34sr33.js

<script src="main.dgdg334sdf22.js"></script>
<script src="vendor.sdfsdf2324.js"></script>

=======================
Webpack Dev Server
Use webpack with a development server that provides live reloading.

 "scripts": {
    "start": "webpack serve --open --mode production",

  npm start

====================

Day 3

------

yarn add lodash @types/lodash


filename: 'bundle.js'
	==> contains all our compiled "ts" files + 'libraries from node_modules'

Webpack code splitting

	create many chunk files

	main.454dfsfdfsf.js ==> our "compiled ts"
	runtime.f4534534fsdf.js ==> React / Angular
	vendor.453453dfdg.js ==> files from "node_modules" [ lodash]

==================================================================


React.js

Rendering ==> data is converted into presentation

Server Side Rendering [SSR]

server renders and sends presentation page [HTML / PDF /Image] to client ==> tight coupling

Traditional Web application devlopment ==> Servlet and JSP, ASP, ASP.NET, PHP, Next.JS

Templates: JSP, ASP, EJS, JADE , PUG, PHP

<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>

Client Side Rendering:
data is sent to client ==> rendered on client machine ==> loose coupling ==> seperation of client-server logic

Templates: jQuery, Mustache {{ , Handlebars #, underscore _
Hello {{name}}

Web pages ==> web applications and SPA ==> Single Page application

SPA -=> index.html for the entire project
render different views

Frameworks MVC ==> Model, View, Controller:
Model <--> Controller <--> View

Backbone, Angular.JS, Angular 

Framework ==> total solution [Model for state management, view, services ==> HTTP, Router, ...]

Library:
Knockout, React ==> View Libraries

=====================================================
codepen.io
settings:
JS preprocessor ==> babel

Js libraries:
https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js

===

Reconciliation

ReactElement ==> Virtual DOM ==> DOM

```
let Welcome = React.createElement("h1", {style:{'color':'green'}}, "Welcome to React");
console.log(Welcome);

ReactDOM.render(Welcome, document.getElementById("root"));
```

First Reconciliation happens when we call render()

```
render()

var h1 = document.createElement("h1");
h1.appendChild("Welcome to React");
h1.addAttribute("style", ...);
document.getElementById("root").appendChild(h1);
```

Diff algorithm

between 2 VDOMS
```
const diffs = [
	{
		newNode : { <li> 1</li>},
		oldNode: { <li>One </li>},
		index: 0
	},
	{
		newNode : { <li>Four</li>},
		index: 3
	}
];


Re-Render

diffs.forEach( diff => {
	if(diff.oldNode) {
		document.replaceChild(diff.newNode, diff.index);
	} else {
		document.appendChi(diff.newNode)
	}

});
	
```
===========================================================


* Functional Components 
* Class Components

```
function Welcome() { // JSX
  return <div>
    <h1> Learning React </h1>
    <h2>Place Virtual</h2>
   </div>
}

ReactDOM.render(<Welcome/>, document.getElementById("root"));

```

return value of JSX becomes ReactElement

Babel converts above code into

React.createElement("div", null, "h1", "Learning React " , ...);

===

Props ==> data passed from parent to child ==> html terminology "attributes" => angular [@Input()]

```
function Welcome(props) { // JSX
  return <div>
    <h1> {props.title} </h1>
    <h2>Place {props.loc}</h2>
   </div>
}

```
ReactDOM.render(<Welcome title="Learning React" loc="Virtual"/>, document.getElementById("root"));

also we can use

```
function Welcome({title, loc}) { // JSX
  return <div>
    <h1> {title} </h1>
    <h2>Place {loc}</h2>
   </div>
}
```


ProductList

```

function ProductList({title, products}) {
  return <div>
    	<h1>{title}</h1>
    	{
    		products.map(p => <h2> Name: {p.name} Price: {p.price}</h2>)
    	}
   </div>
}

```
fine Grained components


```

let productsData = [
        {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
        {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
        {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
        {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
        {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}
];



function ProductList({title, products}) {
  return <div>
    	<h1>{title}</h1>
    	{
    		products.map(p => <Product product={p} key={p.id} />)
    	}
   </div>
}


function Product({product}) {
  	return <div>
  		Name : {product.name} <br />
  		Price : {product.price}	
  		<hr />
  	</div>
}

ReactDOM.render(<ProductList title="List of Products" products={productsData} />, document.getElementById("root"));

```

1) React.createElement
2) Functional component ==> returned JSX value becomes ReactElement
3) Class Component
  3.1) state and behaviour
  3.2) component life cycle methods
  	componentDidMount
  	componentWillUnmount
  	shouldComponentUpdate

 
```
class ProductList extends React.Component {
 state = {
 	"products": [
        {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
        {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
        {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
        {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
        {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}
	]
 }
 constructor(props) {
 	super(props);
 }
 //JSX
 render() {
  	return <div>
    		<h1>{this.props.title}</h1>
    		{
    			this.state.products.map(p => <Product product={p} key={p.id} />)
    		}
  		 </div>
  }
}

function Product({product}) {
  	return <div>
  		Name : {product.name} <br />
  		Price : {product.price}	
  		<hr />
  	</div>
}
ReactDOM.render(<ProductList title="List of Products"   />, document.getElementById("root"));

```

Adding Behaviour:

class ProductList extends React.Component {
	...

	deleteProduct(id){

	}

}

```

npx create-react-app customerapp --template typescript


builds scaffolding code using webpack

```
import React from "react";

export default function Welcome({msg} :{msg?:string}):React.ReactElement | null {
    return <h1>Hello {msg}</h1>
}

App.tsx
import Welcome from './trials/Welcome';

  <Welcome />
  <Welcome msg="Good Day"/>

 ============

Parent.tsx
```
import React from "react";

export default function Parent({children}:{children:React.ReactNode}) {
    return <div>Parent <br/> {children}</div>
}
```
// <Parent></Parent>

 App.tsx
  <Parent>
        <Welcome />
        <Welcome msg="Good Day"/>
      </Parent>

================

Task:

interface Recipe {
  name: string;
  ingredients: Ingredient[];
  steps: string[];
}

interface Ingredient {
  name: string;
  amount: number;
  measurement: string;
}

==================


Day 4

------

 App.tsx
 components/
 	CustomerList.tsx
 	CustomerRow.tsx
 	Filter.tsx
model/
	ICustomer.tsx


customerapp>yarn

 delEvent={(id) => this.deleteCustomer(id)}
 or
 delEvent={this.deleteCustomer.bind(this)}

let p = {
	name: "Peter",
	doTask: function() {
		console.log(this.name);
	}
}

p.doTask();

let ref = p.doTask; // function reference ==> here context is lost

ref();

let ref2 = p.doTask.bind(p);
ref2();

=======================

Filter.tsx
CustomerList.tsx
CustomerRow.tsx

 
type IAppProps = {
    customer: ICustomer,
    delEvent:(id:number) =>void
}
export default function CustomerRow(props:IAppProps){
     return <div className="row">
            {firstName} &nbsp; {lastName} &nbsp;
            <button onClick={()=> this.props.delEvent(id) }>&times;</button>
        </div>
}


=========

constructor(props:IAppProps) {
        super(props);
        this.state.complete = this.state.customers;
    }

    or

   componentDidMount() {
   	this.setState({
   		"complete" : this.state.customers
   	})
   }

* componentDidMount
* componentDidUnMount

constructor() ==> component is created ==> render() ==> componetDidMount() ==> any changes ==> render()

componetDidMount() is a life cycle method where API calls needs to be done

don't make async calls / api calls in constructor

FCP ==> Web vitals ==> First Contentful Paint

constructor() ==> mock data ==> render it
API call gets data in componentDidMount() ==> re-render()

=======================================================================

Testing 
* Unit Testing
JavaScript ==> Mocha, Jasmine and JEST
React ==> React Testing Libarary ==> RTL ==> built-in to use JEST
Angular Test Bed ==> use Jasmine

* E2E Testing
Angular ==> Protractor
Selenium
React ==> Cypress

--

RTL and Cypress

Alternate to RTL is Enzyme

=====================

RTL library has different methods to query components

* getBy or getAllBy ===> throw exception if match not found
	getByLabelText
	getByText
	getByRole
	getByPlaceholderText
	getByAltText

	<h1>React Application</h1>

	getByText(/React/i)

	 <input type="text" 
            placeholder="search by name" 
            onChange={(evt) => props.filterEvent(evt.target.value)} />

     getByPlaceholderText("search by name")


     getAllByRole('button');

* queryBy ==> return null if match not found

* findBy ==> for Async components

==> any time you can use low-level DOM apis to access component

============

Test Suite ==> one file one test suite

or

describe("customer module", ()=> {
	it("test delete", () => {
		action
		assert
	});
	it("test filter", () =>{
		action
		assert
	})
});

describe("product module", () => {
	test("delete product", () =>{
		ACTION
		assert
	})
});


====
DOM Render Code:
import ReactDOM from 'react-dom';
 
ReactDOM.render(<App /> ,document.getElementById('root')); ==> DOM element ==> UI


import { render, screen } from '@testing-library/react';

 render(<App />); ==> DOM in HTML string is generated ==> no UI


	
==

npm test

Coverage:

npm test -- --coverage --watchAll=false

=======================

Mock testing

=========

yarn add cypress -D

or

npm i cypress -D

============

CustomerRow.test.tsx
Testing in Isolation we need to mock customer data and callback:


render(<CustomerRow 
                    key={customer.id} 
                    customer={mockCustomer}
                    delEvent={callbackMock}
             />);

```
screen.debug();         
      <body>
        <div>
          <div
            class="App"
          >
            <h1>
              React Application
            </h1>
            <div>
              <input
                placeholder="search by name"
                type="text"
              />
              <div
                class="row"
              >
                Monica
                  
                Geller
                  
                <button>
                  ×
                </button>
              </div>
              <div
                class="row"
              >
                Ross
                  
                Geller
                  
                <button>
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
 
 ```

 Cypress:
 script
 "e2e" : "cypress open"
modify:
cypress.json
add test specs in "e2e" folder

npm run e2e

====================================

npx create-react-app shopapp --template typescript

shopapp>yarn add bootstrap styled-components @types/styled-components react-router-dom

shopapp> yarn add axios

---------------

React Hooks

Hooks are a new addition in React 16.8. 
Hooks can be used only in functional component
They let you use state, lifecycle method and other React features without writing a class.

current version ==> 17.0.2

1) useState

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

instead of:


type IAppProps {
	count:number,
	user: string
}

class StateHookComponent extends Component<IAppProps> {
	state = {
		count: 0,
		user: "Smith"
	}

	setCount(data) {
		this.setState({
			count = data;
		})
	}

	setUser(data) {
		this.setState({
			user: data
		})
	}
}


==============

 return <>
    
    </>

instead of:
 return <div>
</div>

return <React.Fragment>

</React.Fragment>

================

Day 5

component re-renders only if state or props change ==> Reconciation

forceUpdate();



React Hooks ==> 16.8 ==> instead of class components using functional components

1) useState()
	state is like number, boolean, string
2) useReducer()

==> if state is complex
	CART application

	[{
		product:{....},
		count: 3,
		total:89000
	},
	{
		product:{....},
		count: 1,
		total:89000
	}
	]

==> conditionally mutate the state => Action
	ADD_TO_CART
	INCREMENT
	DECREMENT
	CLEAR
	REMOVE_FROM_CART
	GET_CART

--------------------------

```

import { stat } from 'fs';
import React from 'react';
enum ActionType {
    INCREMENT,
    DECREMENT
}

type Action = {
    type:ActionType
    payload?:number
}

type StateType = {
    count:number
}


let countReducer = (state:StateType, action:Action) => {
    switch(action.type) {
        case ActionType.INCREMENT:
            if(action.payload){
                return {count: state.count + action.payload}
            } else 
            return {count: state.count + 1}
        case ActionType.DECREMENT:
            return {count: state.count - 1}
        default:
            return state;
    }
}

let initialState:StateType = {
    count:0
}

export default function ReducerComponent() {
    let [state, dispatch] = React.useReducer(countReducer, initialState);
    function handleIncrement() {
        let action = {"type": ActionType.INCREMENT, payload: 10};
        dispatch(action);
    }
    return <>
        Count {state.count} <br />
        <button onClick={handleIncrement}>Increment</button>
    </>
}

```


3) useEffect
	==> to simulate Component lifecycle methods
	componentDidMount() ==> constuctor() ==> render() ==> componentDidMount()
	componentDidUpdate() ==> changes to state or props 

4) useRef
```


export default function UseRefComponent() {
    let [name,setName] = React.useState<string>("");
    let [age,setAge] = React.useState<string>("");
    function handleClick() {
        // need to access data in text box ?
        console.log(name, age);
    }
    return <>
        <input type="text" onChange={evt => setName(evt.target.value)}/>
        <input type="text" onChange={evt => setAge(evt.target.value)}/>
        <button onClick={handleClick}>Do Task</button>
    </>
}

using useRef()

import React, { MutableRefObject } from "react";

export default function UseRefComponent() {
    const inputEl = React.useRef() as MutableRefObject<HTMLInputElement>;
    function handleClick() {
        console.log(inputEl.current.value);     
    }
    return <>
        <input type="text" ref={inputEl}/>
        <button onClick={handleClick}>Do Task</button>
    </>
}

```

forwardRef

a mechanism using which parent passes "ref" to child

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));


Parent component ==> Class Component

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref} alt="Hello" color="red">Click me!</FancyButton>;

ref.click(); or any functionality of button is accessble to Parent


============

Parent - child re-render issues
==> props or state changes component re-renders ==> triggers all children to re-render
```


class Child extends React.Component {
	render() {
		console.log("child re-renders!!!");
		return <>
				<h1>Child {this.props.name} </h1>
			</>
	}
}


class Parent extends React.Component {
	state = {
		count: 0,
		name : "Banu"
	}

	increment() {
		this.setState( {
			count: this.state.count + 1
		})
	}

	render() {
			console.log("parent re-renders!!!");
			return <>
				Count : {this.state.count} <br />
				<Child name={this.state.name} />
				<button onClick={() => this.increment()}>Increment</button>
			</>
	}
}

ReactDOM.render(<Parent />, document.getElementById("root"))

```

Solution 1:
use Component Life Cycle method ==> shouldComponentUpdate

```

class Child extends React.Component {
 
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.name !== nextProps.name;
  }
	render() {
		console.log("child re-renders!!!");
		return <>
				<h1>Child {this.props.name} </h1>
			</>
	}
}

```

Solution 2:
using Purecomponent ==> comes wiht defaule shouldComponentUpdate with shallow comparision
and not deep

```
class Child extends React.PureComponent {
   render() {
		console.log("child re-renders!!!");
		return <>
				<h1>Child {this.props.name} </h1>
			</>
	}
}

```
use shouldComponentUpdate if props is complex type ==> object, array

<Child customer={customer} />

===

Avoid re-render in functional components

function Child(props) {
		console.log("child re-renders!!!");
		return <div>
				<h1>Child {props.name} </h1>
			</div>
}

We have React.memo() ==> Memoize pattern

```

function Child(props) {
		console.log("child re-renders!!!");
		return <>
				<h1>Child {props.name} </h1>
			</>
}

const MemoChild = React.memo(Child); // HOC

class Parent extends React.Component {
	state = {
		count: 0,
		name : "Banu"
	}

	increment() {
		this.setState( {
			count: this.state.count + 1
		})
	}

	render() {
			console.log("parent re-renders!!!");
			return <>
				Count : {this.state.count} <br />
				<MemoChild name={this.state.name} />
				<button onClick={() => this.increment()}>Increment</button>
			</>
	}
}

ReactDOM.render(<Parent />, document.getElementById("root"))

```
function hasChanged(props, nextProps) {
	compare and return true / false
}

const MemoChild = React.memo(Child, hasChanged);

=======================
 
memo_callback.js

========

5) useCallback
	like memoizing data we memoize callback

```
	 const incrementAge = React.useCallback(() => {
		setAge(age + 1)
	}, [age]);

	const incrementSalary = React.useCallback(() => {
   		setSalary(salary + 1000)
	}, [salary]);

```
Complete Code:

`````

function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};


function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

const MemoTitle = React.memo(Title);
const MemoButton = React.memo(Button);
const MemoCount = React.memo(Count);

function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = React.useCallback(() => {
		setAge(age + 1)
	}, [age]);

	const incrementSalary = React.useCallback(() => {
   		setSalary(salary + 1000)
	}, [salary]);
  
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("root"));

````

6) Custom Hooks

	* starts with "use"
	* built using already existing hooks

==============

 Day 6
 
 React Hooks
 1) useState
 2) useReducer
 3) useRef ==> React.createRef()
 4) useEffect 
 5) custom hooks
 6) useCallback()

 ---
 React.memo(); ==> HOC ==> memoize pattern
 shouldComponent()
 PureComponent

 ----------

 npx create-react-app shopapp --template typescript
 yarn add bootstrap styled-components @types/styled-components react-router-dom axios

 ------------

 HOC ==> high order component
 * to inject new props
 * conditionally render a component

 ==> Composition pattern ==> Decorator pattern

CustomerList.tsx

HOC 
function withLoading(WrappedComponent) {
	return function({isLoading, ...props}) {
		if(!isLoading) return <WrappedComponent {...props} /> 
		else return <h1>loading.... </h1>
	}
}

const WithLoadingCustomerList = withLoading(CustomerList);

class App extends Component {
	state = {
		loading: true,
		data: null
	};

	componentDidMount() {
			api call and set
			loading and data
	}

	render() {
		return <WithLoadingCustomerList isLoading={loading} customers={data} />
	}

}

=========

function DivComponent(props) {
	return <div>
		Count : {props.count}
		<button onClick={() => props.increment()}>Click </button>
	</div>
}

const withCounter = (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				count : 0
			}
		}

		increment = () => {
			this.setState({
				count: this.state.count  + 1
			})
		}

		render() {
			return <WrappedComponent count={this.state.count} increment={this.increment} />
		}
	}
}


====
	CustomerList.tsx
	withSecurity(withLoading(CustomerList))

=========================


React Context
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

```
var PersonContext = React.createContext();

class PersonProvider extends React.Component {
  state = {
    name : 'Smith',
    email : "",
     update : this.update.bind(this)
  };
  
  update(email) {
    this.setState({
        "email": email
    });
   }
  
  render() {
    return <PersonContext.Provider value={this.state}>
        {this.props.children}
      </PersonContext.Provider>
  }
}

class App extends React.Component{
  render() {
    return <PersonProvider>
        <First />
       </PersonProvider>
  }
}

class First extends React.Component {
  render() {
     return <Second/>
  }
}

class Second extends React.Component {
  render() {
    return <PersonContext.Consumer>
            {
              value => { 
                return <React.Fragment>
                  <h1> {value.name} {value.email}</h1>  
                  <button onClick={() => value.update('smith@adobe.com')}>Change</button>
                  </React.Fragment>
              }
      }
      </PersonContext.Consumer>
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))

using Hooks

function Second() {
  	let {name, email, updateEmail} = React.useContext(PersonContext);
         return <React.Fragment>
                  <h1> {name} {email}</h1>  
                  <button onClick={() => update('smith@adobe.com')}>Change</button>
                  </React.Fragment>
             
  }
}


```

react-router-dom

configure routes

 <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/products" element={<ProductList/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/" element={<ProductList/>} />
            <Route path="*" element={<Default />} />
          </Routes>
</BrowserRouter>

-----------

Lazy loading of modules 

Cart module ==> lazy loading


const Cart  = React.lazy(() => import('./components/Cart'));

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/products" element={<ProductList/>} />
            <Route path="/cart" element={
              <Suspense fallback={<h1>Loading....</h1>}>
                  <Cart />
              </Suspense>
            } />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/" element={<ProductList/>} />
            <Route path="*" element={<Default />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


==========

download "share.zip", data.js, App.css from "github"


copy "images" folder into "public"
overwrite App.css
place "data.js" in "src" folder
overwrite "Navbar.tsx"
place "Button.tsx" in "components" folder


====================

import {Link} from 'react-router-dom';

  <Link to="/products" className="nav-link">   
                    Products
  </Link>   
 uses HTML5 history API
 ==> navigate between views in SPA

instead of

<a href="/products"> ==> make a call to server ==> server-side rendered


============
Reducer 
CartContext.tsx
================

Redux

====================================

Day 7

React-router-dom ==> BrowserRouter, Routes, Route, Link, useParams
ReactContext

Cart module
------------

Cart Context
	cart:[],
	addToCart()
	increment()
	decrement()
	removeFromCart()

==

useReducer() instead of useState() 

* cartReducer

* CartContext
	has a dependency on ProductContext ==> useContext() is a hook
	use reducer

1) cartReducer.ts

2) CartContext.jsx

3) Product.tsx
 <Button onClick="">


4) index.tsx
ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>,
  document.getElementById('root')
);

===================

Cart.jsx
CartList.jsx

====================

APi call

yarn add axios

axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])

 
==> fetch(url)

==================

RESTful web server to serve JSON data
==> Spring boot / ASP.net MVC RAZOR, PHP, ExpressJS nodeJS

JSON Server
Get a full fake REST API with zero coding in less than 30 seconds 

json file as data

{
	"customers": [],
	"products" : [],
	"orders" : []
}


http://server/customers
http://server/orders
http://server/products
http://server/products/4 ==> get by id
http://server/products?price=2222 ==> query paramter

CRUD operations ==> on JSON file

data.json
```
{
    "customers": [],
    "orders" : [],
    "products": [
        {
          "id": "1",
          "name": "Accent Chair",
          "price": 25999,
          "image": "images/accent_chair.jpg"
          
        },
        {
          "id": "2",
          "name": "Albany Sectional",
          "price": 109999,
          "image": "images/albany_sectional.jpg"
        },
        {
          "id": "3",
          "name": "Albany Table",
          "price": 309999,
          "image": "images/albany_table.jpg"
        },
        {
          "id": "4",
          "name": "Armchair",
          "price": 12599,
          "image": "images/armchair.jpg"
        }]
}
```

npx json-server --watch data.json --port 1234


==============================
 

====================

https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p

==========================================================

Redux

1) Action Creators

function addToCart(product) {
	return {
		type:"ADD_TO_CART",
		payload: product
	}
}


type: FETCH_PRODUCT

StatusReducer
	state: {
		loading:true
		error
	}

ProductReducer 
state: {
	product: ...
}

UserReducr

statue {
	user:
}

CartReducer {
	cart:
}


yarn add redux react-redux

The connect() function connects a React component to a Redux store.

Redux store has
state {
	data : [],
	done: false,
	...
}

// state from redux
// return as props to react component
function mapStateToProps(state) {
	return {
		products: state.data,
		isLoading: done
	}
}

// dispatch refernce to reducer
// props function given to react components to dispatch actiions to reducer
function mapDispatchToProps(dispatch) {
	addToCart: (id) => dispatch({type:"ADD_TO_CART", payload:id}),
	clearCart: () => dispatch({type:"CLEAR_CART"})
}

connect(
	mapStateToProps,
	mapDispatchToProps
)(SmartComponent)


=====================================

Day 8
npx create-react-app reduxexample
yarn add redux react-redux


Redux ==> State Management 

* Action object has {
	type:
	payload
}

* ActionCreators are functions which take data and returns Action Object

* Store ==> Redux has a single store where state resides

* Reducer ==> functions which read state from store takes dispatched action
mutate the state and return the state to store. store updates

* RootReducer if many reducers exist in application
  compose({
  	r1:...
  	r2:...
  	r3:...
  })

  * connect () is a react-redux
  	state present in store ==> give it as props to component
  	dispatch function of reducer => give it as props to component
=======================================================






