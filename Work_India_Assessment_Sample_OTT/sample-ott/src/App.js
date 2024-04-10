import {Component} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TopRatedMovies from './components/TopRatedMovies';
import UpComingMovies from './components/UpComingMovies';
import MovieDetail from './components/MovieDetail';
//import NotFound from './components/NotFound';
import SearchInputContext from './context/SearchInputContext'
import './App.css';

class App extends Component{
  state={searchInput:''}

  onSearch=input=>{
    this.setState({searchInput:input})
  }

  render(){
    const {searchInput}=this.state

    return (
      <SearchInputContext.Provider value={{searchInput,onSearch:this.onSearch}}>
        <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/topmovies" element={<TopRatedMovies/>}/>
            <Route exact path="/upcoming" element={<UpComingMovies/>}/>
            <Route exact path="/movie/:id" element={<MovieDetail/>}/>
            {/* <Route element={<Home/>}/> */}
            {/* <Route path="*" component={<NotFound/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
      </SearchInputContext.Provider>
      
    );
  }
  
}

export default App;
