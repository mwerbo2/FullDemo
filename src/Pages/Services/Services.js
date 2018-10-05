import React, { Component} from "react";
import "./Services.css";
import { Grid, Image, Rail, Segment, Container, Responsive } from 'semantic-ui-react'

class Services extends Component {

    render() {

        return(
          <Container fluid className="services-wrapper">
          <Grid centered columns={2}>
          <Grid.Column>
            <p> Image </p>
          </Grid.Column>
      
          <Grid.Row centered columns={4}>
            <Grid.Column>
              <Segment>
SERVICES 
</Segment>
<Segment>
Development 
</Segment>
Mobile applications

UX Design

Business Solutions

Quality engineering

Managed services
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
          </Grid.Row>
      
          <Grid.Row centered columns={4}>
            <Grid.Column>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
        )
    };
}

export default Services;