import React from 'react'
import { Button, Checkbox, Form, Grid, Header} from 'semantic-ui-react'



const ContactUs = () => (
<Grid divided='vertically'>
  <Grid.Row  columns={2} textAlign={"left"}>
  <Grid.Column textAlign="center" verticalAlign="middle" width={7} >
    <Header>
      Hello World
    </Header>
  </Grid.Column>
    <Grid.Column verticalAlign="center" width={7} 
      style={{   
        border: "1px",
        backgroundColor: "grey",      
        marginTop: '20vh',
        marginBottom: '0',
        padding: "20px",
        borderRadius: "5px"
      }}>
       <Header>
    Contact Us!
  </Header>
      <Form>
        <Form.Group>
          <Form.Field width={7}>
            <label>Name</label>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field width={7}>
            <label>Email</label>
            <input placeholder='Email' />
          </Form.Field>
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Grid.Column>  
  </Grid.Row>
</Grid>
)

export default ContactUs

  

  