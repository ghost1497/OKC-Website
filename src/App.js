import React, {Component} from 'react';
import logo from './Resources/Photos/Logos/OVOKNUPES.png';
import './Styles/App.css';
import Button from "./components/button";
import Slideshow from "./components/slideshow";

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="header-logo" src={logo} width="300" height="200" alt={""}/>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Upcoming Events</a>
                    <div className="header-right">
                        <Button className="header-admin-button"/>
                    </div>
                </div>
                <div>
                    <Slideshow/>
                </div>
            </div>

        );
    }
}

export default App;
