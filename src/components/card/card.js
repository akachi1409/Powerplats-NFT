import React from "react";

import i1 from "./award.JPG"
import i2 from "./community.JPG"
import i3 from "./diamont.JPG"
import i4 from "./money.JPG"
import i5 from "./paintbrush.JPG"
import i6 from "./tickets.JPG"
import i7 from "./plant.JPG"

import "./card.css"
class Card extends React.Component {
    render() {
        return (
            <div className="card_layout">
                {this.props.svg == 1 &&
                    <img className="card_svg"src={i1}></img>
                }
                {this.props.svg == 2 &&
                    <img className="card_svg"src={i2}></img>
                }
                {this.props.svg == 3 &&
                    <img className="card_svg"src={i3}></img>
                }
                {this.props.svg == 4 &&
                    <img className="card_svg"src={i4}></img>
                }
                {this.props.svg == 5 &&
                    <img className="card_svg"src={i5}></img>
                }
                {this.props.svg == 6 &&
                    <img className="card_svg"src={i6}></img>
                }
                {this.props.svg == 7 &&
                    <img className="card_svg"src={i7}></img>
                }
                <h3 className="card_title">
                    {this.props.title}
                </h3>
                <p className="card_text">
                    {this.props.description}
                </p>
                <hr className="card_bar">

                </hr>
            </div>
        )
    }
}

export default Card;