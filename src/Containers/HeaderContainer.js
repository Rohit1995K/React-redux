import Header from "../Components/Header";
import {connect} from 'react-redux';
// import {addToCart, removeFromCart} from '../Services/Actions/Action';

const mapStateToProp = state => ({
    data:state.cardItems
})

const mapDispatchToProp = dispatch => ({

})


export default connect(mapStateToProp, mapDispatchToProp)(Header);