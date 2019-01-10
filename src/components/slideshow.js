import React from 'react';
import '../Styles/Slideshow.css';
import AllOK from '../Resources/Photos/SlideShow/AllOk.png';
import ChrisTrack from '../Resources/Photos/SlideShow/ChrisTrack.png';
import OkAtNj from '../Resources/Photos/SlideShow/OkAtNJ.png';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    AllOK,
    ChrisTrack,
    OkAtNj
];

const fadeProperties = {
    duration: 8000,
    transitionDuration: 1000,
};

const Slideshow = () => {
    return (
        <Fade {...fadeProperties}>
            <div className="slide">
                <div>
                    <img src={fadeImages[0]} alt={"img not available"}/>
                </div>
                <h2>OK Chapter Picture 2017</h2>
            </div>
            <div className="slide">
                <div>
                    <img src={fadeImages[1]} alt={"img not available"}/>
                </div>
                <h2>SP17 Brother Chris Antione</h2>
            </div>
            <div className="slide">
                <div>
                    <img src={fadeImages[2]} alt={"img not available"}/>
                </div>
                <h2>OK Nupes at Nupe Jersey</h2>
            </div>
        </Fade>
    );
};
export default Slideshow;