const initialState = {
    user: null
  }

  export const userReducer = (state = initialState, action) => {
    console.log(action)
        return {
          ...state,
          user: action.payload,
        }

    }