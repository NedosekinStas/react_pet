import React, { useEffect } from 'react';     // userEffect хук который подгружаем к получению json
import BookList from './Book/BookList';
import Context from './context';
import AddBook from './Book/AddBook';
import Loader from './loader';

function App() {
  // Так называемый хук возвращающий массив из двух элементов (состояние, функция для изменения состояния)
  const [books, setBooks] = React.useState([
    // { id: 1, completed: false, title: 'А.С Пушкин. Сказка о царе Салтане' },
    // { id: 2, completed: false, title: 'В.В Набоков. Камера обскура' },
    // { id: 3, completed: false, title: 'Н.В Гоголь. Вечера на хуторе близ Диканьки' }
  ]);

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .then(response => response.json())
      .then(books => {
        setTimeout(() => {
          setBooks(books)
          setLoading(false)
        }, 2000)
        
      })
  }, [])

  function toggleBook(id) { 
    // изменит массив когда вернется и тем самым изменит стэйт
    setBooks(                            
      books.map(book => {
        if (book.id === id) {
          book.completed = !book.completed
        }
        return book
      }),
    )
  };

  // Передаем в контекст функцию по удалению строки из массива
  function removeBook(id){
    setBooks(books.filter(book => book.id !== id))
  }

  function addBook(title){
    setBooks(
      books.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    // в контекст можно передавать что угодно
    <Context.Provider value={{removeBook}}>
      <div className='wrapper'>
        <h1>Title index</h1>

        <AddBook onCreate={addBook} />

        {loading && <Loader />}

        {books.length ? (
          <BookList books={books} onToggle={toggleBook} /> 
        ) : (
          loading ? null :(
            <p>Нет Книг!</p>
          )
        )}
        
      </div>
    </Context.Provider>
  );
};

export default App;
