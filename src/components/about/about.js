import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/legif.gif';
import YButton from "../basic/YButton";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control' style={{ background: "#141416" }}>
                <Container style={{ border: "solid #7E7E7F 1px", padding: 20 }}>
                    <Row>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{ border: "solid black 2px", borderRadius: 0 }} src={AboutGif} alt='about gif' />
                        </Col>
                        <Col md={6} xs={12} className='about-description'>
                            <header style={{ color: "white", fontStyle: "normal" }}>
                                Utility<br />
                            </header>
                            <p style={{ color: "white" }}>
                                <text style={{ fontSize: 30 }}>Donating 10% from the initial release, 2% from secondary sales.</text> <br /><br />

                                <text style={{ color: "#7E7E7F" }}>
                                    We will be making contributions towards DAOs (decentralized autonomous organizations) to benefit renewable energy (such as solar, wind, etc), carbon offsets, and support ETH 2.0 Proof of Stake.
                                </text>
                            </p>

                            {/* <div><YButton text='COMING SOON' /></div> */}
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;