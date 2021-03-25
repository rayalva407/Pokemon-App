import React from 'react'

function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      {goToPrevPage ? <button onClick={goToPrevPage} >Previous</button> : null}
      {goToNextPage ? <button onClick={goToNextPage}>Next</button>: null}
    </div>
  )
}

export default Pagination
