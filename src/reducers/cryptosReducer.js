import _ from 'lodash'

const cryptosReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_CRYPTOS':
      return action.payload
    case 'FETCH_QUOTE':
      const price = action.payload.quote.USD.price
      var newList = [...state]
      const currentCrypto = newList.find(x => x.id === action.payload.id)
      currentCrypto['price'] = price
      return newList
    case 'SORT_CRYPTOS':
      
      const sortBy = action.payload
      console.log(sortBy)
      const sorted = _.orderBy(state, [sortBy.name], [sortBy.direction])
      return sorted
    default:
      return state
  }
}

export default cryptosReducer