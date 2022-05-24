import React from 'react';
import { Carousel } from 'react-bootstrap';
import './BookResults.css';

class BookResults extends React.Component {
  render() {
    const { bookData } = this.props;
    console.log(bookData);
    return (
      <>
        <Carousel>
          {bookData.map((displayedBook, idx) => (
            <Carousel.Item interval={1500} key={idx}>
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
        <div>{this.props.bookData.title}</div>
      </>
    );
  }
}

export default BookResults;
