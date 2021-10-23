import React from "react";
import ImageGallery from "react-image-gallery";

import frame1 from "../../assets/img/shooting/frame1.jpg";
import frame2 from "../../assets/img/shooting/frame2.jpg";
import frame3 from "../../assets/img/shooting/frame3.jpg";
import frame4 from "../../assets/img/shooting/frame4.jpg";
import frame5 from "../../assets/img/shooting/frame5.jpg";

function CharactSlide() {
  const images = [
    {
      original: frame1,
      thumbnail: frame1,
    },
    {
      original: frame2,
      thumbnail: frame2,
    },
    {
      original: frame3,
      thumbnail: frame3,
    },
    {
      original: frame4,
      thumbnail: frame4,
    },
    {
      original: frame5,
      thumbnail: frame5,
    },
  ];

  return (
    <div>
      <div className="x-home-step-video step1">
        <div className="x-home1-top-img">
          <h1>Characters</h1>
          <ImageGallery
            infinite={true}
            autoPlay={true}
            showPlayButton={true}
            useTranslate3D={true}
            showThumbnails={true}
            thumbnailPosition="bottom"
            items={images}
          />
        </div>
      </div>
    </div>
  );
}

export default CharactSlide;
