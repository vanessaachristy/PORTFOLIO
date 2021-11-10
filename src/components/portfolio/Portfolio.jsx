import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import {useState} from 'react'

import "./portfolio.css"


export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id:"featured",
            title:"Featured",
        },
        {
            id:"uiux",
            title:"UI/UX",
        },
        {
            id:"design",
            title:"Design",
        },
        {
            id:"branding",
            title:"Branding",
        },
        {
            id:"video",
            title:"Video Editing",
        },
    ];

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected}/>
                ))}
            </ul> 
            <div className="container">
                <div className="item">
                    <img src="assets/fitfriend.gif" alt=""></img>
                    <h3>FitFriend</h3>
                </div>
                <div className="item">
                    <img src="assets/fitfriend.gif" alt=""></img>
                    <h3>Two</h3>
                </div>
                <div className="item">
                    <img src="assets/fitfriend.gif" alt=""></img>
                    <h3>Three</h3>
                </div>
            </div>
        </div>
    )
}
