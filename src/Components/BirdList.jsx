import { useState } from "react"
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux"
import increaseValue from "../redux/actions/CountAction"
const BirdList = () => {

    const dispatch = useDispatch()
    const count = useSelector((state) => state)
    const [name,setName]=useState("");
    const [nameList,setNameList]=useState([]);
  return (
    
    <div>
        <h1>Bird List </h1>
        <h3>Add Bird :----</h3>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <br />
        <br />
        <button onClick={()=>setNameList([...nameList,name])} >Add</button>
        <br />
        {
            nameList.length>0&&nameList.map((item,idx)=>(
                <div key={idx}>
                    <li>{item}</li>
                    <label >Likes  : {count}</label>
                    <button onClick={()=>(dispatch(increaseValue(idx)))}>+</button>


                </div>

            ))
        }
    </div>
  )
}

export default BirdList