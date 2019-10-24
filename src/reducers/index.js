import { combineReducers } from 'redux'
import activeReducer from './activeReducer'
import cryptoReducer from './cryptosReducer'
import sortByReducer from './sortByReducer'

export default combineReducers({
  active: activeReducer,
  cryptos: cryptoReducer,
  sortBy: sortByReducer
})