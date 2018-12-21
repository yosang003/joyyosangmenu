import React, { Component } from 'react';
import { connect } from 'react-redux';
import Food from '../Food';
import './index.css';
import {addToCart, delFromCart} from "../../store/cart/actionCreater";

class FoodList extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        // 通过调用 connect() 注入:
        const { foodlist, addToCart, cartlist } = this.props;
        return (
            <div>
                <ul className='food-list'>
                    {
                        foodlist.map(food => (
                            <li key={food.id} className="food-list-item">
                                <Food {...food} addToCart={()=>{addToCart(food)}} iscart={false}/>
                            </li>
                        ))
                    }
                </ul>
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
            </div>
        )
    }
}

// FoodList.prototype = {
//
// }

function getFoods(state) {
    return {
        foodlist : state.todoFoodList.foodlist,
        cartlist : state.todoCart.cartlist? state.todoCart.cartlist : []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart : food => dispatch(addToCart(food))
    }
}

//connect()
//此方法可以从 Redux store 接收到全局的 state，然后返回组件中需要的 props。
// 最简单的情况下，可以返回一个初始的 state （例如，返回认证方法），但最好先将其进行转化
export default connect(getFoods,mapDispatchToProps)(FoodList);
