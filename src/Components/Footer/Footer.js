import React from "react.js";
import "Footer.css";

const Footer = () => (
    <footer>
        <div className="ui container-fluid footer black">
            <div className="ui container">
                <div className="ui equal width grid">
                    <div className="column left-column">
                        DevSmith
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="column mid-column" >
                        Our Location
            <p>
                            <a target="_blank" className='footer-link' href="">111 N. Street Ave. Chicago, IL 11111</a>
                            <br></br>
                            <a target="_blank" className='footer-link' href="">Phone Number: +1 (111) 111-1111</a>
                            <br></br>
                            <a target="_blank" className='footer-link' href="">Email: DevSmith@DevSmith.com</a>
                            <br></br>
                        </p>
                    </div>
                    <div className="column right-column">Quick Links
          <p id="code-text">
                            <a target="_blank">Home</a>
                            <a target="_blank">About</a>
                            <a target="_blank">Contact</a>

                        </p>

                    </div>
                </div>
            </div>
        </div>

    </footer>

)

export default Footer;