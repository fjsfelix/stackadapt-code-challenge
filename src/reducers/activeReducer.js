import _ from 'lodash'


const activeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVE_LIST':
      return action.payload

    case 'ADD_ACTIVE':
      if ( !_.includes(state, action.payload) ) {
        return [...state, action.payload]
      } else {
        return state
      }

    case 'REMOVE_ACTIVE':
      return state.filter((id) => !(id === action.payload))
    default: 
      return state
  } 
}

export default activeReducer
