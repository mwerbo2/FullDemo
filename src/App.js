import React, { Component } from 'react';
import './App.css';
import {  Icon, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './Pages/Landing/landing';
import About from './Pages/About/about';
import NavItem from './Components/sidenav/nav-item/nav-item';
import Footer from './Components/Footer/Footer';
// import Calendar from './Components/calendar/calendar';
import Services from "./Pages/Services/Services";


import Calendar from './Components/calendar/calendar';
import Contact from './Pages/Contact/Contact';


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
            <Sidebar.Pusher dimmed={visible}>

                
                  <Route exact path="/" component={Landing}/>
                  {/* <Calendar/> */}
                  <Route path="/about" component={About}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/services" component={Services}/>
                  <Footer/>      
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Container>

          <Icon size='huge' className="align justify top-right" onClick={this.handleButtonClick}/>
                    
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
                link="/"
                onHide={this.handleSidebarHide}
              />
              <NavItem
                icon='comment'
                title="About"
                link="/about"
                onHide={this.handleSidebarHide}
              />

              <NavItem
                icon='handshake'
                title="Service"
                link="/services"
                onHide={this.handleSidebarHide}
              />
              <NavItem
                icon='address card'
                title="Contact"
                link="/contact"
                onHide={this.handleSidebarHide}

              />
            </Sidebar>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;