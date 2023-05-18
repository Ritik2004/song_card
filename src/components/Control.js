import React from 'react'
import {FaFastForward,FaFastBackward,FaPause, FaPlay} from 'react-icons/fa'

const Control = (props) => {
  return (
    <div className='control'>
      <button className='control_skipBtn' onClick={()=>props.skipSong(false)}>
          <FaFastBackward/>
      </button>
      <button className='control_playBtn' onClick={()=>props.setIsPlaying(!props.isPlaying)}>
         {
          props.isPlaying ? <FaPause/> : <FaPlay/>
         }
      </button>
      <button className='control_skipBtn' onClick={()=>props.skipSong()}>
           <FaFastForward/>
      </button>
    </div>
  )
}
export default Control
