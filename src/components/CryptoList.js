import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { removeActive } from '../actions'
import TableTitle from './TableTitle' 



const CryptoList = () => {

  const cryptos = (useSelector((state) => state.cryptos))
  const active = useSelector((state) => state.active)
  const dispatch = useDispatch()

  const activeCryptos = cryptos.filter(crypto => active.includes(crypto.id) )

  


  const activeCryptosList = activeCryptos.map((crypto) => {

    if (crypto) {
      return (
        <tr key={crypto.id}>
          <td>{crypto.symbol}</td>
          <td>{crypto.name}</td>
          <td>{crypto.rank}</td>
          { crypto.price ? 
            <>
              <td>${ crypto.price > 1 ? crypto.price.toFixed(2): crypto.price }</td>
              {/* <td>{currentQuote.cmc_rank}</td> */}
            </>
            :
            <td>loading ...</td>
          }
          <td className='remove-container'>
            {activeCryptos.length > 1 ? 
              <button className='remove-btn' onClick={ () => { handleRemove(crypto.id) } }>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              : ''
            }
          </td>
        </tr>
      )
    }
    return <tr>loading</tr>
  })

  const handleRemove = (id) => {
    dispatch(removeActive(id))
  }

  return (
    <div>
      <table className='crypto-table'>
        <thead>
          <tr>
            <TableTitle name='symbol' label='Symbol'/>
            <TableTitle name='name' label='Name'/>
            <TableTitle name='rank' label='Rank'/>
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