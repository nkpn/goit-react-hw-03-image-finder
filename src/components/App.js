import React, { Component } from 'react';
//* Components
import Header from './Header';
import Container from './Container';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader';
import fetchImages from 'services/imageAPI';
const axios = require('axios').default;

class App extends Component {
  state = {
    images: null,
    page: 1,
    searchQuery: '',
    loading: false,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearcQuery = prevState.searchQuery;
    const newSearchQuery = this.state.searchQuery;

    if (prevSearcQuery !== newSearchQuery) {
      this.fetch();
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({
      searchQuery: searchQuery.trim(),
      page: 1,
      images: [],
      status: null,
    });
  };

  fetch = () => {
    const { searchQuery, page } = this.state;

    if (!searchQuery) {
      return;
    }

    this.setState({ loading: true });

    fetchImages({ searchQuery, page })
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <>
        <Header />
        <Searchbar SubmitProps={this.handleFormSubmit} />
        <Container></Container>
        <ToastContainer />
      </>
    );
  }
}
export default App;
