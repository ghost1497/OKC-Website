import React from 'react';
import '../styles/Contact.css';
import {validate} from "../services/validation/InputVal";
import * as emailjs from 'emailjs-com'

class Contact extends React.Component {
    static initState = {
        formControls: {
            name: {
                value: '',
                placeholder: 'Name',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 3,
                    isRequired: true
                }
            },
            email: {
                value: '',
                placeholder: 'Email',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 3,
                    isEmail: true,
                    isRequired: true
                }
            },
            message: {
                value: '',
                placeholder: 'Write a message to us'
            }
        }
    };

    constructor() {
        super();
        this.state = Contact.initState;

    }


    changeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;


        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });

    };

    formSubmitHandler = (event) => {
        event.preventDefault();
        alert('Your contact form has been submitted. An OK brother will be looking at your response shortly!');
        const formData = {};
        const {
            REACT_APP_EMAILJS_TEMPLATEID: templateId,
            REACT_APP_EMAILJS_USERID: userId
        } = process.env;


        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }

        console.log(formData);

        emailjs.send('gmail', templateId, formData, userId)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.error('Failed to send feedback. Error: ', err))

        this.resetStateValues();
    };

    resetStateValues() {
        this.setState(Contact.initState);
    }


    render() {
        return (
            <div className="contact-container">
                <div className="form-card">
                    <h1 className="material">Contact Us</h1>
                    <form className="material">
                        <div className="material-input">
                            <input type="text"
                                   name="name"
                                   placeholder={this.state.formControls.name.placeholder}
                                   value={this.state.formControls.name.value}
                                   valid={this.state.formControls.name.valid}
                                   onChange={this.changeHandler.bind(this)}
                                   maxLength="120"
                            />
                        </div>
                        <div className="material-input">
                            <input type="email"
                                   name="email"
                                   placeholder={this.state.formControls.email.placeholder}
                                   value={this.state.formControls.email.value}
                                   valid={this.state.formControls.email.valid}
                                   onChange={this.changeHandler.bind(this)}
                                   maxLength="120"
                            />
                        </div>
                        <div className="material-input">
                            <input type="text"
                                   name="message"
                                   placeholder={this.state.formControls.message.placeholder}
                                   value={this.state.formControls.message.value}
                                   onChange={this.changeHandler.bind(this)}
                                   maxLength="3000"
                            />
                        </div>
                        <div className="buttons">
                            <button className="submitted" onClick={this.formSubmitHandler}
                                    disabled={!(this.state.formControls.email.valid && this.state.formControls.name.valid)}>Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;


