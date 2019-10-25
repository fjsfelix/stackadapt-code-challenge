const defaultSort = {
  name: 'rank',
  direction: 'asc'
}

const sortByReducer = (state = defaultSort,  action) => {
  switch (action.type){
    case 'SORT_TYPE':
      return {
        name: action.payload.name,
        direction: action.payload.direction
      }
    default:
      return state
  }

}

export default sortByReducer
