import { ADD_BIRD, INCREASE_LIKES } from "../actions/ActionTypes";

const initialState = {
  birdList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BIRD:
      return { birdList: [...state.birdList, action.payload] };

    // case INCREASE_LIKES:
    //   const updatedBirdList = state.birdList.map((bird,idx)=>{
    //     if(idx===action.payload){
    //       return {
    //         ...bird,likes:bird.likes+1
    //       }
    //     }
    //     return bird
    //   })
    case INCREASE_LIKES:
      // state.birdList[action.payload] = {
      //   ...state.birdList[action.payload],
      //   likes: state.birdList[action.payload].likes + 1,
      // };
      let stateCopy = state.birdList
      stateCopy[action.payload] = {
        ...stateCopy[action.payload],
        likes: stateCopy[action.payload].likes + 1,
      };
      return { birdList: stateCopy };

    default:
      return state;
  }
};

export default reducer;
