import React from 'react';
import axios from 'axios';
import BookResults from './BookResults';

const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data,
      });
    } catch (error) {
      console.log('We have an error: ', error.response.data);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length !== 0 ? (
          <BookResults bookData={this.state.books} />
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
