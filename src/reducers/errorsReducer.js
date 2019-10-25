const errorDefault = {
  idCounter: 0,
  errorList: []
}

const errorsReducer = (state = errorDefault, action) => {
  switch(action.type) {
    case 'ERROR': 
      var duplicate = state.errorList.find((error) => {
        if (error.msg === action.payload) {
          return true
        }
      })

      if (duplicate) {
        return state
      }

      return {
        idCounter: state.idCounter + 1,
        errorList: [...state.errorList, {
          id: state.idCounter + 1,
          msg: action.payload
        }]
      }
    case 'REMOVE_ERROR':
      var errorListCopy = [...state.errorList]
      var filtered = errorListCopy.filter((error) => error.id != action.payload)

      return {
        idCounter: state.idCounter,
        errorList: filtered
      }

    default :
      return state
  }
}

export default errorsReducer
