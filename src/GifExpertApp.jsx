import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Fifa 2023', 'SpiderMan']);
  
  return (
    <>

      <div className='center-form'>
      <h1>GifsExpertApp..</h1> 
        <AddCategory setCategories={setCategories}/>
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
