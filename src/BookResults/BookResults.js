import React from 'react';
import { Button, Carousel, ListGroup } from 'react-bootstrap';
import './BookResults.css';
import UpdateBookModal from './UpdateBookModal/UpdateBookModal';

class BookResults extends React.Component {
  render() {
    const { bookData } = this.props;
    return (
      <>
        <Carousel>
          {bookData.map((displayedBook, idx) => (
            <Carousel.Item interval={1500} key={displayedBook._id}>
              <Carousel.Caption>
                <div>{displayedBook.title}</div>
                <div>{displayedBook.description}</div>
                <div>{displayedBook.status}</div>
              </Carousel.Caption>
              <img
                src="https://media.istockphoto.com/photos/composition-with-books-on-the-table-picture-id1158413597?k=20&m=1158413597&s=612x612&w=0&h=NYk7P4GACfJ51tXQd3kLUrFski-z-Ykn1tZRWSlCcow="
                alt={this.props.bookData.title}
              ></img>
            </Carousel.Item>
          ))}
        </Carousel>
        <ListGroup>
          {bookData.map((displayedBook) =>(
            <BookItem displayedBook={displayedBook} deleteBook={this.props.deleteBook} key={displayedBook._id} updateBook={this.props.updateBook}></BookItem>
          ))}
        </ListGroup>
      </>
    );
  }
}

class BookItem extends React.Component{

  render(){
    return (
      <>
        <ListGroup.Item variant="dark" >{this.props.displayedBook.title} 
          <Button type='submit' onClick={() => this.props.deleteBook(this.props.displayedBook._id)}>Delete</Button>
          <UpdateBookModal updateBook={this.props.updateBook} displayedBook={this.props.displayedBook}>Update</UpdateBookModal>
        </ListGroup.Item>
      </>
    )
  }
}

export default BookResults;
