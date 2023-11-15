const initialState = {
    username: null,
  }
  
  export const userReducer = (state = initialState, action) => {
    console.log(action)
    // switch (action.type) {
        
    //   case "CHANGE_USERNAME":
        console.log("test");
        return {
          ...state,
          username: action.payload,
        }
        
    //   default:
    //     return state
    // }
  }