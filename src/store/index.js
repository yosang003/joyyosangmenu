import { combineReducers } from 'redux';
import todoCart from './cart/reducer.js';
import todoFoodList from './foodlist/reducer.js';

export default combineReducers({
    todoCart,
    todoFoodList
})
