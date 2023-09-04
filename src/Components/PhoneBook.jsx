import { useState } from "react";

export default function PhoneBook() {
    const [data, setData] = useState(() => []);
    const [count, setCount] = useState(() => 0);
  
    async function getData() {
      console.log("fetching data");
      return (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    }
    // getData();
  
    async function sortData() {
      let d;
      switch (count) {
        case 0:
          d = data.sort((a, b) => a.name.length - b.name.length);
          break;
        case 1:
          d = data.sort((a, b) => b.name.length - a.name.length);
          break;
        case 2:
          d = await getData();
          break;
        default:
          break;
      }
      setData(d);
      setCount((count + 1) % 3);
    }
  
    return (
      <div className="App">
        <button
          onClick={async () => {
            let arr = await getData();
            setData(arr);
          }}
        >
          Get User
        </button>
        <button onClick={sortData}>Sort List</button>
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  