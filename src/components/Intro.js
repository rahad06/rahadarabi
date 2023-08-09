import React from 'react';
import data from '../data/data.json'
import BG from '../components/images/bg.jpeg'
import {Link} from "react-router-dom";

function Intro(props) {
    return (
        <div className="hero" style={{backgroundImage: `url(${BG})`}}>
            <div className="hero-inner d-flex align-items-center justify-content-center">
                <div>
                    <h1 className="title text-center">{data.intro.title}</h1>
                    <h2 className="title text-center">{data.intro.subtitle}</h2>
                    <div className="text-center d-flex align-items-center justify-content-center hero-icons-box">
                        {data.intro.links.map((l, i) => (
                            <a href={l.url} key={i} target="_blank" rel="noopener noreferrer">
                                <i className={`${l.icon}`}></i>
                            </a>
                        ))}
                    </div>
                    <div className="d-flex align-items-center justify-content-center position-absolute scroll-bottom">
                        <i className="ri-arrow-down-s-fill"
                           onClick={() => props.scrollToElement('about')}>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;