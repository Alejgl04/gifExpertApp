import { useState } from 'react'

export const AddCategory = () => {

  const [inputValue, setinputValue] = useState('')
  
  const onInputChange = ({ target }) => {
    setinputValue( target.value )
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (

    <form onSubmit={ ( event ) => onSubmit(event) }>
      <input 
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={ (event) => onInputChange(event)}
      />
    </form>

  )
}
