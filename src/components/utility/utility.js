import React, { useEffect, useState } from "react"

import "./utility.css"
import Card from "../card/card";
// import logo_image from "../../assets/header/logo.webp"
import { BsFileMinusFill, BsFilePlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
function Utility() {
    const [card1, setCard1] = useState({
        title: "Certificate of authenticity",
        svg: 1,
        description: "asfdf"
    })
    const [card2, setCard2] = useState({
        title: "Community",
        svg: 2,
        description: "asdasdfasdff"
    })
    const [card3, setCard3] = useState({
        title: "Raffles",
        svg: 3,
        description: "asfffdf"
    })
    const [card6, setCard6] = useState({
        title: "Win Rare Seeds & Art",
        svg: 6,
        description: "asasdffedf"
    })
    const [card4, setCard4] = useState({
        title: "Bonus Content",
        svg: 4,
        description: "asasdffdf"
    })
    const [card5, setCard5] = useState({
        title: "Special Offer Codes",
        svg: 5,
        description: "asdasdffef"
    })
    const [card7, setCard7] = useState({
        title: "Planting Trees",
        svg: 7,
        description: "asdasdffef"
    })
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("");
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintNum, setMintNum] = useState(0)
    const claimNFTs = (_amount) => {
        _amount = document.getElementById("inputBox").textContent;
        if (_amount <= 0) {
            return;
        }
        setFeedback("Minting your Official BooCrew NFT...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(blockchain.account, _amount)
            // ********
            // You can change the line above to
            // .whiteListMint(blockchain.account, _amount) if you want only whitelisted
            // users to be able to mint through your website!
            // And after you're done with whitelisted users buying from your website,
            // You can switch it back to .mint(blockchain.account, _amount).
            // ********
            .send({
                gasLimit: 285000 * _amount,
                to: "0x8815e06FC5b57Bd4d5590977a697582f19d2330e", // the address of your contract
                from: blockchain.account,
                value: blockchain.web3.utils.toWei((0.035 * _amount).toString(), "ether"),
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback(
                    "Your BooCrew NFT has been successfully minted!"
                );
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    const plus_num = () => {
        // const {mintNum} = this.state;
        setMintNum(mintNum + 1);
    }
    const minus_num = () => {
        // const {mintNum} = this.state;
        if (mintNum == 0) return;
        setMintNum(mintNum - 1)
    }

    return (
        <div className="utility_container">
            <div className="utility_section">
                <div className="utility_right_bar">
                    <div className="cards_layout2">
                        <Card title={card1.title} svg={card1.svg}
                            description={card1.description} />
                        <Card title={card2.title} svg={card2.svg}
                            description={card2.description} />
                        <Card title={card3.title} svg={card6.svg}
                            description={card3.description} />
                        <Card title={card4.title} svg={card3.svg}
                            description={card4.description} />
                        <Card title={card5.title} svg={card4.svg}
                            description={card5.description} />
                        <Card title={card6.title} svg={card5.svg}
                            description={card6.description} />
                        <Card title={card7.title} svg={card7.svg}
                            description={card7.description} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utility;