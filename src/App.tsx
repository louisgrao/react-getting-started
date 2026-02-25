import { useState } from "react";
import "./App.css";

//Messin' Around
/*

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

function Button({ onClick }) {
  return (
    <button
      className="outline-2 outline-lime-200 hover:bg-lime-100"
      onClick={onClick}
    >
      Next
    </button>
  );
}

export default function App() {
  const [index, setIndex] = useState(0);

  function nextUser() {
    setIndex((index + 1) % user.length);
  }

  return (
    <>
      <div className="flex flex-col items-center outline-2 outline-lime-200">
        <img
          src={user[index].image}
          alt={"image of " + user[index].name}
          width={150}
        />
        <p className="text-lg font-semibold">{"Name: " + user[index].name}</p>
        <p className="">{"Age: " + user[index].age}</p>
        <p className="">{"Occupation: " + user[index].occupation}</p>
        <Button onClick={nextUser} />
      </div>
    </>
  );
}
*/

// Following getting started docs

export default function MyApp() {
  let content;
  let condition = false;

  if (condition) {
    content = <Truthy />;
  } else {
    content = <Falsy />;
  }
  return (
    <div>
      <h1>Hello world</h1>
      {content}
      <MyButton />
      <MyButton />
      <Products />
      <Colors />
    </div>
  );
}

function Truthy() {
  return <p>True</p>;
}
function Falsy() {
  return <p>Falsy</p>;
}
function MyButton() {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      Click Me{" Again".repeat(clicks)}!
    </button>
  );
}

function Products() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  const listItems = products.map((product) => <li>{product.title}</li>);
  return <ul>{listItems}</ul>;
}

function Colors() {
  let colors = [{ name: "red" }, { name: "purple" }, { name: "green" }];

  const listColors = colors.map((color) => <li>{color.name}</li>);
  return <ul>{listColors}</ul>;
}
