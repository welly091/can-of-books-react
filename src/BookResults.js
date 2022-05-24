import React from 'react';
import Carousel from '../node_modules/react-bootstrap/Carousel';

class BookResults extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          {this.props.bookData.map((displayedBook, idx) => (
            <Carousel.Item interval={1500}>
              <Carousel.Caption>
                <h3>{this.props.bookData.title}</h3>
                <p>{this.props.bookData.description}</p>
                <h3>{this.props.bookData.status}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
          ;
        </Carousel>
      </>
    );
  }
}

export default BookResults;
