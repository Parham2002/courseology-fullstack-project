import React from 'react'
import "./SearchBar.scss"

const SearchBar = ({ setSearchTerm }) => {

  return (
    <div className='input'>
      <input type="text" placeholder='Search...' onChange={(event) => setSearchTerm(event.target.value)}/>
    </div>
  )
}

export default SearchBar