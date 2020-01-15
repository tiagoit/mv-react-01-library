import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import './App.css';

const mapStateToProps = (state) => ({ books: state.books });
const BooksListContainer = connect(mapStateToProps, null)(BooksList);

class App extends React.Component {
  constructor(props) {
    super(props);
    const { books } = this.props;
    this.books = books;
  }

  render() {
    return (
      <div>
        <BooksListContainer />
        <BooksForm />
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
