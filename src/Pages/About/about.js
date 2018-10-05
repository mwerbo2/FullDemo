import React, { Component } from 'react';
import { Grid, Responsive, Button, Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import './about.css';
import hopes from './hopes.jpg'

class AboutMe extends Component {
    render(props) {
      return (
        <Container fluid className="about-wrapper">
          <h1>Welcome</h1>
          <h3>We're DevSmithOne, a web development studio that is simply amazing</h3>

          <Responsive className="box">
            <h1>Image</h1>
          </Responsive>
        
          <Segment className="about">
            <p>
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </Segment>
        
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column stretched>
                <Image src={hopes}/>
              </Grid.Column>
              <Grid.Column stretched>
                <Image src={hopes} />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid divided='vertically'>
            <Grid.Row columns={3}>
              <Grid.Column width={6} className="about">
                <Image src={hopes} />
              </Grid.Column>

              <Grid.Column width={10} className="about">
                <Segment>
                <p>
                  What is Lorem Ipsum?
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                
                </p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Container>
      );
    }
  }
  
  export default AboutMe;
  