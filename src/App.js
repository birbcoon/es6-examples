import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const movies = [
  {name: "John Wick 3", year: 2019, rating: "5 stars"},
  {name: "Youngblood", year: 1986, rating: "1 stars"},
  {name: "The Night Before", year: 1988, rating: "3 stars"},
  {name: "Bill & Ted's Excellent Adventure", year: 1989, rating: "5 stars"},
  {name: "The Matrix", year: 1999, rating: "4 stars"},
  {name: "John Wick", year: 2014, rating: "5 stars"}
];
//Example 1 Default Parameters
console.log("Example 1: Default Parameters");
const defaultClass = {name: "Full Stack", teacher: {first: "Zhiguang", last: "Xu"}, number: "CS4840"};
function defaultExample(p = defaultClass) {
  console.log(`Dr. ${p.teacher.last} teaches ${p.name}`)
}
console.log("Default with no parameters provided:");
defaultExample();
console.log("When parameters are passed:")
defaultExample({name: "Big Data", teacher:{last: "Mihail"}});
console.log('-------------');

//Example 2 Arrow functions
console.log("Example 2: Arrow functions");

console.log("arrowClass is an arrow function and I couldn't think of a better name");
const arrowClass = (teacher) => `${teacher} is a professor of this arrow function`;

console.log(arrowClass('Xu'));
console.log('-------------');

//Example 3 Destrunction Assignment
console.log("Example 3: Destruction Assignment");
const job = {
name: 'VSU',
salary: 86754,
boss: 'Bill Tench',
year: 2019
};

let {name, salary} = job;

console.log(`${name} is a job that has a salary of: $${salary}`);

const actor = character =>`${character.actor} plays ${character.character}`;

const character = {
actor: 'Keanu Reeves',
character: 'Ted Theodore Logan',
movie: 'Bill & Ted'
};

console.log(actor(character));
console.log('-------------');

//Example 4 Spread Operator
console.log("Example 4: Spread Operator");
console.log("adding these movies")

const newMovies = [
{name: "Toy Story 4", year: 
2019, rating: "5 stars"},
{name: "Always Be my Maybe", year:
2019, rating: 
"4 stars"},
{name: 'Matrix 4', year: 
2020, rating: "Unreleased"}
]
console.log(newMovies);

const spreadMovies = [...movies,...newMovies]
console.log(spreadMovies)
console.log('-------------');

//Example 5 Promises
const 
getFakeMembers = count => new Promise((resolves,rejects) => {
const api = `https://api.randomuser.me/?nat=US&results=${count}`

const request = new XMLHttpRequest()

request.open('GET', api)

request.onload = () => (request.status === 200) ? resolves(JSON.parse(request.response).results):request.onerror = (err) => rejects(err)
request.send()
})

getFakeMembers(5).then(
members => {
console.log("Example 5: Promises. This appears at the end as it waits for the promise to be fulfilled or rejected before the code runs");
console.log(members)},err => console.error(new Error("cannot load members from randomuser.me")))

//Example 6 Object.assign
console.log("Example 6: Object.Assign");
const birthday = {
name: 'Tyler',
age: 18,
birthday: '23-08-2001'
}

const newBirthday = Object.assign({},birthday,{age: 34})

console.log('These birthdays are the same:')
console.log(birthday === newBirthday)

console.log(birthday)
console.log(newBirthday)

console.log('-------------');

//Example 7 Spread Operator
console.log("Example 7: Object Spread Operator");

const spreadBirthday= {
name: 'Tyler',
age: 18,
birthday: '23-08-2001'
}

const newspreadBirthday = {
...spreadBirthday,
birthday: '31-10-2000'
}

console.log('These birthdays are the same:')
console.log(spreadBirthday === newspreadBirthday)

console.log(spreadBirthday)

console.log(newspreadBirthday)

console.log('-------------');

//Example 8 Array.filer
console.log("Example 8: Array.filler");
console.log("Filter movies only released in the 80s");

const filterMovies = movies.filter(movie => (movie.year >=1980 && movie.year < 1990));

console.table(filterMovies)

console.log(filterMovies);
console.log('-------------');

//Example 9 Array.map
console.log("Example 9: Array.map");

console.log(movies);

const movieRelease = movies.map(movie => 
`${movie.name} released in ${movie.year}`);

console.log(movieRelease)

console.log('-------------');

//Example 10 Array.slice
console.log("Example 10: Array.slice");
const characters = ['John Wick',
'Duke Caboom', 
'Neo', 'Don John', 
'Matt', 'Constantine']

console.log(characters)

console.log('Slicing out the 3rd entry')

const sliced = [...characters.slice(0,2),...characters.slice(3)]

console.log(sliced)
console.log('-------------');

//Example 11 Array.reduce
console.log("Example 11: Array.reduce");
const arrayNums = [10,20,30,40,50,60,70,80,90,100,200,300,400,500]

console.log(arrayNums)

const totalNums = arrayNums.reduce((total,num) => { 
  console.log(`${total} + ${num} = ${total+num}`)
  return total + num},0)

console.log(totalNums)
console.log('-------------');

export default App;
