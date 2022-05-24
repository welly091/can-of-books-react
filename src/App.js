import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      books:[],
    }
  }
  
  render() {
    return (
      <>
        <Router>
          <Header />

            <Switch>
              <Route exact path="/">
                <BestBooks books={this.state.books} />
              </Route>
              {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>

          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
