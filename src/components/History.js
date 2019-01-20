import React, {Component} from 'react';
import AllOK from '../resources/photos/slideshow/AllOk.png';
import '../styles/History.css';

class History extends Component {

    render() {
        return (
            <div>
                <div>
                    <KappaHistory/>
                </div>
                <div>
                    <ChapterHistory/>
                </div>
                <div>
                    <SchoolHistory/>
                </div>
            </div>
        );
    }
}

class KappaHistory extends Component {
    render() {
        return (
            <div>
                <img className="kappa"
                     src="http://drive.google.com/uc?export=view&id=1x2ah5VS-cSg0JaZSYn3afNwposDW3Uxe"/>
                <p className="kappaText">Kappa Alpha Psi Fraternity Inc (ΚΑΨ) is a collegiate Greek-letter fraternity
                    with a predominantly African-American
                    membership. Since the fraternity's founding on January 5, 1911 at Indiana University Bloomington,
                    the fraternity has never limited membership based on color, creed or national origin. The fraternity
                    has over 160,000 members with 721 undergraduate and alumni chapters in every state of the United
                    States,
                    and international chapters in the United Kingdom, Germany, South Korea, Japan, United States Virgin
                    Islands, Nigeria, and South Africa.</p>
            </div>
        );
    }


}

class ChapterHistory extends Component {
    render() {
        return (
            <div>

                <div className="okContainer">
                    <div>
                        <h1>Omicron Kappa Chapter</h1>
                    </div>
                    <p className="okText">
                        The Omicron Kappa Chapter of Kappa Alpha Psi Fraternity Inc. was chartered
                        on May 18, 2001, though the Fraternity has existed on campus at Lehigh University since
                        April 18, 1987 as an expansion colony. Omicron Kappa is a part of the Northeastern
                        Province of the Fraternity, one of 12 regional umbrellas under which undergraduate
                        and alumni chapters are sorted.
                    </p>
                    <img className="okPic" src={AllOK}/>
                </div>
            </div>
        );
    }

}

class SchoolHistory extends Component {
    render() {
        return (
            <div className="columnDiv">

            </div>
        );
    }
}

export default History;