import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book'

class Bookshelf extends Component {
	render() {
    const { bookshelf, books} = this.props;
    let shelf = bookshelf.replace(/\s+/g, '').toLowerCase();
    let shelfItems = books.filter(book => book.shelf.toLowerCase() === shelf);
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{bookshelf}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{shelfItems.map(book => (
							<li key={book.id}>
								<Book book={book} />
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { books: state.books };
}
export default connect(mapStateToProps)(Bookshelf);
