import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortCryptos } from '../actions'



const TableTitle = ({name, label}) => {

  const dispatch = useDispatch()
  const sortBy = useSelector((state) => state.sortBy)

  const handleSortClick = (sortBy) => {
    dispatch(sortCryptos(sortBy))
  }


  return (
    <th 
      align="left" 
      onClick={ () => {handleSortClick(name)} } 
      className={sortBy.name === name ? 'sort-by' : ''}
    >
        {label}
    </th>
  )

}

export default TableTitle