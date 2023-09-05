import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addBird, increaseLikes } from "../redux/actions/CountAction";

function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const BirdList = () => {
  let [addBirdName, setAddBirdName] = useState("");
  let birdList = useSelector((state) => state.birdList);
  const forceUpdate = useForceUpdate();

  let dispatch = useDispatch();

  function _addBird() {
    dispatch(addBird({ name: addBirdName, likes: 1 }));
    setAddBirdName("");
  }
  function _increseCount(birdId) {
    dispatch(increaseLikes(birdId));
    forceUpdate()
  }

  return (
    <div>
      <h1>Bird List</h1>
      <label>Add Bird</label>
      <input type="text" onChange={(e) => setAddBirdName(e.target.value)} />
      <button onClick={_addBird}>Add</button>
      <ul>
        {birdList.map((bird, index) => (
          <li key={index}>
            {bird.name}
            <p>Likes : {bird.likes}</p>
            <button onClick={() => _increseCount(index)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirdList;
