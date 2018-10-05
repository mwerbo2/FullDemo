import React, { Component } from 'react';
import './App.css';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

import Landing from './Pages/Landing/landing';
import About from './Pages/About/about';



import NavItem from './Components/sidenav/nav-item/nav-item';
import Footer from './Components/Footer/Footer';
// import Calendar from './Components/calendar/calendar';
import Services from "./Pages/Services/Services";


class App extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render(props) {
    const { visible } = this.state

    return (
      <BrowserRouter> 
      <div className="App">
        <Container fluid >

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

                  <Route exact path="/" component={Landing}/>
                  {/* <Calendar/> */}
                  <Route path="/about" component={About}/>
                  <Route path="/services" component={Services}/>
                  <Icon size='big' className="align justify top-right" onClick={this.handleButtonClick}/>
                  <Footer/>      

              </Sidebar.Pusher>
            </Sidebar.Pushable>

          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
