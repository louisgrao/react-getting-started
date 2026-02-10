import { useState } from "react";

import "./App.css";

const user = [
  {
    name: "Brian",
    age: 53,
    occupation: "Egg and spoon race adjudicator",
    image: "src/assets/brian.png",
  },
  {
    name: "Bob",
    age: 38,
    occupation: "Turtle tamer",
    image: "src/assets/bob.png",
  },
  {
    name: "Billy",
    age: 99,
    occupation: "Accountant",
    image: "src/assets/billy.png",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  function Button() {
    function nextUser() {
      setIndex((index + 1) % user.length);
    }

    return (
      <>
        <button onClick={nextUser}>Next</button>
      </>
    );
  }

  return (
    <>
      <div>
        <img
          src={user[index].image}
          alt={"image of " + user[index].name}
          width={150}
        />
        <p className="text-3xl font-bold underline">
          {"Name: " + user[index].name}
        </p>
        <p>{"Age: " + user[index].age}</p>
        <p>{"Occupation: " + user[index].occupation}</p>
        <Button />
      </div>
    </>
  );
}
