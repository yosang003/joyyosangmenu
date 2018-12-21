import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, icon} from 'antd';
import './index.css'

class Food extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        const { food, addToCart, iscart, delFromCart } = this.props;

        return (
            <div className='food'>
                <img className='food-img' src={food.img} />
                <div className='food-message'>
                    <div className='food-name'>{food.name}</div>
                    <p className='food-info'>
                        <span className='food-description'>{food.description}</span>
                        <span className='food-author'>{food.maker}</span>
                    </p>
                    <div className='food-times'>
                        已制作5次
                        {
                            iscart ? <Button className="food-del" type="primary" onClick={delFromCart}>删除</Button> : <Button className="food-add" type="primary" shape="circle" icon="plus" onClick={addToCart}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

// Food.prototype = {
//
// }

function getFood(state,props) {
    return {
        food:state.todoFoodList.foodlist.find((item) => {
            return item.id === props.id
        })
    }
}



export default connect(getFood)(Food);
// export default Food
