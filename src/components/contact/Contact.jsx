import React from 'react'

import "./contact.css"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1>ABOUT</h1>
            <div className="contact-item">
                <div className="about">
                    <div className="img-container">
                        <img src="assets/vece.jpg" alt=""></img>
                    </div>
                    <h3>I'm a sophomore undergraduate majoring in Information Engineering and Media at Nanyang Technological University. I'm a very determined, easy-going, and hard-working person who gains the most satisfaction at work when I am faced with new challenges. Currently, I am really interested in the UI/UX design and web development field.</h3>
                </div>
                <div className="social">
                    <div className="logo-container"><a href="https://github.com/vanessaachristy"> <img src="assets/github.png" alt=""></img></a></div>
                    <div className="logo-container"><a href="https://www.linkedin.com/in/vanessa-christy/"> <img src="assets/linked.png" alt=""></img> </a> </div>
                    <div className="logo-container"><a href="https://www.instagram.com/vanessaachristy"> <img src="assets/instagram.png" alt=""></img> </a> </div>
                </div>
            </div>
            <div className="footer">
                <h3>© 2021 Vanessa Christy. All Rights Reserved.</h3>
            </div>
        </div>
    )
}
