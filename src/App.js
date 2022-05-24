import React, { useState } from "react";
import isValid from "./isValid";
import { isLichtenstein } from "./isLichtenstein";

import "./App.css";


function App() {


  const [input, setInput] = useState("DE11520513735120710131");

  return (
    <div className="App">
      <h1>IBAN</h1>
      <p>Start typing: </p>
      <p>Example Liechtenstein: LI21088100002324013AA</p>
      <input
        onChange={e => setInput(e.target.value)}
        placeholder="Digit a valid IBAN"
      />
      <p>Your Input: {input}</p>
      <p>Is Valid IBAN? {isValid(input).toString()}</p>
      <p>Is Valid Liechtenstein IBAN: {isLichtenstein(input).toString()}</p>
    </div>
  );
}
 
export default App;