
export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Op5KzFfttVVPD0lzAIo2YnfBuwNPAsyo&q=${category}&limit=10`;
  const response = await fetch( url );
  const { data = [] } = await response.json();

  const gifs = data.map( images => ({
    id: images.id,
    title: images.title,
    url: images.images.downsized_medium.url
  }))
  return gifs;
}