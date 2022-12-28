import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'


const MovieList = ({ list }) => {
  
  return (
    
    <div>
      {list.map(elm => { return <Link  to={`/trailer/${elm.id}`} >  <MovieCard elm={elm}/>  </Link> })}
    </div>
  )
}

export default MovieList