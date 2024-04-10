import {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchInputContext from '../../context/SearchInputContext'
import './index.css'

class Navbar extends Component{
    render(){
        return(
          <SearchInputContext.Consumer>
            {value=>{
              const {onSearch}=value

              const changeInput=event=>{
                onSearch(event.target.value)
              }

              return(
                <nav className="navbar">
                <h1 className='head'>MovieDB</h1>
                <div className="nav-options">
                  <Link to="/home"><button type="button" className='option'>Popular</button></Link>
                  <Link to="/topmovies"><button type="button" className='option'>Top Rated</button></Link>
                  <Link to="/upcoming"><button type="button" className='option'>Upcoming</button></Link>
                  <input type="search" className='search' placeholder='Movie Name' onChange={this.changeInput}/>
                  <button type="button" className='btn'>Search</button>
                </div>
              </nav>
              )
            }}
          </SearchInputContext.Consumer>
        )
    }
}
export default Navbar