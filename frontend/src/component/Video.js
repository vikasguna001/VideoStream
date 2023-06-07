import React, { useEffect, useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import axios from "axios";
import { useParams } from "react-router-dom";
function Video() {
  const Id = useParams();
  const [VideoUrl, setVideoUrl] = useState([]);
  const GetVideo = () => {
    axios.get(`http://localhost:5000/Video_GetData?Id=${Id.id}`).then((res) => {
      setVideoUrl(res.data.data);
    });
  };

  useEffect(() => {
    GetVideo();
  }, []);
  return (
    <>
      {VideoUrl.map((item, i) => {
        return (
          <>
            <ReactHlsPlayer
              src={item.Video_Url}
              autoPlay={false}
              controls={true}
              width="100%"
              height="900px"
              key={i}
            />
          </>
        );
      })}
    </>
  );
}
export default Video;
