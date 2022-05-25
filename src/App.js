import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BestBooks from './BestBooks/BestBooks.js';
import About from './About/About';
import BookFormModal from './BookFormModal/BookFormModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      books:[],
    }
  }
  
  handleCreateBook = async (bookInfo) =>{
    axios.post(`${process.env.REACT_APP_SERVER}/books`, bookInfo)
    .then((res) =>{
      this.setState({
        books:[...this.state.books, res.data]
      })
      console.log('success!!!!!@@!!')
    })
    .catch((error) =>{
      console.log('OOPSS')
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header />
            
            <Switch>
              <Route exact path="/">
                <BestBooks books={this.state.books}/>
              </Route>
              {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>

            <BookFormModal onCreate={this.handleCreateBook}/>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
