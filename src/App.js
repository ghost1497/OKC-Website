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

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img src={logo} width="300" height="200" alt={""}/>
                    <ul className="linkContainer">
                        <Scroll.Link className="linkChild" to="history" smooth={true} duration={500}>Chapter
                            History</Scroll.Link>
                        <Scroll.Link className="linkChild" to="boty" smooth={true} duration={500}>Brothers on the
                            yard</Scroll.Link>
                        <Scroll.Link className="linkChild" to="eventCalendar" smooth={true} duration={500}>Event
                            Calendar</Scroll.Link>
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
                    <h1>About Our Chapter</h1>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <hr/>
                <div id="boty">
                    <BrotherOnYard/>
                </div>
                <hr/>
                <div id="eventCalendar" className="calendar">
                    <h1>Event Calendar</h1>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=qnvd4h9e45ofncs5fdrmq414po%40group.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FNew_York"
                        width="800" height="600" frameBorder="0" scrolling="no"></iframe>
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
