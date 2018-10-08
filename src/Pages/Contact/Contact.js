import React from 'react'
import { Button, Checkbox, Form, Grid, Header, Container} from 'semantic-ui-react'



const ContactUs = () => (
<Grid stackable columns={2} divided='vertically'>
  <Grid.Row  columns={2} textAlign={"left"}
    style={{
      marginBottom: "20vh"
    }}>
    <Grid.Column textAlign="center" verticalAlign="middle" width={7} 
      style={{       
        marginTop: '30vh',
        borderRadius: "5px"
      }}>
      <Header as="h1">
        Start a Project Today
      </Header>
      <Header as="h2">
        Send a message or give us a call for a free consult.
      </Header>
      <Container
        style={{   
          fontSize:"22px"
        }}>
        <p>Chicago, Il <br/>
        +1 630-634-5176<br/>
        </p>
      </Container>
    </Grid.Column>
    <Grid.Column textAlign="left" verticalAlign="left" width={7} 
      style={{        
        marginTop: '30vh'
      }}>
      <Header>
        Contact Us!
      </Header>
      <Form>
        <Form.Group>
          <Form.Field width={8}>
            <label>Name</label>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field width={8}>
            <label>Email</label>
            <input placeholder='Email' />
          </Form.Field>
        </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
            <Button type='submit'>Submit</Button>
      </Form>
    </Grid.Column>  
  </Grid.Row>
</Grid>
)

export default ContactUs

  

  