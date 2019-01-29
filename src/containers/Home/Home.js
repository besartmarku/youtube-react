import React from "react";
import VideoPreview from "../../components/VideoPreview/VideoPreview";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <VideoPreview />
      </div>
    );
  }
}

export default Home;
