import { findByLabelText } from '@testing-library/react';
import PropTypes from 'prop-types';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1 solid #cccccc',
    padding: '2rem'
  },
  input: {
    margin: '0 15px 0 0'
  } 
}

// Забираем ключ из BookItem book={book}
function BookItem({ book, index }) {
  return (
    <li style={styles.li}>
      <span>
        <input style={styles.input} type="checkbox" />
      <strong>{index + 1}.</strong>
      &nbsp;
      {book.title}
      </span>

      <button>&times;</button>
    </li>    
  )
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default BookItem