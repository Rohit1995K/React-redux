import Home from "../Components/Home";
import {connect} from 'react-redux';
import {addToCart, removeFromCart} from '../Services/Actions/Action';

const mapStateToProp = state => ({
    // data:state.cardItems
})

const mapDispatchToProp = dispatch => ({
    addToCardHandler:data => dispatch(addToCart(data)),
    removeFromCardHandler:data => dispatch(removeFromCart())
})


export default connect(mapStateToProp, mapDispatchToProp)(Home);