import { useState } from 'react';
import PropTypes from 'prop-types';

function AddBook({ onCreate }) {
  const [value, setValue] = useState(''); 

  // Отменяем перезагрузку страницы
  function submitHandler(event) {
    event.preventDefault();           
  
    if (value.trim()){
      onCreate(value)
      setValue('')
    }
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)}/>  
      <button type='submit'>Добавить Книгу</button>
    </form>
  )
};

// Валидируем параметр onCreate которая является функцией
AddBook.propTypes = {
  onCreate: PropTypes.func.isRequired 
};

export default AddBook;


