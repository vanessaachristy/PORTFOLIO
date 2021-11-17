import React from 'react'
import "./education.css"

export default function Education() {
    return (
        <div className="education" id="education">
            <h1> EDUCATION </h1>
            <div className="container">
                <div className="university">
                    <div className="left">
                        <img src="assets/ntu.png" alt=""></img>
                    </div>
                    <div className="right">
                        <div className="uni-name">
                            <h1>Nanyang Technological University</h1>
                        </div>
                        <div className="location">
                            <h2>Singapore</h2>
                        </div>
                        <div className="major">
                            <h2>Bachelor in Information Engineering and Media</h2>
                            <h3>(2020-2024)</h3>
                        </div>
                        <div className="gpa">
                            <h3>4.56/5.00</h3>
                        </div>
                    </div>
                </div>
                <div className="highschool">
                    <div className="left">
                        <img src="assets/ipeka.png" alt=""></img>
                    </div>
                    <div className="right">
                        <div className="school-name">
                            <h1>IPEKA Pluit Christian High School</h1> 
                        </div>
                        <div className="location">
                            <h2>Jakarta, Indonesia</h2>
                        </div>
                        <div className="major">
                            <h2>Natural Science stream</h2>
                            <h3>(2017-2020)</h3>
                        </div>
                        <div className="score">
                            <h3>91/100</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
