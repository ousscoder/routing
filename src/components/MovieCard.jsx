import React from 'react'
import { Card,Button } from 'react-bootstrap'
import './MovieCard.css' 
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'



const MovieCard = ({movies,search,rating}) => {
  return (

    <div className='cardcard'>


{movies.filter((movie)=> movie.rate >= rating && movie.title.toLowerCase().includes(search)).map((Movie)=>
<Card className='carta' style={{ width: '18rem' }}>
<Card.Img className='imagee' variant="top" src={Movie.posterUrl} />
<Card.Body>
  <Card.Title className='cardtitle'>{Movie.title}</Card.Title>

  <ReactStars className='starss'
    count={5}
    edit={false}
    size={24}
    value={Movie.rate}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />

  <Card.Text className='cardtext'>{Movie.description}</Card.Text>
  <Link variant="primary" to={`/movie/${Movie.id}`} >
<Button className='cardbutton' variant="primary">Watch Trailer</Button></Link>
</Card.Body>
</Card>
)
}
    </div>

  )
}

export default MovieCard