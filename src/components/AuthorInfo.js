import React from 'react'
import PropTypes from 'prop-types'

const AuthorInfo = ({ authors }) => {
  return (
    <p>
    By:{" "}
        {authors.map((author, index) => (
          <span key={ author.id } className="font-weight-bold">
            {index ? ', ' : ''}
            <a href={author.link}>
              {author.name}
            </a>
            {author.role ? `(${author.role})` : ''}
          </span>
        ))
        }
    </p>
  )
}

AuthorInfo.propTypes = {
  authors: PropTypes.array
}

export default AuthorInfo
