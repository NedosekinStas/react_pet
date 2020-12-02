import BookItem, {  } from "./BookItem";

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

export default function BookList(props) {
  return (
    <div className='container'>
      <div className='book-list'>
        <ul style={styles.ul}>
          { props.books.map(book => {
              return <BookItem book={book} key={book.id} /> // key не обязательно, но тулза ругается!
          }) }
        </ul>  
    </div>
    </div>
  )
}