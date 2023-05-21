// import { useContext } from "react";
// import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideoDispatch from "../hooks/VideoDispatch";
// function Video({ title, id, channel, views, time, verified, children, deleteVideo, editVideo }) {
  // function Video({ title, id, channel, views, time, verified, children, dispatch, editVideo }) {
    function Video({ title, id, channel, views, time, verified, children, editVideo }) {
      // const dispatch = useContext(VideoDispatchContext)
      const dispatch = useVideoDispatch()
  // function Video(props) {
  // let verified = true;
  // let channelJSX;
  // if(verified){
  //   channelJSX = <div className="channel">{channel}✅</div>
  // }
  // else{
  //   channelJSX = <div className="channel">{channel}</div>
  // }
  return (
    <>
      <div className="container">
        <button className="close" onClick={()=> dispatch({type:'DELETE',payload:id})}>X</button>
        <button className="edit" onClick={()=> editVideo(id)}>edit</button>
        <div className="pic">
        <img src={`https://picsum.photos/id/${id}/320/160`} alt="Katherine Johnson" />

        </div>
        <div className="title">{title}</div>
        {/* <div className="channel">{channel}✅</div> */}
        {/* {channelJSX} */}

        {/* {verified ? <div className="channel">{channel}✅</div> 
        : <div className="channel">{channel}</div>} */}

        <div className="channel">
          {channel} {verified ? "✅" : null}
        </div>
        {/* <div className="channel">{channel} {verified && "✅"}</div> */}
        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
        <div>{children}</div>
        {/* <div>{props.title}</div> */}
      </div>
    </>
  );
}

// function Thumb(){
//     return(
//         <>
//         <div>Thumb</div>
//         </>
//     )
// }
export default Video;
// export {Video,Thumb};
