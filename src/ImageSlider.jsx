import React, { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  function showNextImg() {
    setImageIndex((prev) => {
      if (prev == images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  function showPrevImg() {
    setImageIndex((prev) => {
      if (prev == 0) {
        return images.length - 1;
      }
      return prev - 1;
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndex((prev) => {
        if (prev == images.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [imageIndex]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((url) => (
          <img
            key={url}
            src={url}
            alt=""
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className="img-slider-btn"
        onClick={showPrevImg}
        style={{ left: "0" }}
      >
        {"<"}
      </button>
      <button
        className="img-slider-btn"
        onClick={showNextImg}
        style={{ right: "0" }}
      >
        {">"}
      </button>
      <div
        style={{
          position: "absolute",
          left: "50%",
          translate: "-50%",
          bottom: "1.5rem",
          display: "flex",
          columnGap: ".5rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index == imageIndex ? "⚪️" : "⚫️"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
