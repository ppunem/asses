import { useParams } from 'react-router-dom';
import React from 'react'
import strftime from 'strftime'
import Cast from '../Cast'
import './index.css'

const api_key="94c7d3fda98d10640821c3dc2a62787c"

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

 class MovieDetail extends React.Component{
    state={movieData:{}}

    componentDidMount(){
        this.getMovieDetails()
    }

    getMovieDetails=async()=>{
        //console.log(this.props)
        const {match}=this.props
        //console.log(match)
        //console.log(params)
        const {params}=match
        const {id}=params
        //console.log(id)    

        const url=`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
        const options={
            method:'GET'
        }
        //const {movieData}=this.state

        const response=await fetch(url,options)
        if (response.ok===true){
            const data=await response.json()
            //console.log(data.genres)
            // let arr=[]
            
            const formattedData={
                id:data.id,
                backdropUrl:data.backdrop_path,
                posterUrl:data.poster_url,
                title:data.title,
                rating:data.vote_average,
                duration:data.runtime,
                genre:data.genres.map(each=>each.name),
                releaseDate:data.release_date,
                overview:data.overview
            }
            this.setState({movieData:formattedData})
        }
        //console.log(movieData.genre)
        
    }

    render(){
        const {movieData}=this.state
        const {backdropUrl,posterUrl,title,rating,genre,duration,releaseDate,overview}=movieData
        
        const date=new Date(releaseDate)
        const divStyle = {
            backgroundImage: `url(${backdropUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '80%',
            height: '30%',
            margin:'35px',
            borderRadius:'5px',
            paddingTop:'5px',
            paddingLeft:'5px',
            paddingBottom:'40px',
            display:'flex',
            flexDirection:'column'
          };

         return(
            <div className="movie-bg">
                <div style={divStyle}>
                    <div className='top-sec'>
                        <img src={`https://image.tmdb.org/t/p/w500${posterUrl}`} alt="poster" className='poster'/>
                        <div className='texts'>
                            <h1 className='title'>{title}</h1>
                            <p className='rating'>{`Rating ${rating}`}</p>
                            <div className='duration-genre-cont'>
                                <p className='duration'>{duration}</p>
                                <p className='genre'>{(genre)}</p>
                            </div>
                            <p className='release'>{`Release Date: ${strftime("%a %b %d %Y",date)}`}</p>
                        </div>
                    </div>
                    <div className='bot-sec'>
                        <h1 className='overview-head'>Overview</h1>
                        <p className='overview'>{overview}</p>
                    </div>
                </div>
                <Cast/>  
            </div>
         )
    }
}

export default withRouter(MovieDetail);