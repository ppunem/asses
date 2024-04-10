import { Component } from 'react'
import ProductsContext from './components/ProductsContext'
import './index.css'

class Products extends Component{
    componentDidMount(){
        this.getProducts()
    }
    
}