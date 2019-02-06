import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllBooks } from './js/actions/index'; 
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import './App.css'

class BooksApp extends React.Component {
  componentDidMount() {
    this.props.getAllBooks();
  }

  updateBook(book, newShelf) {
    

  }


  render() {
    return (
      <div className="app">
          <Route exact path='/' component={ListBooks}/>
          <Route path="/search" render={() => (
            <SearchBooks
            bookList={this.props.books}
            onUpdateBook={(book, newShelf) => this.updateBook(book, newShelf)}/>
          )}/>
      </div>
    )
  }
}

export default connect(
  null,
  {getAllBooks}
)(BooksApp);
