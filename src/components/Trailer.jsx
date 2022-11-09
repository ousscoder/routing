import React from 'react'
import './Trailer.css'
import Iframe from 'react-iframe'
import {useParams} from 'react-router-dom'
const Trailer = ({movies}) => {
   const{id}=useParams()
   const movie = movies.find((el)=>el.id==id)

    return (
        <div> 
      <h1 className='filmname'> {movie.title}</h1>
      <h2 className='ratinng'> {movie.rate}</h2>
      <p className='descriptionzone' > {movie.description}</p>
<Iframe className='iframee' width="1309" height="700" src={movie.trailer}  title="YouTube video player" ></Iframe>
        </div>
    )
}

export default Trailer