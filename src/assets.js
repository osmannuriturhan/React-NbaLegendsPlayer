import Images from "./img/nba-logo.png";
import "./App.css";

const assets = () => {
  return (
    <div className="img1">
      <img src={Images} alt="NBA Logo" />
      <h1>NBA Legends</h1>
    </div>
  );
};

export default assets;
