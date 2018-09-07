import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
	static propTypes = {
	    books: PropTypes.array.isRequired,
	    onUpdateBook: PropTypes.func.isRequired
    }

	render (){
		const { books, onUpdateBook } = this.props

		let currentlyReading = (books.filter(book => book.shelf === "currentlyReading"))
        let wantToRead = (books.filter(book => book.shelf === "wantToRead"))
        let read = (books.filter(book => book.shelf === "read"))

		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                <Bookshelf bookshelfTitle="Currently Reading" books={currentlyReading} onUpdateBook={onUpdateBook}/>
	                <Bookshelf bookshelfTitle="Want to Read" books={wantToRead} onUpdateBook={onUpdateBook}/>
	                <Bookshelf bookshelfTitle="Read" books={read} onUpdateBook={onUpdateBook}/>
	              </div>
	            </div>
	            <div className="open-search">
	              <Link to='/search'>Add a book</Link>
	            </div>
            </div>
		)
	}
}

export default ListBooks