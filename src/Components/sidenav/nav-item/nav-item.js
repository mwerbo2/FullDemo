import React, { Component } from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'

class NavItem extends Component{

render(props){
   return(
        <div>
            <Menu.Item as='a'>
                <Icon name={this.props.icon}/>
                {this.props.title}
            </Menu.Item>


        </div>
        )
    }
}

export default NavItem;