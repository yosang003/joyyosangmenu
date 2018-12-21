import React, { Component } from 'react';
import { connect } from 'react-redux';
import Food from "../Food";
import {delFromCart} from "../../store/cart/actionCreater";

class Cart extends Component {
    render(){
        const { cartlist, delFromCart } = this.props;
        return(
            <div className='cart'>
                {
                    cartlist.length ? <ul className='cart-list'>
                        {
                            cartlist.map(food => (
                                <li key={food.id} className="food-list-item">
                                    <Food {...food} iscart={true}  delFromCart={()=>{delFromCart(food.id)}} />
                                </li>
                            ))
                        }
                    </ul> : '购物车为空哦'
                }
            </div>
        )
    }
}

function getCartList(state, props) {
    return {
        cartlist : state.todoCart.cartlist?state.todoCart.cartlist:[]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        delFromCart : id => dispatch(delFromCart(id))
    }
}

export default connect(getCartList, mapDispatchToProps)(Cart)
