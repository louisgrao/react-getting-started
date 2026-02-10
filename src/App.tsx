import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const user = {
  name: "brian",
  age: 53,
  occupation: "egg and spoon race adjudicator",
  image: "src/assets/brian.png",
};

export default function App() {
  return (
    <>
      <div>
        <img src={user.image} alt={"image of " + user.name} width={150} />
        <p>{"Name: " + user.name}</p>
        <p>{"Age: " + user.age}</p>
        <p>{"Occupation: " + user.occupation}</p>
      </div>
    </>
  );
}
