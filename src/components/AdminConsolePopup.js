import React from 'react';
import '../styles/AdminConsolePopup.css';


class AdminPopup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.header}</h1>
                    <p className="popup_text">{this.props.body}</p>
                    <button className="close-button" onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}

export default AdminPopup;
