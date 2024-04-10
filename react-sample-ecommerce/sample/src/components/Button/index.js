import './index.css'

const Button=props=>{
    const {btnDetails,changeActiveTab,isActive}=props
    const {id,category}=btnDetails

    onClickButton=()=>{
        changeActiveTab(id)
    }

    const active=isActive?'active':''

    return(
        <button type="button" onClick={onClickButton} className={`btn ${active}`}>{category}</button>
    )
}

export default Button