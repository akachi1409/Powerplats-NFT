import React from "react";
import { Container } from "react-bootstrap";

//import CSS
import './footer.css';

//import social icons
import { BsTwitter,
        BsDiscord,
        BsInstagram } from 'react-icons/bs';
class Footer extends React.Component {
    render() {
        return (
            <div className='footer-control' id="socials">
                <Container className='footer'>
                    <p className="hidden">&copy;2021 &nbsp; PowerPlants</p>
                    <div>
                       {/* <a style={{textDecoration: "none", color:"white"}}target="_blank" rel="noopener noreferrer"href="https://instagram.com/"> <BsInstagram size={32} /></a>
                       <a style={{textDecoration: "none", color:"white"}}target="_blank" rel="noopener noreferrer"href="https://twitter.com/"> <BsTwitter size={32} /></a>
                       <a style={{textDecoration: "none", color:"white"}}target="_blank" rel="noopener noreferrer"href="https://discord.com/"> <BsDiscord size={32} />   </a>      */}
                       <p style={{fontSize: 15}}><a target="_blank" rel="noopener noreferrer" href="https://metaversesolutions.ai/" style={{textDecoration: "none", color:"white", textAlign: "right"}}>Website by Metaverse Solutions, LLC</a></p>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Footer;