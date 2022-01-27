import logo from './logo.svg';
import './App.css';
import AddButton from "./AddButton";
import React from "react";

function MoreButtons(props) {
  const numbers = props.numbers;
  const masOfButtons = numbers.map((number) =>
     <AddButton key={number.toString()} text = {number}/>
  );
  return (
     masOfButtons
  );
}

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
        <MoreButtons numbers={[1,2,3,4,5]}/>
        <AddButton text="еще одна"/>
      </header>
    </div>
  );
}

export default App;
