import React from 'react';
import {Carousel} from 'react-bootstrap';

class BookResults extends React.Component {

  constructor(props){
    super(props)
    this.state={
      bookData:[]
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
        bookData: props.bookData
    }
}


  render() {
    const{bookData} = this.state
    console.log(bookData)
    return (
      <>
        <Carousel>
          {bookData.map((displayedBook, idx) => (
            <Carousel.Item  interval={1500} key={idx} >
              <Carousel.Caption>
                <div>{displayedBook.title}</div>
                <div>{displayedBook.description}</div>
                <div>{displayedBook.status}</div>
              </Carousel.Caption>
                <img src='https://pngimg.com/uploads/book/book_PNG2118.png' alt={this.props.bookData.title}></img>
            </Carousel.Item>
          ))}
          ;
        </Carousel>
        <div>{this.props.bookData.title}</div>
      </>
    );
  }
}

export default BookResults;
