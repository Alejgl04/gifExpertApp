import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  const [counter, setcounter] = useState(10);
  
  useEffect( () => {
    getGifs(category);

  }, [])


  return (
    <>
      <h3>{ category }</h3>
      <p> Hello World </p>
    </>
  )
}
