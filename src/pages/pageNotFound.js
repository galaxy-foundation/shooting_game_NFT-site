import React from "react";
import BottomSection from "../components/home/bottom";
import Nav from "../components/layout/nav";
import pageNotFoundImage from "../assets/img/shooting/404.webp";

function PageNotFound(props) {
  return (
    <div>
      <div className="x-home-top">
        <Nav />
      </div>
      <div className="padding-top-4">
      <img src={pageNotFoundImage} width="100%" height="800px" alt="404" />
      </div>
      <BottomSection />
    </div>
  );
}

export default PageNotFound;
