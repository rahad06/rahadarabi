import React from 'react';
import data from '../data/data.json'

function Skills(props) {
    return (
        <>
            <div style={{height: '20px'}} id="skills"></div>
            <div className="skills p-5">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="">
                        <h2>
                            {data.skills.title}
                        </h2>
                    </div>
                    <div className="pt-2">
                        <div className="container">
                            <ul className="row align-items-center justify-content-center mb-0">
                                {data.skills.list.map((i, indx) => (
                                    <li className="col-md-3 m-2" key={indx}>
                                        <div className="d-flex align-items-center justify-content-center card p-3">
                                            <div className="card-inner">
                                                <h5 className="mb-0">{i}</h5></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;