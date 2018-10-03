import React, { Component } from 'react';
import Hero from '../Components/hero/hero';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'


class Landing extends Component {
    render() {
      return (
        <Container fluid >
            <Hero/>

        </Container>
      );
    }
  }
  
  export default Landing;
  