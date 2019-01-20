import React, {Component} from 'react';
import logo from './resources/photos/logos/OVOKNUPES.png';
import './styles/App.css';
import AdminButton from "./components/AdminButton";
import Slideshow from "./components/Slideshow";
import * as Scroll from "react-scroll";
import Calendar from "./components/Calendar";
import Photo from "./components/Photos";
import Contact from "./components/Contact";
import BrotherOnYard from "./components/BrotherOnYard";
import History from "./components/History";

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img src={logo} width="300" height="200" alt={""}/>
                    <ul className="linkContainer">
                        <Scroll.Link className="linkChild" to="history" smooth={true} duration={500}>History</Scroll.Link>
                        <Scroll.Link className="linkChild" to="boty" smooth={true} duration={500}>On the
                            yard</Scroll.Link>
                        <Scroll.Link className="linkChild" to="eventCalendar" smooth={true} duration={500}>Events</Scroll.Link>
                        <Scroll.Link className="linkChild" to="gallery" smooth={true}
                                     duration={500}>Gallery</Scroll.Link>
                        <Scroll.Link className="linkChild" to="contact" smooth={true} duration={500}>Contact
                            us</Scroll.Link>
                    </ul>
                    <div className="header-right">
                        <AdminButton className="header-admin-button"/>
                    </div>
                </div>
                <div>
                    <Slideshow/>
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
                <div id="eventCalendar" className="calendar">
                    <h1 style={{color: "black"}}>Event Calendar</h1>
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
