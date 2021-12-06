import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/team/dicklogo.png';
import YButton from "../basic/YButton";

//import CSS
import './founderthing.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control' id="team">
                <Container>
                    <Row>
                        <Col md={6} xs={12} className='about-description' style={{ textAlign: "center" }}>
                            <header style={{ textAlign: "center'", marginBottom: 0}}>
                                <span>OUR</span> FOUNDER<br />

                            </header>
                            <a href="https://instagram.com/jenfassino"style={{textDecoration: "none", color: "white", fontWeight: "bold", fontStyle: "italic",fontSize: 30, marginTop: 0, paddingTop: 0}}>@jenfassino</a>
                            Dick Pix was conceived and developed by Jen Fassino, a comedy podcaster at Jen AF and hairstylist 
                            with an extensive resume in the hair industry. Now, she's apparently dubbed in her NFT community as the 
                            "Queen of Dicks."

                            {/* <div><YButton text='COMING SOON' /></div> */}
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{ border: "solid black 10px", borderRadius: 20 }} src={AboutGif} alt='about gif' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;