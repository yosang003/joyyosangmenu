import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class MyFooter extends Component{
    render(){
        return(
            <div className='myfooter'>
                <div><NavLink exact activeClassName="selected" to='/'>菜单</NavLink></div>
                <div><NavLink activeClassName="selected"  to='/cart'>购物车</NavLink></div>
                <div><NavLink activeClassName="selected"  to='/my'>我的</NavLink></div>
            </div>
        )
    }
}

export default MyFooter
