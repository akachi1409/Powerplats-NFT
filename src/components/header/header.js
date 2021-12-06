import React from "react";

import Logo from '../../assets/logo.jpg'
import il from '../../assets/CenterPic.png'
import il2 from '../../assets/Pink Caladium.webp'

//import css
import './header.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
    Container,
    Navbar,
    Nav,
    Row,
    Col
} from 'react-bootstrap';


import './footer.css';

//import social icons
import {
    BsTwitter,
    BsDiscord,
    BsInstagram
} from 'react-icons/bs';
//import components
import YButton from "../basic/YButton";
function onMintClick() {
    document.getElementById("mint").scrollIntoView();
    // alert("Your dick is hard!");
}
function onTeamClick() {
    document.getElementById("team").scrollIntoView();
}
function onRoadClick() {
    document.getElementById("roadmap").scrollIntoView();
}
function onWhitelistClick() {
    document.getElementById("whitelist").scrollIntoView();
}

function onSocialsClick() {
    document.getElementById("socials").scrollIntoView();
}


function openSea() {
    window.open("https://opensea.io/");
}
class Header extends React.Component {
    onGallery=()=>{
    this.props.history.push('/some/path')
    }
    render() {
        return (
            <>

                <div className='header-control'>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand href="#home" style={{ paddingTop: 10 }}>
                                <img src={il} width={289} height={115.1} alt='logo' />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav style={{ borderRadius: 0, padding: "0 20px 0 20px" }}>
                                    <Nav.Link className="bruh" style={{ fontWeight: 900}}
                                        onClick={onMintClick} >MINT</Nav.Link>
                                    <Nav.Link className="bruh" style={{ fontWeight: 900}}
                                        onClick={onRoadClick}>ROADMAP</Nav.Link>
                                    <Nav.Link className="bruh" style={{ fontWeight: 900}}
                                        onClick={onTeamClick} >TEAM</Nav.Link>
                                    <Nav.Link className="bruh" style={{ fontWeight: 900}}
                                        onClick={openSea}>OPENSEA</Nav.Link>
                                    <Link className="bruh navbar-header-link" style={{ fontWeight: 900,color:"white",textDecoration:"none", borderRadius: 30 , marginRight:"5px"}}
                                        to="/gallery">GALLERY</Link>
                                    <Link className="bruh navbar-header-link" style={{ fontWeight: 900,color:"white",textDecoration:"none", borderRadius: 30, marginRight:"5px" }}
                                    to="/shop">SHOP</Link>
                                    <Link className="bruh navbar-header-link" style={{ fontWeight: 900,color:"white",textDecoration:"none", borderRadius: 30, marginRight:"5px" }}
                                    to="/whitepaper">WHITEPAPER</Link>
                                        <text style={{width: 20}}></text>
                                        <div>
                       <a style={{textDecoration: "none", color:"white", paddingRight: 5}}target="_blank" rel="noopener noreferrer"href="https://instagram.com/"> <BsInstagram size={32} /></a>
                       <a style={{textDecoration: "none", color:"white", paddingLeft: 5, paddingRight: 5}}target="_blank" rel="noopener noreferrer"href="https://twitter.com/"> <BsTwitter size={32} /></a>
                       <a style={{textDecoration: "none", color:"white", paddingLeft: 5}}target="_blank" rel="noopener noreferrer"href="https://discord.gg"> <BsDiscord size={32} />   </a>     
                    </div>
                                    {/* <text style={{ width: 20 }}></text>
                                    <Nav.Link><a style={{ backgroundColor: "#32CD32", padding: 10.5, margin: 0,borderRadius: 30,textDecoration: "none", color: "white"}} target="_blank" rel="noopener noreferrer" href="https://instagram.com/dickpixnft"> <BsInstagram size={32} /></a></Nav.Link>
                                    <Nav.Link><a style={{ backgroundColor: "#32CD32", padding: 10.5, margin: 0,borderRadius: 30,textDecoration: "none", color: "white"}} target="_blank" rel="noopener noreferrer" href="https://twitter.com/thedickpixnft"> <BsTwitter size={32} /></a></Nav.Link>
                                    <Nav.Link><a style={{ backgroundColor: "#32CD32", padding: 10.5, margin: 0,borderRadius: 30,textDecoration: "none", color: "white"}} target="_blank" rel="noopener noreferrer" href="https://discord.gg/SgJyg5Wx/"> <BsDiscord size={32} />   </a></Nav.Link> */}

                                    <text style={{ width: 0 }}></text>
                                    <div>
                                        {/* <a style={{ backgroundColor: "#32CD32", padding: 20, textDecoration: "none", color: "white", paddingRight: 10 }} target="_blank" rel="noopener noreferrer" href="https://instagram.com/dickpixnft"> <BsInstagram size={32} /></a>
                                        <a style={{ backgroundColor: "#32CD32", padding: 20, textDecoration: "none", color: "white", paddingLeft: 10, paddingRight: 10 }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/thedickpixnft"> <BsTwitter size={32} /></a>
                                        <a style={{ backgroundColor: "#32CD32", padding: 20, textDecoration: "none", color: "white", paddingLeft: 10 }} target="_blank" rel="noopener noreferrer" href="https://discord.gg/SgJyg5Wx/"> <BsDiscord size={32} />   </a> */}
                                    </div>
                                    {/* <a href="https://google.com/"><YButton text='OPENSEA' /></a>
                                    </Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className='header-content'>
                        {/* <h1><img className="thePicture" src={il} /></h1> */}
                        <Container>
                            <Row>
                                <Col md={6} xs={12} className='about-description' style={{textAlign: "center"}}>
                                    <header>
                                        <span style={{ color: "white", fontStyle: "normal" }}>The new generation of plants.<br /></span>
                                        {/* <span style={{ color: "white", fontStyle: "normal" }}>No watering required.<br /></span> */}
                                    </header>
                                    <p style={{color: "white"}}>
                                        No watering required.
                                    </p>
                                    <text className="xbutton" onClick={onMintClick}>MINT</text>

                                    {/* <div><YButton text='COMING SOON' /></div> */}
                                </Col>
                                <Col md={6} xs={12} className='image-control'>
                                    <img style={{ borderRadius: 0 }} src={il2} alt='about gif' />
                                </Col>
                            </Row>
                        </Container>

                        <div className='header-content-buttons-container'>
                            {/* <YButton text='DISCORD' /> &nbsp;
                        <YButton text='TWITTER' /> */}
                        </div>
                    </div>
                    <div></div>
                </div>
            </>
        );
    }
}

export default Header;