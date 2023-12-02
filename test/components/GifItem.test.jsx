import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';


describe('Testing on GifItem', () => {

  const title = 'Spiderman';
  const url   = 'https://spiderman.com/spiderman.jpg';

  test('should be match snapshop', () =>{

    const { container } = render( <GifItem title={ title } url={ url }/>)
    expect( container ).toMatchSnapshot();
    
  });

  test('it must show the image with url and alt in the image', () =>{

    render( <GifItem title={ title } url={ url }/>)

    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
    
  });

  test('it must show the title component', () =>{

    render( <GifItem title={ title } url={ url }/>)
    expect( screen.getByText(title) ).toBeTruthy();
    
  });

});