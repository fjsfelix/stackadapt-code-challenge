import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { sortCryptos } from '../actions'



const TableTitle = ({name, label}) => {

  const dispatch = useDispatch()
  const sortBy = useSelector((state) => state.sortBy)

  const handleSortClick = (sortBy) => {
    dispatch(sortCryptos(sortBy))
  }

  if (sortBy.name === name) {
    return (
      <th 
        align="left" 
        onClick={ () => {handleSortClick(name)} } 
        className='sort-by' >
          {label}
          {sortBy.direction === 'asc' ?
            <FontAwesomeIcon icon={faCaretDown} className='caret'/>
          :
            <FontAwesomeIcon icon={faSortUp} className='caret caret-up'/>
          }
      </th>
    )
  } 

  return (
    <th 
      align="left" 
      onClick={ () => {handleSortClick(name)} } >
        {label}
    </th>
  )
}

export default TableTitle