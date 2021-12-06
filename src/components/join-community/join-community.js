import React from "react";
import { Container } from "react-bootstrap";

//import Components
import YButton from "../basic/YButton";

//import CSS
import './join-community.css';
class JoinCommunity extends React.Component {
    render() {
        return (
            <div className='join-community-control' id="whitelist">
                <Container style={{textAlign: "center"}}>
                    <div style={{backgroundColor: "#FF9859", border: "10px solid black", padding:10, borderRadius: 20, margin: 10}}>
                        <h1><span>JOIN</span> OUR WHITELIST</h1>
                        <p style={{fontWeight: 900}}>Our whitelist only has a certain amount of spots that will give users the ability to mint earlier than everyone else! Don't miss out, it's free to join the whitelist! </p>
                    </div>
                    <a href="https://forms.gle/2kSmjoTAefDWWyMA6"><YButton text='JOIN WHITELIST' /></a>
                </Container>
            </div>
        );
    }
}

export default JoinCommunity;