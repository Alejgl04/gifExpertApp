import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return; 

    setCategories([ newCategory, ...categories ]);
  }

  return (
    
    <>
      <div className='center-form'>
      <h1 className='title__form'>What kind of Gift do you want to search..?</h1> 
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
