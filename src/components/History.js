import React, {Component} from 'react';
import AllOK from '../resources/photos/slideshow/AllOk.png';
import Sheild from '../resources/photos/logos/sheild_transparent.png';
import OKNAC from '../resources/photos/OKNAC.jpg';
import nepLogo from '../resources/photos/logos/KappaNeplogo_Converted.png';
import '../styles/History.css';

class History extends Component {

    render() {
        return (
            <div>
                <div>
                    <KappaHistory/>
                </div>
                <div>
                    <ProvinceHistory/>
                </div>
                <div>
                    <NacHistory/>
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
                     src={Sheild} alt="Coat of Arms"/>
                <p className="okText">Kappa Alpha Psi Fraternity Inc (ΚΑΨ) is a collegiate Greek-letter fraternity
                    with a predominantly African-American
                    membership. Since the fraternity's founding on January 5, 1911 at Indiana University Bloomington,
                    the fraternity has never limited membership based on color, creed or national origin. The fraternity
                    has over 160,000 members with 721 undergraduate and alumni chapters in every state of the United
                    States,
                    and international chapters in the United Kingdom, Germany, South Korea, Japan, United States Virgin
                    Islands, Nigeria, and South Africa.</p>
                <button className="linkButton" onClick={this.openNationalSite}>Official Site of ΚΑΨ</button>
            </div>
        );
    }

    openNationalSite() {
        window.open('https://kap.site-ym.com/', '_blank');
        return false;
    }
}

class ProvinceHistory extends Component {
    render() {
        return (
            <div>
                <div className="okContainer">
                    <div>
                        <h1>Northeastern Province of ΚΑΨ</h1>
                    </div>
                    <div className="okFlex">
                        <div className="okFlexChild">
                            <img className="nepPic" src={nepLogo} alt="NEP Logo"/>
                        </div>
                        <div className="okFlexChild">
                            <p className="nepText">
                                The designation of the province first came about in 1921 during the regime of then Grand
                                Polemarch George W. David and the Third Grand Polemarch. At the Tenth Annual Session of
                                the Grand Chapter held in Philadelphia, the Grand body divided the organization into
                                four parts known as regions. Initially, they were numerically named. Each region
                                consisted of the chapters in the states in which they were situated. As the fraternity
                                grew, the names of the regions were changed to provinces.
                                <br/>
                                <br/>
                                The growth of the fraternity also promoted the need for additional provinces to
                                govern the chapters. In 1930, two new provinces were established, the North
                                Eastern and South Western Provinces. The first Polemarch of the Northeastern
                                Province was James E. Allen who was appointed by Grand Polemarch Archie A.
                                Alexander.
                                <br/>
                                <br/>
                                Today the Northeastern Province is comprised of over 40 Undergraduate
                                and over
                                30 Alumni Chapters. It covers a geographical area spanning from the tip
                                of New
                                England in the north through Delaware in the south, and Pennsylvania in
                                the west
                                over to Germany and the United Kingdom. It is also the home of the
                                International
                                Headquarters of Kappa Alpha Psi Fraternity, Inc. located in
                                Philadelphia, PA.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="linkButton" onClick={this.openNepSite}>Official Site of the ne Province</button>
            </div>
        );
    }

    openNepSite() {
        window.open('https://www.kapsinep.org/index.php', '_blank');
        return false;
    }
}

class NacHistory extends Component {
    render() {
        return (
            <div>
                <div className="okContainer">
                    <div>
                        <h1>Norristown alumni Chapter</h1>
                    </div>
                    <div className="okFlex">
                        <div className="okFlexChild">
                            <p className="okText">
                                The Omicron Kappa Chapter of Kappa Alpha Psi is chartered under the Norristown Alumni
                                Chapter. NAC was chartered on January 26, 1986 and serves the Municipality of
                                Norristown,
                                Pennsylvania the County Seat of Montgomery County. NAC services the community through
                                its on-going community driven programs that provide support and services to the youth
                                their families. Through our Guide Right / Kappa League Program, it provides an active
                                mentorship program for those young men who seek growth and development.
                            </p>
                        </div>
                        <div className="okFlexChild">
                            <img className="okPic" src={OKNAC} alt="OK & NAC"/>
                        </div>
                    </div>
                </div>
                <button className="linkButton" onClick={this.openNacSite}>Official Site of NaC</button>
            </div>
        );
    }

