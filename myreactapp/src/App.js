import React, { useReducer, useState } from "react";
import "./App.css";
// import Video from "./component/video";
// import Videos from "./data/data";
import VideosDB from "./data/data";
// import PlayButton from "./component/playButton";
import AddVideo from "./component/AddVideo";
import VideoList from "./component/VideoList";
import Counter from "./component/Counter";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
// import {Video, Thumb} from './component/video'

const App = () => {
  const [editableVideo, setEditableVideo] = useState(null);
  function videoReducer(Videos, action) {
    switch (action.type) {
      case "ADD":
        return [...Videos, { ...action.payload, id: Videos.length + 1 }];
      case "DELETE":
        return Videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = Videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...Videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return Videos;
    }
  }
  const [Videos, dispatch] = useReducer(videoReducer, VideosDB);
  // const [Videos, setVideos] = useState(VideosDB);

  // function addVideos(video) {
  //   dispatch({ type: "ADD", payload: video });
  //   // setVideos([
  //   //   ...Videos,
  //   //   {...video, id: Videos.length+1}
  //   // ]);
  // }
  // function deleteVideo(id) {
  //   dispatch({ type: "DELETE", payload: id });
  //   // setVideos(Videos.filter(video=>video.id!==id))
  //   // console.log(id)
  // }
  function editVideo(id) {
    setEditableVideo(Videos.find((v) => v.id === id));
    console.log(id);
  }
  // function updateVideo(video) {
  //   dispatch({ type: "UPDATE", payload: video });
  //   // const index = Videos.findIndex(v=>v.id===video.id);
  //   // const newVideos = [...Videos]
  //   // newVideos.splice(index,1,video)
  //   // setVideos(newVideos)
  //   // console.log(video)
  // }
  return (
    <div className="App" onClick={() => console.log("App")}>
      <VideosContext.Provider value={Videos}>
        <VideoDispatchContext.Provider value={dispatch}>

      <AddVideo
        // addVideos={addVideos}
        // dispatch={dispatch}
        // updateVideo={updateVideo}
        editableVideo={editableVideo}
      ></AddVideo>
      <VideoList
        // deleteVideo={deleteVideo}
        // dispatch={dispatch}   
        editVideo={editVideo}
        // Videos={Videos}
      ></VideoList>
      {/* <p>Videos</p> */}
      {/* <div>
        <button
          onClick={() => {
            setVideos([
              ...Videos,
              {
                key: Videos.length + 1,
                title: "demo",
                views: "675M",
                time: "2 month ago",
                channel: "tecktalk",
                verified: true,
              },
            ]);
          }}
        >Add video</button>
      </div> */}
      {/* <Video title="React js learning" views="100M" channel="techtalk" time='1 month ago' verified={true}></Video>
      <Video title="Node js learning" views="130M" channel="techtalk" time='2 month ago' verified={false}></Video>
      <Video title="Mern learning" views="110M" channel="techtalk" time='3 month ago' verified={false}></Video> */}
      {/* <Thumb></Thumb> */}
      {/* {Videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("playing")}
            onPause={() => console.log("paused")}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))} */}
      {/* <div style={{ clear: "both" }}>
        <PlayButton message="play-video" >play</PlayButton>
      <PlayButton message="pause-video" >pause</PlayButton>

        <PlayButton onSmash={() => console.log("playing")}>play</PlayButton>
        <PlayButton onSmash={() => alert("paused")}>pause</PlayButton>

        <PlayButton onPlay={() => console.log("playing")} onPause={() => console.log("paused")}>play</PlayButton>
      </div> */}

      <Counter></Counter>
      </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </div>
  );
};

export default App;
