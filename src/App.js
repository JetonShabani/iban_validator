import React, { useState } from "react";
import IBAN from "iban";

import "./App.css";

function isValid(iban) {
  if (iban.substring(0, 2) !== "LI") return false;
  return IBAN.isValid(iban);
}

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
      <p>Is Valid IBAN? {IBAN.isValid(input).toString()}</p>
      <p>Is Valid Liechtenstein IBAN: {isValid(input).toString()}</p>
    </div>
  );
}
 
export default App;