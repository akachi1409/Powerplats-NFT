import React from "react";

import Header from "../header/header";
import About from "../about/about";
import Utility from "../utility/utility";
import Meet from "../meet/meet";
import Mint from "../mint/mint";
import RoadMap from "../roadmap/roadmap";
import State from "../state/state";
import Team from "../team/team";
import Footer from "../footer/footer";
import Partner from "../partners/patner";

class Shop extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <About />
                <Utility className="utilitysec"/>
                <Meet />
                <Mint />
                <RoadMap />
                <State />
                <Team />
                <Footer />
                <Partner/>
            </div>
        )
    }
}

export default Shop