import { Component } from "react";
import MovieCard from '../MovieCard'
import './index.css'

const api_key="94c7d3fda98d10640821c3dc2a62787c"

class TopRatedMovies extends Component{
    state={allMovies:[]}

    componentDidMount(){
        this.getTopRatedMovies()
    }

    getTopRatedMovies=async()=>{
        const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
        const options = {
            method: 'GET'
          }

        const response=await fetch(url,options)
        if (response.ok===true){
            const data=await response.json()
            const formattedMovies=data.results.map(movie=>({
                id:movie.id,
                imageUrl:movie.backdrop_path,
                title:movie.title,
                rating:Math.round(movie.vote_average,1)
            }))
            this.setState({allMovies:formattedMovies})
        }
    }

    renderMovies=()=>{
        const {allMovies}=this.state

        return(
            <ul className="all-movies-container">{allMovies.map(movie=><MovieCard movieDetails={movie} key={movie.id}/>)}</ul> 
        )
    }

    render(){
        return(
            <div className="top-bg">{this.renderMovies()}</div>
        )
    }
}

export default TopRatedMovies