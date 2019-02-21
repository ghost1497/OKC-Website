import React, {Component} from 'react';
import logo from './resources/photos/logos/OVOKNUPES.png';
import './styles/App.css';
import * as Scroll from "react-scroll";
import Calendar from "./components/Calendar";
import Photo from "./components/Photos";
import Contact from "./components/Contact";
import BrotherOnYard from "./components/BrotherOnYard";
import History from "./components/History";
import BackToTopButton from "./components/BackToTopButton";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import AdminPopup from "./components/AdminConsolePopup";

library.add(faChevronUp);

class App extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {

        return (
            <div>
                <div className="header">
                    <img className="headerLogo" src={logo} width="300" height="200" alt="OVOK Nupes Logo"/>
                    <ul className="linkContainer">
                        <Scroll.Link className="linkChild" to="history" smooth={true}
                                     duration={500}>History</Scroll.Link>
                        <Scroll.Link className="linkChild" to="boty" smooth={true} duration={500}>On the
                            yard</Scroll.Link>
                        <Scroll.Link className="linkChild" to="eventCalendar" smooth={true}
                                     duration={500}>Events</Scroll.Link>
                        <Scroll.Link className="linkChild" to="gallery" smooth={true}
                                     duration={500}>Gallery</Scroll.Link>
                        <Scroll.Link className="linkChild" to="contact" smooth={true} duration={500}>Contact
                            us</Scroll.Link>
                    </ul>
                    <div className="header-right">
                        <div className="header-admin-button">
                            <button className="admin-button" onClick={this.togglePopup.bind(this)}>OK Nupe Entrance</button>
                        </div>
                    </div>
                </div>
                {this.state.showPopup ?
                    <AdminPopup
                        header='OK Nupe Login'
                        body="Feature Coming Soon"
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
                <div>
                    <BackToTopButton scrollStepInPx="40" delayInMs="10"/>
                </div>
                <hr/>
                <div id="history">
                    <History/>
                </div>
                <hr/>
                <div id="boty">
                    <BrotherOnYard/>
                </div>
                <hr/>
                <div id="eventCalendar">
                    <h1>Event Calendar</h1>
                    <div>
                        <Calendar/>
                    </div>
                </div>
                <hr/>
                <div id="gallery">
                    <h1>Gallery</h1>
                    <Photo/>
                </div>
                <hr/>
                <div id="contact">
                    <Contact/>
                </div>
            </div>

        );
    }
}

export default App;
