import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/gift/useFetchGifs';


export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
      {
        isLoading && ( <h2 className='text-center text-white'>Loading...</h2> )
      }
      <h3 className='text-center text-white'>{category}</h3>
      
      <div className="container text-center">
      <div className="row align-items-start">
        {
          images.map( (image) => (
            <GifItem 
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}