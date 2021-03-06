import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BooksContext from '../context/BooksContext';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };
  render () {
    const book = this.props.book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <BooksContext.Consumer>
              {updateBook => (
                <select
                  value={book.shelf}
                  onChange={event =>
                    updateBook (this.props.book, event.target.value)}
                >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              )}
            </BooksContext.Consumer>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join (' , ')}</div>
      </div>
    );
  }
}

export default Book;
