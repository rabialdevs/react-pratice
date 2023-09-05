import { ADD_BIRD, INCREASE_LIKES } from "./ActionTypes";

export const addBird = (bird) => ({
    type: ADD_BIRD,
    payload: bird
})

export const increaseLikes = (birdId) => ({
    type: INCREASE_LIKES,
    payload:birdId
});
