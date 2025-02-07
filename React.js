External.jsx
// import React from 'react'
import "../styles/external.css"

const External = () => {
  return (
    <div>
        <h1 id='demo'>
            hello-world
        </h1>
    </div>
  )
}

export default External
external.css
#demo{
    background-color: red;
    text-align: center;
    text-transform: uppercase;
    text-decoration: underline;
}

main.jsx
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import Cbc from './component/Cbc.jsx'
// import Fbc from './Component/Fbc.jsx'
// import Demo from './Component/Demo.jsx'
// import Parent from './props/parent.jsx'

// import Inline from './styles/Inline.jsx'
// import "../src/styles/globally.css"
// import Comp1 from './styles/Comp1.jsx'
// import External from './styles/External.jsx'
import { StrictMode } from 'react'
import Ref from './useRef/Ref.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <Inline/> */}
     {/*<Comp1/> */} ,
     {/* <External/> */}
     <Ref/>
  

  </StrictMode>
   
   
 
  
) 

Ref.jsx
// import React from 'react'

import { useRef } from "react"

const Ref = () => {
    let demo = useRef()
    console.log(demo);
    console.log(demo.current);
    demo.current.style.backgroundColor = "red"

  return (
    <div>
        <h1 ref={demo}>hello-world</h1>
    </div>
  )
}

export default Ref

// import React from 'react'
import "../styles/external.css"

const External = () => {
  return (
    <div>
        <h1 id='demo'>
            hello-world
        </h1>
    </div>
  )
}

export default External
