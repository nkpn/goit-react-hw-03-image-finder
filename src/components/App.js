import React, { Component } from 'react';
//* Components
import Header from './Header';
import Container from './Container';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader';
import { fetchImages } from '../services/imageAPI';

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

  fetch = async () => {
    const { searchQuery, page } = this.state;

    if (!searchQuery) {
      return;
    }

    this.setState({ loading: true });

    try {
      const images = await fetchImages({ searchQuery, page });
      this.setState(prevState => ({
        images: [...prevState.images, ...images.data.hits],
        page: prevState.page + 1,
        loading: false,
      }));
      console.log(images);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } catch (error) {
      this.setState({ errors: this.setState({ error }), loading: false });
    }
  };

  // fetch = () => {
  //   const { searchQuery, page } = this.state;

  //   if (!searchQuery) {
  //     return;
  //   }

  //   this.setState({ loading: true });

  //   fetchImages({ searchQuery, page })
  //     .then(hits => {
  //       this.setState(prevState => ({
  //         images: [...prevState.images],
  //         page: prevState.page + 1,
  //       }));
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: 'smooth',
  //       });
  //     })
  //     .catch(error => this.setState({ error }))
  //     .finally(() => {
  //       this.setState({ loading: false });
  //     });
  // };

  render() {
    const { images } = this.setState;
    const { handleFormSubmit } = this;
    return (
      <>
        <Header />
        <Searchbar SubmitProps={handleFormSubmit} />
        <Container>
          <ImageGallery images={images} />
        </Container>
        <ToastContainer />
      </>
    );
  }
}
export default App;
