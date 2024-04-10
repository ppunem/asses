import {Link} from 'react-router-dom'
import './index.css'

const MovieCard=props=>{
    const {movieDetails}=props
    const {id,title,imageUrl,rating}=movieDetails
    const api_key="94c7d3fda98d10640821c3dc2a62787c"

    return(
        <Link to={`/movie/${id}`}>
          <li className='home-movie-card'>
            <img src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} alt="movie" className='home-image'/>
            <h1 className='movie-title'>{title}</h1>
            <p className='rating'>{`Rating: ${rating}`}</p>
          </li>
        </Link>
    )
}

export default MovieCard
