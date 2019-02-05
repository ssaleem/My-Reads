import React, { Component } from 'react';
import Book from './Book'

class Bookshelf extends Component {
	render() {
    const { bookshelf, books, onUpdateBook} = this.props;
    let shelf = bookshelf.replace(/\s+/g, '').toLowerCase();
    let shelfItems = books.filter(book => book.shelf.toLowerCase() === shelf);
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{bookshelf}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{shelfItems.map(book => (
							<li key={book.id}>
								<Book book={book} onUpdateBook={onUpdateBook} />
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Bookshelf