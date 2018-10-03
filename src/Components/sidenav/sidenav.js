import React, { Component } from 'react';
import './sidenav.css';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import Hero from '../hero/hero';
import NavItem from './nav-item/nav-item'


class SideNav extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render(props) {
    const { visible } = this.state

    return (
      <Container fluid>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            className='sidebar'
            as={Menu}
            animation='overlay'
            icon='labeled'
            direction='right'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <NavItem
              icon='home'
              title="Home"
             />

            <NavItem
              icon='gamepad'
              title="Games"
             />

            <NavItem
              icon='camera'
              title="Channels"
             />
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic >         
              <Hero/>
                  <Icon size='big' className="align justify top-right" onClick={this.handleButtonClick}/>
            </Segment>

          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    )
  }
}


  
export default SideNav;