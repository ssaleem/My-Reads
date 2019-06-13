import React from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount () {
    BooksAPI.getAll ().then (books => this.setState ({books}));
  }

  updateBook = (book, newShelf) => {
    BooksAPI.update (book, newShelf)
      .then(() => {
        this.setState (prevState => {
          let index = prevState.books.findIndex (
            bookEntry => bookEntry.id === book.id
          );
          if (index !== -1) {
            prevState.books[index].shelf = newShelf;
          }
          else {
            book.shelf = newShelf;
            prevState.books = prevState.books.concat (book);
          }
          return {state: prevState};
        });
      })
      .catch (e => console.log (e));
  }

  render () {
    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              onUpdateBook={this.updateBook}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              bookList={this.state.books}
              onUpdateBook={this.updateBook}
            />
          )}
        />
      </>
    );
  }
}

export default BooksApp;
