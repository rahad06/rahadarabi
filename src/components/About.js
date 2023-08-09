import React from 'react';
import data from '../data/data.json'

function About(props) {
    return (
        <>
        <div style={{height: '20px'}} id="about"></div>
        <div className="about p-5" >
            <div className="d-flex flex-column justify-content-evenly align-items-center">
                <div className="">
                    <h2 className="text-center">
                        {data.about.title}
                    </h2>
                </div>
                <div className=" pt-2 ">
                    <div className="about-container d-flex align-items-center justify-content-center">
                    <p className="h5">{data.about.description}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;