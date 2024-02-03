import Proptypes from 'prop-types';

const Item =(props)=> {
    const {title,amount} = props

    return(
        <li> {title} <span> {amount}</span> </li>
    )
} 

Item.propTypes={
    title:Proptypes.string.isRequired,
    amount:Proptypes.number
}

export default Item