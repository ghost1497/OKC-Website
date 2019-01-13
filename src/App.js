import React, {Component} from 'react';
import logo from './resources/photos/logos/OVOKNUPES.png';
import './styles/App.css';
import Button from "./components/Button";
import Slideshow from "./components/Slideshow";
import * as Scroll from "react-scroll";
import Calendar from "./components/Calendar";

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="header-logo" src={logo} width="300" height="200" alt={""}/>
                    <ul className="linkContainer">
                        <Scroll.Link className="linkChild" to="history" smooth={true} duration={500}>Chapter History</Scroll.Link>
                        <Scroll.Link className="linkChild" to="boty" smooth={true} duration={500}>Brothers on the yard</Scroll.Link>
                        <Scroll.Link className="linkChild" to="eventCalendar" smooth={true} duration={500}>Event Calendar</Scroll.Link>
                        <Scroll.Link className="linkChild" to="gallery" smooth={true} duration={500}>Gallery</Scroll.Link>
                        <Scroll.Link className="linkChild" to="contact" smooth={true} duration={500}>Contact us</Scroll.Link>
                    </ul>
                    <div className="header-right">
                        <Button className="header-admin-button"/>
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
                    <h1>Brothers on the yard</h1>
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
                <div id="eventCalendar">
                    <h1>Event calendar</h1>
                <Calendar/>
                </div>

                <hr/>
                <div id="gallery">
                    <h1>Gallery</h1>
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
                <div id="contact">
                    <h1>Contact Us</h1>
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
            </div>

        );
    }
}

export default App;
