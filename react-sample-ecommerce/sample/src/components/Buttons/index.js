// import {Component} from 'react'
import ProductsContext from './context/ProductsContext'
import Button from '../Button'
import './index.css'

//  const buttonsList=[{id:men,category:Men},{id:women,category:Women},{id:kids,category:Kids}]

//  class Buttons extends Component{
//     state={activeTab:buttonsList[0].id}

//     changeActiveTabId=id=>{
//         this.setState({activeTab:id})
//     }

//     render(){
        
//         return(
//             <ul className='buttons-container'>
//                 {buttonsList.map(each=><Button btnDetails={each} key={each.id} changeActiveTabId={this.changeActiveTabId} isActive={activeTab===id}/>)}
//             </ul>
//         )
//     }
// }

const Buttons = ()=>(
    <ProductsContext.Consumer>
        {value=>{
           const {buttonsList,activeTab,changeActiveTabId}=value 

           return(
                        <ul className='buttons-container'>
                            {buttonsList.map(each=><Button btnDetails={each} key={each.id} changeActiveTabId={changeActiveTabId} isActive={activeTab===id}/>)}
                        </ul>
                    )
        }}
    </ProductsContext.Consumer>
)

export default Buttons