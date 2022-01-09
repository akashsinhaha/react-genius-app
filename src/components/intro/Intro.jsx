import "./intro.scss";
import { init } from 'ityped';
import {KeyboardArrowDownRounded} from "@material-ui/icons"
import { useEffect } from "react";
import { useRef } from "react";

export default function Intro() {



    const textRef = useRef();
    



    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60, 
            strings: ['Developer', 'Designer', 'Content Creater sometimes' ] 
        })        
    },[]);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there! I'm</h2>
                    <h1>Akash Sinha</h1>
                    <h3>Freelance <span ref={textRef}></span> </h3> 
                </div>
                <a href='#portfolio'>
                    <KeyboardArrowDownRounded className="downIcon"/>
                </a>
            </div>
        </div>
    )
}
