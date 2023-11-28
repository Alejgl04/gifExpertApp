import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Fifa 2023', 'SpiderMan']);
  
  const onAddCategory = () => {
    
    setCategories([ ...categories, ['Fifa 2024']]);
    
  }



  return (
    <>
      <h1>GifExpertApp</h1>

      <div className='center-form'>
        <AddCategory/>
        <button onClick={onAddCategory}>New category</button>
      </div>

      
      <hr /> 
      <ol>
        { 
          categories.map( category => {
            return <li key={ category }> {category} </li>
          })
        }
      </ol>

    </>
  )
}
