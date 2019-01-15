import React, {Component} from 'react';
import '../styles/App.css';

class BrotherOnYard extends Component {


    constructor() {
        super();
        this.brothers = require('../resources/data/brothers_on_yard');
    }

    onCLick() {
        var element = document.getElementById("brotherCard");
        element.classList.toggle("flipped");
    }

    render() {
        let brotherCards = this.brothers.map(brother => {
            return (
                <div>
                <aside className="boty-container">
                    <div id="brotherCard" className="profile-card" onclick="onClick()">
                        <header>
                            <image src="{brother.img}"></image>
                            <h1 className="boty-h1">{brother.name}</h1>
                        </header>
                        <div className="profile-bio">
                            <p className="boty-p">{brother.bio}</p>
                        </div>
                    </div>
                </aside>
                </div>
            )
        })
        return (
            <ul className="">
                {brotherCards}
            </ul>
        );
    }
}

export default BrotherOnYard;