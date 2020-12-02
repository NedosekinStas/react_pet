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
              return <BookItem book={book} key={book.id} index={index} /> // key не обязательно, но тулза ругается!
          }) }
        </ul>  
    </div>
    </div>
  )
}

// Библиотека для определения типа данных
BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired //массив из объектов 
}

export default BookList