    openNacSite() {
        window.open('https://www.norristown-nupes.com/', '_blank');
        return false;
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
                    <div className="okFlex">
                        <div className="okFlexChild">
                            <p className="okText">
                                The Omicron Kappa Chapter of Kappa Alpha Psi Fraternity Inc. was chartered
                                on May 18, 2001, though the Fraternity has existed on campus at Lehigh University since
                                April 18, 1987 as an expansion colony. Omicron Kappa is a part of the Northeastern
                                Province of the Fraternity, one of 12 regional umbrellas under which undergraduate
                                and alumni chapters are sorted.
                            </p>
                        </div>
                        <div className="okFlexChild">
                            <img className="okPic" src={AllOK} alt="Omicron Kappa"/>
                        </div>
                    </div>
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
                    <img className="schoolLogo"
                         src="http://drive.google.com/uc?export=view&id=19e3-MQUxdAJvKD2qIQXB0C0uszeY3KXl"
                         alt="Lehigh University"/>
                    <p className="columnText">
                        The chapter’s presence at Lehigh began with the work of Dr. Wayne Bethea, ’91 ’94G ‘01G, Robert
                        Howard, and Terry Williams, ’89. The chapter’s charter members had the desire to establish a new
                        values-based organization on campus and pursued membership in what they viewed to be the most
                        prestigious historically black Greek-letter organization.
                        <br/>
                        <br/>
                        Omicron Kappa was the first culturally based Greek letter chapter in Lehigh University’s
                        history, as well as the first non-residential fraternity in the university's history. In 2009,
                        Omicron Kappa became a founding member of the Multicultural Greek Council (MGC), along with the
                        Delta Upsilon Chapter of Lambda Theta Alpha and the Uman Chapter of Lambda Sigma Upsilon.
                        <br/>
                        <br/>
                        The Omicron Kappa Chapter exists to carry out the objectives of the Fraternity and embody the
                        Fraternity’s fundamental purpose: achievement. Brothers initiated into the Fraternity at the
                        Omicron Kappa Chapter demonstrate a continued effort to be successful in their academic
                        endeavors, and work ceaselessly to impact the university community in a myriad of ways. Brothers
                        participate in all aspects of the Lehigh experience, including several community service
                        opportunities; the planning and execution of educational and social programming; promoting and
                        supporting social justice initiatives; lastly, several extracurricular activities.

                    </p>
                </div>
                <div id="ursinus" className="column">
                    <h1>Ursinus College</h1>
                    <img className="schoolLogo"
                         src="http://drive.google.com/uc?export=view&id=1e4vGy16aloL8audJfIaTzozM1CiVIQM2"
                         alt="Ursinus College"/>
                    <p className="columnText">

                    </p>
                </div>
                <div id="moravian" className="column">
                    <h1>Moravian College</h1>
                    <img className="schoolLogo"
                         src="http://drive.google.com/uc?export=view&id=1xUNFF4P8JcVOVxngyWfXMTB0hxYvaJLZ"
                         alt="Ursinus Moravian"/>
                    <p className="columnText">
                        The Omicron Kappa Chapter colony was extended to Moravian College in the
                        spring semester of 2016. Kelly Petty Jr. hosted an informational in the years prior and by the
                        end of the academic year Kush and Vishu Solanki, Kahron Walker, Isaiah Jennings, Jim Maru
                        alongside with Austin Price from Lehigh University became the first line of the Moravian colony
                        of the Omicron Kappa Chapter. A year later, these distinguished men introduced Baru Roberson,
                        Christopher Antoine and Keyshawn Griffith, along with their brothers from Lehigh, Julius
                        Wibisono, Frankie Rodriguez, Donterrius Walker and Tyler James Stubbs to the bond.
                    </p>
                </div>
            </div>
        );
    }
}

export default History;
