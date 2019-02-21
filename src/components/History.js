import React, {Component} from 'react';
import '../styles/History.css';

// Logo & photo imports
import AllOK from '../resources/photos/slideshow/AllOk.png';
let SHEILD = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Logos%2Fsheild_transparent.png?alt=media&token=be779524-7ddb-40ac-8d80-47b10ecc6b4e';
let OKNAC = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FOKNAC.jpg?alt=media&token=344c88bb-e1b3-4d4f-a5a2-c14770a21930';
let NEPLOGO = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Logos%2FKappaNeplogo_Converted.png?alt=media&token=49624bf3-8530-4bab-bb9f-9ab5de380bca';
let UCLOGO = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Logos%2Fuc-shield.png?alt=media&token=175e87aa-17af-4052-b78a-6e36a554698b';
let LEHIGHLOGO = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Logos%2FLUwithShield-CMYK.svg.png?alt=media&token=fabf3a4e-1208-4c0d-a8bf-814278c7940c';
let MORAVIANLOGO = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Logos%2Fmoravian-logo.png?alt=media&token=2b226cb0-ea7d-40d1-8041-2ecedbb18401';


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
                     src={SHEILD} alt="Coat of Arms"/>
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
                            <img className="nepPic" src={NEPLOGO} alt="NEP Logo"/>
                        </div>
                        <div className="okFlexChild">
                            <p className="nepText">
                                The Omicron Kappa Chapter is a part of the Northeastern Province of the Fraternity, one
                                of 12
                                regional umbrellas under which undergraduate and alumni chapters are sorted. The
                                designation of the province first came about in 1921 during the regime of then Grand
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
                                on May 18, 2001 at Lehigh University, though the Fraternity has existed on campus at
                                Lehigh University since
                                April 18, 1987 as an expansion colony. Since then, the chapter has expanded to Ursinus
                                College (2002) and Moravian College (2016) to extend the good work of Kappa and give
                                other young men
                                of color the opportunity to be apart of that work.
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
                         src={LEHIGHLOGO}
                         alt="Lehigh University"/>
                    <p className="columnText">
                        The chapter’s presence at Lehigh began with the work of Dr. Wayne Bethea, ’91 ’94G ‘01G, Robert
                        Howard, and Terry Williams, ’89. In the spring of 2001, the Omicron Kappa Chapter was chartered
                        under brothers Robert Daye, Corey Harrison, Louis Brown, Avon Mack Jr, and Brant Hall. The chapter’s
                        charter members had the desire to establish a new
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
                         src={UCLOGO}
                         alt="Ursinus College"/>
                    <p className="columnText">
                        A colony extension of the Omicron Kappa Chapter of Kappa Alpha Psi Fraternity Incorporated was
                        chartered at Ursinus college on February 17, 2002 on the campus of Ursinus College by Big
                        Brother Theodore Smith of the Alpha Iota chapter of Kappa Alpha Psi Fraternity Incorporated. He
                        is accredited with the formation of the chapter at Ursinus college.
                        <br/>
                        <br/>
                        The reign of the Omicron Kappa Chapter at Ursinus college started with four young men and a
                        dream. Those young men were Kevin Hankins Jr 02’, Brandon
                        Brooks 03’, Jarod Devine and Harry Micheal 03’. These men sought to bring a
                        strong bond of fraternity to a small liberal arts campus. A passionate brother from the Alpha
                        Iota chapter(Morgan state) Theodore Smith took a chance on the dream and sponsored these you men
                        on their long journey into Honorable achievement.
                        <br/>
                        <br/>
                        Being the first first culturally based Greek letter chapter in Ursinus College history,
                        these four young men sparked the foundation for a strong multicultural bond within the Ursinus
                        community. The black student Union, S.U.N (Sankofa Umoja Nia), was greatly influenced by the
                        service and positive image these men brought. This was all while inspiring another culturally
                        based Greek
                        organization, Sigma Gamma Rho Sorority inc, to join the Ursinus Community.
                    </p>
                </div>
                <div id="moravian" className="column">
                    <h1>Moravian College</h1>
                    <img className="schoolLogo"
                         src={MORAVIANLOGO}
                         alt="Moravian College"/>
                    <p className="columnText">
                        <br/>
                        <br/>
                        The Omicron Kappa Chapter extended as a colony to Moravian College in the
                        spring semester of 2016. Kelly Petty Jr hosted informationals in the years prior and by the
                        end of the academic year Kush and Vishu Solanki, Kahron Walker, Isaiah Jennings, Jim Maru
                        alongside with Austin Price from Lehigh University became the first line at Moravian College
                        to be initiated through the Omicron Kappa Chapter. A year later, these distinguished men
                        introduced Baru Roberson,
                        Christopher Antoine and Keyshawn Griffith, along with their brothers from Lehigh University,
                        Julius
                        Wibisono, Frankie Rodriguez, Donterrius Walker and Tyler James Stubbs to the bond.
                    </p>
                </div>
            </div>
        );
    }
}

export default History;
