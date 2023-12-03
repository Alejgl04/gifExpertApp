import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/gift/useFetchGifs";


jest.mock('../../src/hooks/gift/useFetchGifs');

describe('Testing on GifGrid', () => {

  const category = 'Spiderman';

  test('it must show the loading..', () => { 

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={category} /> );
    expect( screen.getByText('Loading...'));
    expect( screen.getByText(category));

  });
  
  test('it must show the loaded images..', () => { 
    
    const gifs = [
      { 
        id: 'ABC',
        title: 'Spiderman',
        url: 'https://localhost/spiderman.jpg'
      },
      { 
        id: 'ABCD',
        title: 'Iroman',
        url: 'https://localhost/iroman.jpg'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={category} /> );
    expect( screen.getAllByRole('img').length).toBe(2);
    

  });

})

