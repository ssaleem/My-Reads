import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
  static propTypes = {
    bookList: PropTypes.array.isRequired,
  };

  state = {
    query: '',
    books: [],
  };

  onUpdateQuery = query => {
    this.setState ({query: query});
    let bookList = this.props.bookList;
    query.length
      ? BooksAPI.search (query)
          .then (bookResults => {
            bookResults = bookResults.filter (
              book => book.imageLinks && book.authors
            );
            for (const book of bookResults) {
              let index = bookList.findIndex (
                bookEntry => bookEntry.id === book.id
              );
              book.shelf = index !== -1 ? bookList[index].shelf : 'none';
            }
            this.setState ({books: bookResults});
          })
          .catch (() => this.setState ({books: []}))
      : this.setState ({books: []});
  };

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.onUpdateQuery (event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books &&
              this.state.books.map (book => (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
