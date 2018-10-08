import React, { Component } from 'react';
import { Grid, Responsive, Image, Segment, Container, Icon } from 'semantic-ui-react'
import './about.css';
import hopes from './hopes.jpg'
import office from './office.jpg'
import office2 from './office2.jpg'
import office3 from './office3.jpg'

import team from './team.jpg'


class AboutMe extends Component { 
    render(props) {
      return (
        <Container fluid className="about-wrapper">
          <h1>Welcome</h1>
          <h3>We're DevSmithOne, a web development studio that is simply amazing</h3>

          <Responsive className="box">
            <Image id='about-hero' src={team}></Image>
          </Responsive>
        
          <Segment className="about">
            <h4>
              Hey there! Our names are Jeff, Mike, and Ken. 
              <br></br>
              Three growing and promising web developers passionate in building creative websites and applications.
              <br></br>
              Our skillset specializes in making Fullstack web applications.  
              <br></br>
            </h4>
          </Segment>
        
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column stretched>
                {/* <Image className='about-pic'src={office}/> */}
                <div className='tint-green'></div>
                <h1 className='about-title'>Our Process</h1>

              </Grid.Column>
              <Grid.Column stretched>
                {/* <Image src={office2} /> */}
                <div className='tint-yellow'></div>
                <h1 className='about-title'>Our Merit</h1>

              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid divided='vertically'>
            <Grid.Row>
              <Grid.Column width={6} className="about">
              <Segment>
              <h3>Phone
                <h4>+1 (111) 111-1111</h4>
              </h3>

              <h3>Email
                <h4>DevSmith@DevSmithOne.com</h4>
              </h3>

                <h3>Address
                  <h4>111 N. Street Ave. Chicago, IL 11111</h4>
                </h3>
                  
                <h3>Connect</h3>
                <Icon size='huge' name='facebook square' />
                <Icon size='huge' name='github square' />
                <Icon size='huge' name='twitter square' />
                <Icon size='huge' name='linkedin square' />


                </Segment>
              </Grid.Column>
              {/* <Grid.Column width={1}>

              </Grid.Column> */}
              <Grid.Column width={10} className="about">
                <Image src={office3} />

              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Container>
      );
    }
  }
  
  export default AboutMe;
  