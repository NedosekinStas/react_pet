import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context'
import { useState } from 'react';

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
};

// Забираем ключ из BookItem book={book}
function BookItem({ book, index, onChange }) {
  // Передаем контекст который получили
  const {removeBook} = useContext(Context)          
  const classes = []

 if (book.completed){
   classes.push('completed')
 };

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input 
          style={styles.input} 
          type='checkbox'
          checked={book.completed}              
          onChange={() => onChange(book.id)}/>
      <strong>{index + 1}.</strong>
      &nbsp;
      {book.title}
      </span>

      <button onClick={removeBook.bind(null, book.id)}>&times;</button>
    </li>    
  )
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default BookItem;