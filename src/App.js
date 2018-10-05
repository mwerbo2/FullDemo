import React, { Component } from 'react';
import './App.css';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

import Landing from './Pages/Landing/landing';
import About from './Pages/About/about';



import NavItem from './Components/sidenav/nav-item/nav-item';
import Footer from './Components/Footer/Footer';
<<<<<<< HEAD
import Calendar from './Components/calendar/calendar';
import ContactUs from './Pages/Contact/Contact';
=======
// import Calendar from './Components/calendar/calendar';
>>>>>>> e72d93822f4cd8fa8f8dc1e16c841a8825aba235


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

<<<<<<< HEAD
                  <Route path="/" component={Landing}/>
                  {/* <Route path="/contact" component={ContactUs}/> */}
                  <Calendar/>
                  <ContactUs />
=======
                  <Route exact path="/" component={Landing}/>
                  {/* <Calendar/> */}
                  <Route path="/about" component={About}/>
>>>>>>> e72d93822f4cd8fa8f8dc1e16c841a8825aba235

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
