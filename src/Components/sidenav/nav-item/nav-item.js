import React, { Component } from 'react';
import {  Icon, Menu } from 'semantic-ui-react'
import "./nav-item.css"
import { NavLink } from 'react-router-dom';


class NavItem extends Component{

render(props){
   return(
        <NavLink to={this.props.link} onClick={this.props.onHide}>
            <Menu.Item as='a' className='nav-item'>
                <Icon name={this.props.icon}/>
                 <h3 className='nav-item-title'>{this.props.title}</h3>
            </Menu.Item>


        </NavLink>
        )
    }
}

export default NavItem;