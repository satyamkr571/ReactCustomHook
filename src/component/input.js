//import { React, useState, useEffect } from "react";
import React from "react";
import { useState } from "react";
import "./input.css";
import useLocalStorage from "../customhook/useLocalStorage";
import useLogger from "../customhook/useLogger";
import useFindPrime from "../customhook/useFindPrime";

export default function Input() {
  const [name, setname] = useLocalStorage("name", "");
  const [number, setNumber] = useState(0);
  const [prime, setPrime] = useState([]);
  useLogger(name);
  const primeNumber = useFindPrime(number);
  return (
    <div className="input">
      <h1>Custom Hook.</h1>
      <h3>
        <span>{`=> `}</span> Persisting the input value even after refrshing the
        browser.
      </h3>
      <input
        className="inputbox"
        type="text"
        onChange={(e) => {
          setname(e.target.value);
        }}
        value={name}></input>

      <br></br>
      <br></br>
      <h3>
        <span>{`=> `}</span> Custom Logger.
      </h3>

      <p>{name}</p>
      <br></br>
      <br></br>
      <h3>
        <span>{`=> `}</span> Find the prime Number.
      </h3>
      <input
        className="inputbox"
        type="text"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        value={number}></input>
      <br></br>
      <br></br>
      <button
        className="primebutton"
        type="submit"
        onClick={() => {
          setPrime(primeNumber);
        }}>
        Find Prime
      </button>
      <h3>{prime}</h3>
    </div>
  );
}
