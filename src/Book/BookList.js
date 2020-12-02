import BookItem from "./BookItem";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function BookList(props) {
  return (
    <div className='container'>
      <div className='book-list'>
        <ul style={styles.ul}>
          { props.books.map((book, index) => {
              return (
              <BookItem 
                book={book} 
                key={book.id}                             // key не обязательно, но тулза ругается!
                index={index} 
                onChange={props.onToggle} />
              )
            })}
        </ul>  
    </div>
    </div>
  )
}

// Библиотека для определения типа данных
BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired, //массив из объектов 
    onToggle: PropTypes.func.isRequired
}

export default BookList