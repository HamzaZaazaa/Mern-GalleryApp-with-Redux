import { EDIT_USER } from "../types/userTypes"

const initialState = {
    name : "",
    lastname : ""
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case EDIT_USER:
      return {
          ...state, name : payload, lastname : payload
      }
    

  default:
    return state
  }
}
