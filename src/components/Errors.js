import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { removeError } from '../actions'

const Errors = () => {

  const dispatch = useDispatch()
  const errors = useSelector((state) => state.errors).errorList

  const errorList = errors.map((error) => {
    return (
      <div className="error">
        <span>{error.msg}</span>
        <button onClick={ () => {handleClick(error.id)} }><FontAwesomeIcon icon={faTimes}/></button>
      </div>
    )
  })

  const handleClick = (id) => {
    dispatch(removeError(id))
  }

  return (
    <div className='error-container'>
      {errorList}
    </div>
  )
}

export default Errors