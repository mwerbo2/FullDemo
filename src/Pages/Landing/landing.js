import React, { Component } from 'react';
import Hero from '../../Components/hero/hero';
import { Container } from 'semantic-ui-react'


class Landing extends Component {
    render() {
      return (
        <Container fluid className="wrapper tint">
          <Hero/>


        </Container>
      );
    }
  }
  
  export default Landing;
  