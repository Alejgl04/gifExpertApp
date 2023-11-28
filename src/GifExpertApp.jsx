import { useState } from 'react'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Fifa 2023', 'SpiderMan']);
  
  const onAddCategory = () => {
    
    setCategories([ ...categories, ['Fifa 2024']]);
    
  }



  return (
    <>
      <h1>GifExpertApp</h1>

      <button onClick={onAddCategory}>Add new Category</button>
      
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
