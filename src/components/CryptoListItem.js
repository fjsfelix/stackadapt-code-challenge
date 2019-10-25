import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { removeActive } from '../actions'


const CryptoListItem = ({id, name, symbol, rank, price}) => {
  const dispatch = useDispatch()
  const active = useSelector((state) => state.active)

  const handleRemove = (id) => {
    dispatch(removeActive(id))
  }

  return (
    <tr>
      <td>{rank}</td>
      <td>{symbol}</td>
      <td>{name}</td>
      { price ? 
        <td>${ price > 1 ? price.toFixed(2): price }</td>
        :
        <td>loading ...</td>
      }
      <td className='remove-container'>
        {active.length > 1 ? 
          <button className='remove-btn' onClick={ () => { handleRemove(id) } }>
            <FontAwesomeIcon icon={faTimes}/>
          </button>
          : ''
        }
      </td>
    </tr>
  )
}

export default CryptoListItem
