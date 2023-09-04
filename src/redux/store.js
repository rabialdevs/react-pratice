 import {createStore} from "redux"
 import CountReducer from "./reducer/CountReducer.js"

 const store = createStore(CountReducer);

 export default store;