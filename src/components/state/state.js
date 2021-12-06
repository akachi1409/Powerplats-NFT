import React from "react";

import "./state.css"
import StateCard from "./stateCard";
class State extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    title:"15",
                    text:"Total in Collection"
                },
                {
                    title:"10K",
                    text:"Trees Planted"
                },
                {
                    title:"25M",
                    text:"Total Donated"
                },
                {
                    title:"22",
                    text:"Countries World Wide"
                },
                {
                    title:"5",
                    text:"Industry Awards"
                }
            ]
        }
    }
    render(){
        console.log(this.state.data);
        return(
            <div className="state_layout">
                {/* <p className="state_title">ADD STATS ABOUT OUR PROJECT HERE</p> */}
                <div className="state_cards">
                    {
                    this.state.data.map(element=>{
                        return(
                            <div
                            className="state_card">
                                <StateCard 
                                title={element.title}
                                text={element.text}/>
                            </div>
                            )
                    })
                }
                </div>
                <div className="state_bg">
                    
                </div>
            </div>
        )
    }
}
export default State;