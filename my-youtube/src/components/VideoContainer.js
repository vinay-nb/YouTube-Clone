import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/constanst";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCards key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );

  
};

export default VideoContainer;
