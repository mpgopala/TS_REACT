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

===========

TypeScript REST parameters


function getTotal(...numbers: number[]) :number {
	let total: number = 0;
	numbers.forEach(n => total + n);
	return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10,20)); // 30
console.log(getTotal(10, 20, 30)); // 60

without

let data:number[] = [5,6,2,3,2,1];
getTotal(data);




