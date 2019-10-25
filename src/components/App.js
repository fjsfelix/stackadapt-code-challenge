import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select';
import _ from 'lodash'

import { fetchCryptosAndQoutes, addActive } from '../actions'
import CryptoList from './CryptoList'
import Errors from './Errors'
import './styles.scss'


const App = () => {
  const dispatch = useDispatch()
  const cryptos = (useSelector((state) => state.cryptos))
  const active = useSelector((state) => state.active)

  const unactiveCryptos = cryptos.filter( crypto => !active.includes(crypto.id) )
  const unactiveCryptosOptions = unactiveCryptos.map((crypto) => {
    return { value: crypto.id, label: crypto.symbol + ' - ' + crypto.name }
  })
  const unactiveCryptosOptionsSorted =  _.orderBy(unactiveCryptosOptions, ['label'], ['asc'])
  console.log(unactiveCryptosOptionsSorted)


  const [selectedCrypto, setSelectedCrypto] = useState(null);

  useEffect(() => {
    dispatch(fetchCryptosAndQoutes())
  }, [])
  
  const handleChange = (selected) => {
    setSelectedCrypto(null)
    dispatch(addActive(selected.value))
  }

  return (
    <>
      <Errors/>
      <div className='container'>
        <Select 
          value={selectedCrypto}
          onChange={handleChange}
          options={unactiveCryptosOptionsSorted}
          placeholder={'Select Cryptocurrency to Add'}
        />
        <CryptoList />
      </div>
    </>
  )
}

export default App
