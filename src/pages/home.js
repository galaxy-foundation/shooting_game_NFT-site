import React from "react";
import Nav from "../components/layout/nav";
// import topImg from '../assets/img/homeTopImg.png';
// import About from '../components/home/about';
// import PetToken from '../components/home/petToken';
import BottomSection from "../components/home/bottom";
import CharactSlide from "../components/home/character-slide";
import Adventure from "../components/home/adventure";
import OpenWar from "../components/home/openWar";
import { useHistory } from "react-router-dom";

import splitImg from "../assets/img/shooting/split_symbol.png";
// import {Grid} from '@material-ui/core';
// import { Link } from "react-router-dom";

function Home() {
    const history = useHistory();
    const goto_signup = () => {
        alert("sefsef");
        history.push(`/signup`);
    };
    return (
        <div>
            <div className="x-home-top">
                <Nav />
                <div className="x-home-top-video" style={{ zIndex: "-1" }}>
                    <div className="x-home-top-img">
                        <div className="home-card">
                            {/* <div className="home-title">
                                ICICB SHOOTING GAME
                            </div>
                            <div>
                                <button
                                    onClick={goto_signup}
                                    className="x-signupBtn"
                                >
                                    SIGN UP
                                </button>
                                <button className="x-PlayNowBtn">
                                    PLAY NOW
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <OpenWar />
                <CharactSlide />
                <Adventure />

                {/* <GameIntro /> */}
            </div>
            <div>
                {/* <About /> */}
                {/* <PetToken /> */}
                <BottomSection />
            </div>
        </div>
    );
}

export default Home;
