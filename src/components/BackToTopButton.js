import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/BackToTopButton.css';

class BackToTopButton extends Component {

    constructor() {
        super();

        this.state = {
            intervalId: 0,
            showBanner: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.pageYOffset > 1000) {
            console.log('scrolled');
            this.setState({
                showBanner: true
            });
        } else {
            this.setState({
                showBanner: false
            });
        }
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({intervalId: intervalId});
    }


    render() {
        return (
            <div>
                {
                    // eslint-disable-next-line
                    this.state.showBanner && <div>
                        <button title='Back to top' className='scroll' onClick={() => {
                            this.scrollToTop();
                        }}><FontAwesomeIcon icon="chevron-up" className="arrow-up"/>
                        </button>
                    </div>
                    // eslint-disable-next-line
                    || null
                }
            </div>
        );
    }
}

export default BackToTopButton;