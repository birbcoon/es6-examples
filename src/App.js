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

console.log('-------------');

//Example 3 Destrunction Assignment
console.log("Example 3: Destruction Assignment");

console.log('-------------');

//Example 4 Spread Operator
console.log("Example 4: Spread Operator");

console.log('-------------');

//Example 5 Promises
console.log("Example 5: Promises");

console.log('-------------');

//Example 6 Object.assign
console.log("Example 6: Object.Assign");

console.log('-------------');

//Example 7 Spread Operator
console.log("Example 7: Spread Operator");

console.log('-------------');

//Example 8 Array.filer
console.log("Example 8: Array.filler");

console.log('-------------');

//Example 9 Array.map
console.log("Example 9: Array.map");

console.log(movies);

const movieRelease
= movies.map(movie
=> 
`${movie.name} released in
${movie.year}`);

console.log(movieRelease)

console.log('-------------');

//Example 10 Array.slice
console.log("Example 10: Array.slice");

console.log('-------------');

//Example 11 Array.reduce
console.log("Example 11: Array.reduce");

console.log('-------------');

export default App;
