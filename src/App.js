import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateBook(book, newShelf) {
    // console.log(book)
    BooksAPI.update(book, newShelf).then( () => {
      this.setState(prevState => {
        let index = prevState.books.findIndex(bookEntry => bookEntry.id === book.id)
        // console.log(index)
        if(index !== -1) {
          prevState.books[index].shelf = newShelf
        }
        else {
          book.shelf = newShelf
          prevState.books = prevState.books.concat(book)
        }
        return { state: prevState}
      })
    }
    )
  }


  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBook={(book, newShelf) => this.updateBook(book, newShelf)}
          />
        )}/>
          <Route path="/search" render={() => (
            <SearchBooks
            bookList={this.state.books}
            onUpdateBook={(book, newShelf) => this.updateBook(book, newShelf)}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
