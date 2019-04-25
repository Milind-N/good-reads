import React from 'react'
import PropTypes from 'prop-types'

const SearchResult = ({ books, expandBook}) => {
  const bookTitle = books.best_book.title
  let displayTitle = bookTitle
  .split(" ")
  .slice(0, 4)
  .join(" ");
  if (bookTitle.length > displayTitle.length) {
    displayTitle += "...";
  }

  return (
    <div className="col-lg-2 col-sm-4 col-md-3 pt-2">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={books.best_book.image_url}
          alt="Book cover"
          height="200px"
          onClick={() => expandBook(books)}
        />
        <div className="card-block  pl-2 pr-2 pt-2">
            <h5 
                className="card-title"
                data-toggle="tooltip"
                data-placement="bottom"
                title={displayTitle.includes("...") ? bookTitle : ""}
            >
                {displayTitle}
            </h5>
            <h6 className="text-muted">{books.best_book.author.name}</h6>
        </div>
      </div>
    </div>
  )
}

SearchResult.propTypes = {
  books: PropTypes.object,
  expandBook: PropTypes.func
}

export default SearchResult
