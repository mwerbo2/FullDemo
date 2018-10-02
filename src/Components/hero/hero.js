import React, { Component } from 'react';
import './hero.css';
import { Container, Button} from 'semantic-ui-react'

class Hero extends Component {
    render() {
      return (
        <Container fluid className="wrapper hero tint" >
            <div className="content">
                <h1>DevSmithOne</h1>
                <h3>Building your web and mobile products while training future web developer professionals</h3>

                <Button className="red button">Get in Touch</Button>

            
            </div>

        
      </Container>
      );
    }
  }
  
  export default Hero;
  