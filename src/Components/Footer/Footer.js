import React, { Component } from "react";
import "./Footer.css";
import { Grid, Responsive, Image, Segment, Container } from 'semantic-ui-react'


class Footer extends Component {
    render() {
        return (
            <Container fluid className="footer-wrapper">
                <Grid stackable centered divided="vertically">
                    <Grid.Row columns={5}>
                        <Grid.Column only='computer tablet' width={4} className="small-about section">
                            <h3> DevSmith </h3>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                        </Grid.Column>
                        <Grid.Column width={3} className="location section">
                            <h3> Our Location </h3>
                            <div>
                                <p>111 N. Street Ave. Chicago, IL 11111</p>
                                <br></br>
                                <p>Phone Number: +1 (111) 111-1111</p>
                                <br></br>
                                <p>Email: DevSmith@DevSmith.com</p>
                                <br></br>
                            </div>
                        </Grid.Column>
                        <Grid.Column only='computer tablet' width={3} className="quick-links section">
                            <h3> Quick Links </h3>
                            <div>
                                <a className="small-link" target="_blank"> > Home</a>
                                <br></br>
                                <br></br>
                                <a className="small-link" target="_blank"> > About</a>
                                <br></br>
                                <br></br>
                                <a className="small-link" target="_blank"> > Contact</a>
                                <br></br>
                                <br></br>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default Footer;