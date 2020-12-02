import BookList from './Book/BookList'

function App() {
  const books = [
    { id: 1, completed: false, title: 'А.С Пушкин. Сказка о царе Салтане' },
    { id: 2, completed: false, title: 'В.В Набоков. Камера обскура' },
    { id: 3, completed: false, title: 'Н.В Гоголь. Вечера на хуторе близ Диканьки' }
  ]


  return (
    <div className='wrapper'>
      <h1>Title index</h1>

      <BookList books={books} />
    </div>
  );
}

export default App;
