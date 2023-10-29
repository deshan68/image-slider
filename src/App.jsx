import "./App.css";
import { imageArray } from "../src/constant/index.js";
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={imageArray} />
    </div>
  );
}

export default App;
