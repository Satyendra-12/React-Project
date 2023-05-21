import { useState } from 'react';
import './playButton.css' 


// function PlayButton({message,children,onSmash}){
    // function PlayButton({children,onSmash}){

    function PlayButton({message,children,onPlay, onPause}){

    // let playing = false;
    let [playing, setplaying] = useState(false);
    function handleClick(){
        // console.log(message);
        // onSmash();
        if(playing) onPause();
        else onPlay();
    // playing = !playing;
    setplaying(!playing);
    }
    return(
        // <button onClick={handleClick}>{children}</button>
        <button onClick={handleClick}>{children} {playing? "⏸️":"▶️"}</button>
    )
}

export default PlayButton;

