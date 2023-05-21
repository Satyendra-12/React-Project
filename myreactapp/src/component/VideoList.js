import Video from "./video";
import PlayButton from "./playButton";
import useVideos from "../hooks/Videos";
// import { useContext } from "react";
// import VideosContext from "../context/VideosContext";
// function VideoList({ Videos,deleteVideo,editVideo }) {
  // function VideoList({ Videos,dispatch,editVideo }) {
    // function VideoList({dispatch,editVideo }) {
      function VideoList({editVideo }) {
      // const Videos = useContext(VideosContext)
      const Videos = useVideos()
  return (
    <>
      {Videos.map((video) => (
        <Video
          id ={video.id}
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          // deleteVideo={deleteVideo}
          // dispatch={dispatch}
          editVideo={editVideo}
          
        >
          <PlayButton
            onPlay={() => console.log("playing")}
            onPause={() => console.log("paused")}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}
export default VideoList;
