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
                     src="http://drive.google.com/uc?export=view&id=1x2ah5VS-cSg0JaZSYn3afNwposDW3Uxe" alt="Kappa"/>
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
                    <img className="okPic" src={AllOK} alt="Omicron Kappa"/>
                </div>
            </div>
        );
    }

}

class SchoolHistory extends Component {
    render() {
        return (
            <div className="columnDiv">
                <div id="lehigh" className="column">
                    <h1>Lehigh University</h1>
                    <img className="schoolLogo" src="http://drive.google.com/uc?export=view&id=19e3-MQUxdAJvKD2qIQXB0C0uszeY3KXl" alt="Lehigh University"/>
                    <p className="columnText">
                        The chapter’s presence at Lehigh began with the work of Dr. Wayne Bethea, ’91 ’94G ‘01G, Robert
                        Howard, and Terry Williams, ’89. The chapter’s founders had a desire to establish a new
                        values-based organization on campus, and pursued membership in what they viewed to be the most
                        prestigious historically black Greek-letter organization.
                        <br/>
                        <br/>
                        Omicron Kappa was the first culturally based Greek letter chapter in Lehigh University’s
                        history, as well as the first non-residential fraternity in university history. In 2009, Omicron
                        Kappa became a founding member of the Multicultural Greek Council (MGC), along with the Delta
                        Upsilon Chapter of Lambda Theta Alpha and the Uman Chapter of Lambda Sigma Upsilon.
                        <br/>
                        <br/>
                        The Omicron Kappa Chapter exists to carry out the objectives of the Fraternity, and embody the
                        Fraternity’s fundamental purpose: achievement. Brothers initiated into the Fraternity at the
                        Omicron Kappa Chapter demonstrate a continued effort to be successful in their academic
                        endeavors, and work ceaselessly to impact the university community in a myriad of ways. Brothers
                        participate in all aspects of the Lehigh experience, including several community service
                        opportunities; the planning and execution of educational and social programming; promoting and
                        supporting social justice initiatives; and several extracurricular activities.

                    </p>
                </div>
                <div id="ursinus" className="column">
                    <h1>Ursinus College</h1>
                    <img className="schoolLogo" src="http://drive.google.com/uc?export=view&id=1e4vGy16aloL8audJfIaTzozM1CiVIQM2" alt="Ursinus College"/>
                    <p className="columnText">

                    </p>
                </div>
                <div id="moravian" className="column">
                    <h1>Moravian College</h1>
                    <img className="schoolLogo" src="http://drive.google.com/uc?export=view&id=1xUNFF4P8JcVOVxngyWfXMTB0hxYvaJLZ" alt="Ursinus Moravian"/>
                    <p className="columnText">The Omicron Kappa Chapter colony was founded at Moravian College in the spring semester of 2016.
                        Kelly Petty Jr. hosted an informational in the years prior and by the end of the academic year
                        Kush and Vishu Solanki, Kahron Walker, Isaiah Jennings, Jim Maru alongside with Austin Price
                        from Lehigh University became the official founders of the colony. A year later, these
                        distinguished men introduced Baru Roberson, Christopher Antoine and Keyshawn Griffith, along
                        with their brothers from Lehigh, Julius Wibisono, Frankie Rodriguez, Donterrius Walker and Tyler
                        James Stubbs to the bond.</p>
                </div>
            </div>
        );
    }
}

export default History;