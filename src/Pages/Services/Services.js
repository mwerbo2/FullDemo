import React, { Component} from "react";
import "./Services.css";
import { Grid, Image, Rail, Segment } from 'semantic-ui-react'

class Services extends Component {

    render() {

        return(
            <Grid centered columns={3}>
    <Grid.Column>
      <Segment>
        

        <Rail dividing position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail dividing position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
        )
    };
}

export default Services;