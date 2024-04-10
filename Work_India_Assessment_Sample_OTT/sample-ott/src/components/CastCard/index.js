import './index.css'

const CastCard=props=>{
    const {imageUrl,name,character}=props.castDetails

    return(
        <li className='cast-card'>
            <img src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} alt="cast" className='cast'/>
            <h1 className='cast-name'>{name}</h1>
            <p className='cast-character'>{character}</p>
        </li>
    )
}

export default CastCard