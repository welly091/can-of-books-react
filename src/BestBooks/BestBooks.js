import React from 'react';
import axios from 'axios';
import BookResults from '../BookResults/BookResults.js';
import {withAuth0} from "@auth0/auth0-react";

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
    if(this.props.auth0.isAuthenticated){
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log(jwt);
    
      try {
        let results = await axios.get(`${SERVER}/books`);
        this.setState({
          books: results.data
        });
      } catch (error) {
        console.log('We have an error: ', error.response.data);
      }
    }
  };

  handleDeleteBook = (id) =>{
    axios.delete(`${SERVER}/books/${id}`)
    .then((res) =>{
      const filterBook = this.state.books.filter(book => book._id !== id)
      this.setState({
        books:filterBook
      })
    })
    .catch((error)=>{
      console.log('Delete error')
    })
  }

  handleUpdateBook = async (bookObj) =>{
    try {
      //Update the data to database
      let bookUpdated = await axios.put(`${SERVER}/books/${bookObj._id}`, bookObj);
      //Update our state data
      let newBooksArray = this.state.books.map(book =>{
        return book._id === bookObj._id ? bookUpdated.data : book
      });
      this.setState({books: newBooksArray})
    } catch (error) {
      console.log('Update Error.', error.response.data)
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    /* TODO: render all the books in a Carousel */
    
    return (
      <>
      {
        this.props.auth0.isAuthenticated ? 
        (
        <>
          <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
          
          {this.state.books.length !== 0 ? (
            <BookResults bookData={this.state.books} deleteBook={this.handleDeleteBook} updateBook={this.handleUpdateBook}/>
          ) : (
            <h3>No Books Found :(</h3>
          )}
        </>
        ) : <h2>Welcome</h2>
      }
        
      </>
    );
  }
}

export default withAuth0(BestBooks);
