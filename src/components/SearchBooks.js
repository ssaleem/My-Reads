import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../utils/BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

	static propTypes = {
	    bookList: PropTypes.array.isRequired,
	    onUpdateBook: PropTypes.func.isRequired
    }

	state = {
		query: '',
		books: []
	}

	onUpdateQuery = (query) => {
		this.setState({ query: query})
		let bookList = this.props.bookList
		query.length >= 1 ? (
			BooksAPI.search(query).then(
				bookResults => {
					console.log(query)
					console.log(bookResults)
					bookResults = bookResults.filter((book) => typeof(book.imageLinks) !== "undefined" && typeof(book.authors) !== "undefined" )
					for(const book of bookResults) {
						let index = bookList.findIndex(bookEntry => bookEntry.id === book.id)
						if( index !== -1 ){
							book.shelf = bookList[index].shelf
						}
						else {
							book.shelf = "none"
						}
					}
					this.setState({ books: bookResults })
				}
			).catch((e) => {
				this.setState({ books: [] })
				console.log(e)
			})
		) : (this.setState({ books: [] }))

	}

	render(){
		const onUpdateBook = this.props.onUpdateBook
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={event => this.onUpdateQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.books && (this.state.books.map((book) => (
							<li key={book.id}>
								<Book book={book} onUpdateBook={onUpdateBook}/>
							</li>
						)))}
					</ol>
				</div>
			</div>
		)

	}
}

export default SearchBooks