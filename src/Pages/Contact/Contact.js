import React from 'react'
import { Button, Checkbox, Form, Grid} from 'semantic-ui-react'



const ContactUs = () => (
<Grid divided='vertically'>
  <Grid.Row columns={2} textAlign={"left"}>
    <Grid.Column>
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
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Grid.Column>
    <Grid.Column></Grid.Column>
  </Grid.Row>
</Grid>
)

export default ContactUs

  

  