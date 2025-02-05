import  { useState } from 'react'
import video1 from "./1.mp4"

const State = () => {
  let [state , setState] = useState(true)

  let demo = () => {
    let demo1 = document.getElementById("demo")
    console.log(demo);
    setState(!state)
    state === true? demo1.onplay() : demo1.pause()
  }
  return (
    <div>
      <video src={video1} height="300px" id='demo' onClick={demo}></video>
    </div>
  )
}

export default State
