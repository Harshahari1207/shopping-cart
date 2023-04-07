import video from "../img/crocsShort.mp4";

import { Link } from "react-router-dom";
const Home = () => {
  console.log("Home");
  return (
    <div id="homeDiv">
      <div id="homeLeft">
        <div className="content">
          <h1>GREEN COMES IN EVERY COLOR</h1>

          <h3>Half the carbon footprint by 2030</h3>
          <Link to="/shop">
            <button type="button">Shop Now</button>
          </Link>
          <p>
            Copy rights of Crocs Video and Images are from Official{" "}
            <a href="https://www.crocs.in/">Crocs website</a> . And Logos from{" "}
            <a href="https://icons8.com/">icons8</a> Website
          </p>
        </div>
      </div>
      <div id="homeRight">
        <video
          src={video}
          width="100%"
          height="500"
          autoPlay={true}
          loop={true}
          muted={true}
        />
      </div>
    </div>
  );
};
export default Home;
