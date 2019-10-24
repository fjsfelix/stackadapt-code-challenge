import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select';

import { fetchCryptosAndQoutes, addActive } from '../actions'
import CryptoList from './CryptoList'
import './styles.scss'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCryptosAndQoutes())
  }, [])

  const cryptos = (useSelector((state) => state.cryptos))
  const active = useSelector((state) => state.active)


  const unactiveCryptos = cryptos.filter( crypto => !active.includes(crypto.id) )

  const unactiveCryptosOptions = unactiveCryptos.map((crypto) => {
    return { value: crypto.id, label: crypto.symbol + ' - ' + crypto.name }
  })

  const [selectedCrypto, setSelectedCrypto] = useState(null);
  


  const handleChange = (selected) => {
    setSelectedCrypto(null)
    dispatch(addActive(selected.value))
  }

  return (
    <div className='container'>
      <Select 
        value={selectedCrypto}
        onChange={handleChange}
        options={unactiveCryptosOptions}
        placeholder={'Select Cryptocurrency to Add'}
      />
      <CryptoList />
    </div>
  )
}

export default App