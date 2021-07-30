import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';
import { notifyInfo, notifySuccess } from '../../services/Toast';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      notifyInfo();
      return;
    }
    this.props.SubmitProps(this.state.searchQuery);
    this.setState({ searchQuery: '' });
    notifySuccess();
  };

  render() {
    const { handleSubmit } = this;

    return (
      <>
        <section className={style.Searchbar}>
          <form className={style.SearchForm} onSubmit={handleSubmit}>
            <input
              className={style.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Поиск картинок"
              value={this.state.searchQuery}
              onChange={this.handleSearchQueryChange}
            />
            <button type="submit" className={style.SearchFormButton}>
              Поиск
            </button>
          </form>
        </section>
      </>
    );
  }
}

Searchbar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default Searchbar;
