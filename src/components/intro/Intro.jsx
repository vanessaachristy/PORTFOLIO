import React, {useEffect, useRef} from 'react'
import {init} from 'ityped'
 
import "./intro.css"



export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Information Engineering and Media student"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="first">
                <div className="imgContainer">
                    <img src="assets/girl.png" alt=""/>
                </div>
            </div>
            <div className="second">
                <div className="second-wrapper">
                    <h2>Hey there!</h2>
                    <h1>Vanessa Christy here!</h1>
                    <h3>NTU Year 2 <span ref={textRef}> </span> </h3>
                    <h3>Based in Singapore</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
