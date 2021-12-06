import React from "react";

import "./stateCard.css"
class Statestate_card extends React.Component{
    render(){
        return(
            <div className="state_card_layout">
                <p className="state_card_title">{this.props.title}</p>
                <p className="state_card_text">
                    <span className="state_card_span">{this.props.text}</span>
                </p>
                <hr className="state_card_bar">

                </hr>
            </div>
        )
    }
}
export default Statestate_card