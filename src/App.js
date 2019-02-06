import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllBooks } from './js/actions/index'; 
// import * as BooksAPI from './utils/BooksAPI'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import './App.css'

class BooksApp extends React.Component {
  // state = {
  //   books: []
  // }

  componentDidMount() {
    this.props.getAllBooks();
  }

  updateBook(book, newShelf) {
    // BooksAPI.update(book, newShelf)
    // .then( () => {
    //   this.setState(prevState => {
    //     let index = prevState.books.findIndex(bookEntry => bookEntry.id === book.id)
    //     if(index !== -1) {
    //       prevState.books[index].shelf = newShelf
    //     }
    //     else {
    //       book.shelf = newShelf
    //       prevState.books = prevState.books.concat(book)
    //     }
    //     return { state: prevState}
    //   })
    // })
    // .catch(() => console.log('book shelf update unsuccessful'));

  }


  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
          <ListBooks
            books={this.props.books}
            onUpdateBook={(book, newShelf) => this.updateBook(book, newShelf)}
          />
        )}/>
          <Route path="/search" render={() => (
            <SearchBooks
            bookList={this.props.books}
            onUpdateBook={(book, newShelf) => this.updateBook(book, newShelf)}/>
          )}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(
  mapStateToProps,
  {getAllBooks}
)(BooksApp);
