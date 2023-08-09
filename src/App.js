import React, {useState} from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'remixicon/fonts/remixicon.css'

function App() {
    const [light, setLight] = useState(false)

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className={`App ${light ? "light" : ""}`}>
            <Header
                scrollToElement={scrollToElement}
                light={light}
                setLight={setLight}/>
            <Intro
                scrollToElement={scrollToElement}
            />
            <About/>
            <Skills/>
        </div>
    );
}

export default App;
