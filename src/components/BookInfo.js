import React, { Component } from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import AuthorInfo from './AuthorInfo'

const apiKey = 'ynuEDG9y5v4bh1ADHBHw'

class BookInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      description: 'Fetching description for this book...',
      error: ''
    }
  }

  componentDidMount() {
    this.getDescription();
  }

  getDescription = () => {
    const bookId = this.props.books.best_book.id
    const requestUri = `https://mysterious-waters-52302.herokuapp.com/https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`

    Axios.get(requestUri)
         .then(res => {
           const parser = new DOMParser();
           const XMLResponse = parser.parseFromString(res.data, 'application/xml')
           const parseError = XMLResponse.getElementsByTagName('parsererror')

            if (parseError.length) {
              this.setState({
                error: 'An error occurred while fetching the data.'
              })
            }
            else {
              let description = XMLResponse.getElementsByTagName('description')[0].innerHTML
              description = description.replace('<![CDATA[', '').replace(']]>', '')

              if (!description) {
                description = "No description found."
              }
              this.setState({ description })

              let XMLresults = XMLResponse.getElementsByTagName('authors')[0].innerHTML
              XMLresults = XMLresults.replace(/<!\[CDATA\[/g, '').replace(/\]\]>/g, '')
              XMLresults = `<authors>${XMLresults}</authors>`;
              const XMLResponseNew = parser.parseFromString(XMLresults, 'application/xml')
              const XMLresultsNew = new Array(...XMLResponseNew.getElementsByTagName('author'))
              const searchResults = XMLresultsNew.map(result => this.XMLToJson(result))
              console.log(searchResults);
              
              this.setState({ searchResults })
            }
         })
         .catch(error => {
           this.setState({
             error: error.toString()
           })
         })
  }

  // function to convert XML document to JSON format
  XMLToJson = XML => {
    const allNodes = new Array(...XML.children)
    const jsonResult = {}
    allNodes.forEach(node => {
      if (node.children.length) {
        jsonResult[node.nodeName] = this.XMLToJson(node)
      }
      else {
        jsonResult[node.nodeName] = node.innerHTML
      }
    })
    return jsonResult
  }

  render() {
    const { books } = this.props

    return (
      <div className="row col-lg-12">

        <div className="col-lg-2 col-sm-4">
          <img
            src={books.best_book.image_url}
            height="200px"
            width="130px"
            alt="book cover"
          />
        </div>
        <div className="col-lg-10 col-sm-8">
          <h3 className="mb-3">{books.best_book.title}</h3>

          <AuthorInfo authors={this.state.searchResults} />

          <p>Avg. Rating: {books.average_rating}</p>

          {(this.state.error && (
            <p className="text-danger">{this.state.error}</p>
          )) || (
            <p dangerouslySetInnerHTML={{ __html: this.state.description }}></p>
          )}
        </div>
        <div>
          <p>
            Published Date:{" "}
            {`${books.original_publication_day}/${books.original_publication_month}/${books.original_publication_year}`}.{" "}
          </p>
          <button className="btn btn-primary" onClick={this.props.collapseBook}>
            {'Go Back'}
          </button>
        </div>
      </div>
    )
  }
}

BookInfo.propTypes = {
  books: PropTypes.object,
  collapseBook: PropTypes.func
}

export default BookInfo
