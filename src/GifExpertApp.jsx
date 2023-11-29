import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Fifa 2023']);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return; 

    setCategories([ newCategory, ...categories ]);
  }

  return (
    
    <>
      <div className='center-form'>
      <h1>GifsExpertApp..</h1> 
        <AddCategory 
          onNewCategory={ event => onAddCategory(event)}          
        />
      </div>

      <hr /> 
      { 
        categories.map( (category) => (
          <GifGrid 
            key={category} 
            category={category} 
          />
        ))
      }
    </>
  )
}
