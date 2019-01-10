import React, {Component} from 'react';
import '../Styles/Slideshow.css';
import AllOK from '../Resources/Photos/SlideShow/AllOk.png';
import ChrisTrack from '../Resources/Photos/SlideShow/ChrisTrack.png';
import OkAtNj from '../Resources/Photos/SlideShow/OkAtNJ.png';

class Slideshow extends Component {
    render() {
        return (
            <div id="slideshow">
                <div className="slide-wrapper">
                    <div className="slide"><img src={AllOK}/></div>
                    <div className="slide"><img src={ChrisTrack}/></div>
                    <div className="slide"><img src={OkAtNj}/></div>
                </div>
            </div>
        );
    };
};

export default Slideshow;