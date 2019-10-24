import axios from 'axios'
import _ from 'lodash'



export const fetchCryptosAndQoutes = () => async (dispatch, getState) => {
  await dispatch(fetchCryptos())

  const cryptoList = getState().cryptos
  const cryptoListSorted = _.orderBy(cryptoList, ['rank'], ['asc'])


  const topFive = cryptoListSorted.slice(0,5)
  const topFiveIds = topFive.map((cypto) => {
    return cypto.id
  })

  topFiveIds.forEach((id) => {
    dispatch(fetchQoute(id))
  })
 
  dispatch(setActiveList(topFiveIds))
}

export const sortCryptos = (sortBy) => (dispatch, getState) => {
  const currentSortBy = getState().sortBy
  var direction = 'asc'

  if (currentSortBy.name == sortBy && currentSortBy.direction == 'asc') {
    direction = 'desc'
  }
  
  dispatch({
    type: 'SORT_CRYPTOS',
    payload: {
      name: sortBy,
      direction: direction
    }
  })

  dispatch({
    type: 'SORT_TYPE',
    payload: {
      name: sortBy,
      direction: direction
    }
  })
}

export const fetchCryptos = () => async (dispatch) => {
  const response = await axios.get('https://www.stackadapt.com/coinmarketcap/map', {
    params: {limit: 10}
  })

  var resultWithPrice = response.data.data.map((crypto) => {
    crypto['price'] = null
    return crypto
  })

  const resultSorted = _.orderBy(resultWithPrice, ['rank'], ['asc'])

  dispatch({
    type: 'FETCH_CRYPTOS',
    payload: resultSorted
  })
}

export const fetchQoute = (cryptoId) => async (dispatch, getState) => {

  console.log(cryptoId)

  const currentCrypto = getState().cryptos.find((crypto) => {
    return crypto.id === cryptoId
  })

  if (currentCrypto.price === null ) {
    const response = await axios.get('https://www.stackadapt.com/coinmarketcap/quotes', {
      params: {id: cryptoId}
    })

    dispatch({
      type: 'FETCH_QUOTE',
      payload: response.data.data[cryptoId]
    })
  }
}


export const setActiveList = (list) => {
  return {
    type: "SET_ACTIVE_LIST",
    payload: list
  }
}

export const addActive = (cryptoId) => async (dispatch) => {
  dispatch(fetchQoute(cryptoId))
  dispatch({
    type: "ADD_ACTIVE",
    payload: cryptoId
  })
}

export const removeActive = (cryptoId) => {
  return {
    type: "REMOVE_ACTIVE",
    payload: cryptoId
  }
}