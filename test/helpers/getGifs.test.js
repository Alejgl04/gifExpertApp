import { getGifs } from "../../src/helpers/getGifs";

describe('Testing on getGifts()', () => {

  test('Should return an array of gifs', async() => {

    const gifs = await getGifs('Spiderman');

    expect( gifs.length ).toBeGreaterThan( 0 );
    expect( gifs[0] ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String) 
    });


  });

})