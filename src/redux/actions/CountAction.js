import { INCREASE_VALUE } from "./ActionTypes";


const increaseValue = (value) => ({
    type: INCREASE_VALUE,
    payload:value
});

export default increaseValue;