import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import TableTitle from './TableTitle' 
import CryptoListItem from './CryptoListItem'



const CryptoList = () => {

  const cryptos = (useSelector((state) => state.cryptos))
  const active = useSelector((state) => state.active)
  const activeCryptos = cryptos.filter(crypto => active.includes(crypto.id) )


  const activeCryptosList = activeCryptos.map((crypto) => {
    return <CryptoListItem {...crypto} key={crypto.id} />
  })


  return (
    <div>
      <table className='crypto-table'>
        <thead>
          <tr>
            <TableTitle name='rank' label='Rank'/>
            <TableTitle name='symbol' label='Symbol'/>
            <TableTitle name='name' label='Name'/>
            <TableTitle name='price' label='Price (USD)'/>
            <th ></th>
          </tr>
        </thead>
        <tbody>
          {activeCryptosList}
        </tbody>
      </table>   
    </div>
  )
}

export default CryptoList