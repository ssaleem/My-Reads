import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component { 
	static propTypes = {
	    books: PropTypes.array.isRequired,
	    onUpdateBook: PropTypes.func.isRequired
		}
	
	shelves = ["Currently Reading", "Want to Read", "Read"];

	render (){
		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              {this.shelves.map(shelf => (
									<Bookshelf bookshelf={shelf} {...this.props}/>
								))}
	            </div>
	            <div className="open-search">
	              <Link to='/search'>Add a book</Link>
	            </div>
            </div>
		)
	}
}

export default ListBooks