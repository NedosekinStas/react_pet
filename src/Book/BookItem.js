
// Забираем ключ из BookItem book={book}
export default function BookItem({ book }) {
  return (
    <li>{book.title}</li>    
  )
}