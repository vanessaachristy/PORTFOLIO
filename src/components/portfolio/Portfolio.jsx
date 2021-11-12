import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import {useState, useEffect} from 'react'

import "./portfolio.css"
import { featuredPortfolio, UIPortfolio, designPortfolio, brandingPortfolio, videoPortfolio, } from '../data';

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

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

    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "uiux":
                setData(UIPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "branding":
                setData(brandingPortfolio);
                break;
            case "video":
                setData(videoPortfolio);
                break;
             default:
                 setData(featuredPortfolio);   
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>PORTFOLIO</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected}/>
                ))}
            </ul> 
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                        <img src={d.img} alt=""></img>
                        <h3 className="item-title">{d.title}</h3>
                        <div className="icon">
                            <a href={d.web1}><img src={d.icon1} alt=""></img></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
