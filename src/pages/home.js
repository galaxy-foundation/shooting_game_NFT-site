import React from "react";
import Nav from "../components/layout/nav";
// import topImg from '../assets/img/homeTopImg.png';
// import About from '../components/home/about';
// import PetToken from '../components/home/petToken';
import BottomSection from '../components/home/bottom';
import CharactSlide from "../components/home/character-slide";
import GameIntro from "../components/home/gameintro";
import defiVideo from "../assets/video/video.mp4";
import splitImg from "../assets/img/shooting/split_symbol.png";
import game_screen from "../assets/img/shooting/game_screen.png"
// import {Grid} from '@material-ui/core';
// import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="x-home-top">
        <Nav />
        <div className="x-home-top-video" style={{ zIndex: "-1" }}>
          <video autoPlay loop muted width="100%" height="90%">
            <source src={defiVideo} type="video/mp4" />
          </video>
          <div className="x-home-top-img">
            <div className="home-card">
              <div className="home-title">Let"'"s save Our World</div>
              <div className="home-title-s">
                We must save our world <br />
                with our power
              </div>
              <button className="x-greenImgBtn">Play (soon)</button>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "-3%",
          }}
        >
          <img src={splitImg} alt="NoImg" style={{ width: "100%" }} />
        </div>
        <CharactSlide />
        <GameIntro />
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
