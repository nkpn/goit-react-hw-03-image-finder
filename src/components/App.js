import React, { Component } from 'react';
//* Components
import Header from './Header';
import Container from './Container';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader';
// import fetchImages from 'services/imageAPI';
const axios = require('axios').default;

class App extends Component {
  state = {
    API_KEY: '21962068-642cbe2e0c24045a0d25727d8',
    BASE_URL: 'https://pixabay.com/api/',
    images: null,
    page: null,
    searchQuery: '',
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearcQuery = prevState.searchQuery;
    const newSearchQuery = this.state.searchQuery;

    if (prevSearcQuery !== newSearchQuery) {
      this.setState.loading = true;
      // this.fetchImages();
      this.setState.loading = false;
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  componentDidMount() {
    this.setState({ loading: true });

    // setTimeout(() => {
    //   fetch(
    //     `https://pixabay.com/api/'/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=21962068-642cbe2e0c24045a0d25727d8`,
    //   )
    //     .then(res => res.json)
    //     .then(images => this.setState({ images }))
    //     .finally(() => this.setState({ loading: false }));
    // }, 1000);
  }

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
