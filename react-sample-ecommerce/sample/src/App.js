import {Component} from 'react'
import ProductsContext from './context/ProductsContext'
import Buttons from './components/Buttons'
import Products from './components/Products'
import './App.css';

const buttonsList=[{id:men,category:Men},{id:women,category:Women},{id:kids,category:Kids}]

class App extends Component{
  state={activeTab:buttonsList[0].id,buttonsList:buttonsList}

    changeActiveTabId=id=>{
        this.setState({activeTab:id})
    }

  render(){
    return (
      <ProductsContext.Provider value={{buttonsList,activeTab,changeActiveTabId:this.changeActiveTabId}}>
        <div className="App">
        <h1>SELECT YOUR CHOICE</h1>
        <Buttons/>
        <div className='results-container'>
          <Products/>
        </div>
      </div>
      </ProductsContext.Provider>
    )
  }
  
}

export default App;
