import video from "../img/crocsShort.mp4";
const Home = () => {
  return (
    <div id="homeDiv">
      <div id="homeLeft">
        <div className="content">
          <h1>GREEN COMES IN EVERY COLOR</h1>
          <h3>Same Crocs.</h3>
          <h3>Half the carbon footprint by 2030</h3>
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
