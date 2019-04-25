import React from 'react'
import PropTypes from 'prop-types'
import SearchResult from './SearchResult'

const Results = ({ books, expandBook }) => {

  return (
    <div>
      <div className="row">
        {(books.length > 0 ) ? <p>PAGE 1 OF ABOUT {books.length} RESULTS (0.18 SECONDS)</p> : ""}
      </div>
      <div className="row">
        {books.map(book => (
          <SearchResult books={book} key={book.id} expandBook={expandBook} />
        ))
        }
      </div>
    </div>

  )
}

Results.propTypes = {
  books: PropTypes.array,
  expandBook: PropTypes.func
}

export default Results
