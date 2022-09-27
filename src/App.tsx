import React from 'react';
import logo from './logo.svg';
import './App.css';


let a: number | null = 10;
a = null;

let name: string = "dasha";
let sex: "male" | "female";
sex = "male";
// sex = "man"


let isSamurai: boolean | null = true;
isSamurai = null;

let names: Array<string> = ["Dasha", "Oxana", "Max"];
let names2: string[] = ["Dasha", "Oxana", "Max"];

alert(names[0].toUpperCase());

//===============================

type AddressType = {
  city: string | null
  country: string | null
}

type UserType = {
  // sayHello?: Function
  sayHello?: (message: string) => void
  name: string
  age?: number
  isSamurai: boolean
  address: AddressType | null
}



// export type InitialStateType = {
//   name: string
//   age?: number
//   isSamurai: boolean
//   address: AddressType | null
// }


// let user: UserType = {
//   // sayHello(message: string) { alert('yo') },
//   name: "Dasha",
//   age: 25,
//   isSamurai: true,
//   address: {
//     city: "Minsk",
//     country: "Belarus"
//   }
// }

let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null,
  address: {
    city: null,
    country: null
  } as AddressType,
  addresses: [] as Array<AddressType>,
  counter: 0
}

export type InitialStateType = typeof initialState;

let state: InitialStateType = {
  address: {
    country: "djkfj",
    city: "kdjk"
  },
  age: 6786,
  counter: 78,
  isSamurai: true,
  name: "wkehwe",
  addresses: [{city: "hfj", country: "hjke"}]
} 

let GET_TASKS = "APP/GetTASKS";
type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS
}

let action = {
  type: GET_TASKS,
  id: 12
}



const summ: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
}

summ(10, Number("20"));





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
