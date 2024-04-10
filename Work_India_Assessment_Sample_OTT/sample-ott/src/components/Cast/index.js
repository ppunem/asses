import { useParams } from 'react-router-dom';
import React from 'react'
import CastCard from '../CastCard'
import './index.css'

const api_key="94c7d3fda98d10640821c3dc2a62787c"

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class Cast extends React.Component{
    state={cast:[]}

    componentDidMount(){
        this.getCastDetails()
    }
    
    getCastDetails=async()=>{
        const {match}=this.props
        const {params}=match
        const {id}=params
        const url=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`
        const options={
            method:'GET'
        }
        

        const response=await fetch(url,options)
        if (response.ok===true){
            const data=await response.json()
            const formattedData=data.cast.map(each=>({
                id:each.cast_id,
                imageUrl:each.profile_path,
                name:each.name,
                character:each.character
            }))
            this.setState({cast:formattedData})
        }
    }

    render(){
        const {cast}=this.state

        return(
            <div className="con">
              <h1 className='cast-head'>Cast</h1>
              <ul className='cast-container'>
                {cast.map(each=><CastCard castDetails={each} key={each.id}/>)}
            </ul>
            </div>
            
        )
    }
}

export default withRouter(Cast)