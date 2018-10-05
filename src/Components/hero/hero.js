import React, { Component } from 'react';
import './hero.css';
import { Button} from 'semantic-ui-react'

class Hero extends Component {
    render() {
      return (
      <div className="content">
          <h1>DevSmithOne</h1>
          <h3>Building your web and mobile products while training future web developer professionals</h3>

          <Button className="red button">Get in Touch</Button>
      </div>

        
      );
    }
  }
  
  export default Hero;
  