import React from 'react'

import "./topbar.css"
import {Email} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"><div className="logo">vanessachristy.</div></a>
                    <div className="item-container">
                        <a href="mailto:vanessa.chandra2002@gmail.com?Subject=Hello%20world!">
                        <Email className="icon"/>
                        <span>vanessa.chandra2002@gmail.com</span>
                        </a>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
