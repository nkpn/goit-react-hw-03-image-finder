import React, { Component } from 'react';
//* Components
import Header from './Header';
import Container from './Container';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    images: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <>
        <Header />
        <Searchbar />
        <Container></Container>
      </>
    );
  }
}
export default App;
