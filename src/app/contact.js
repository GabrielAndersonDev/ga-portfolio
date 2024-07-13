'use client';

import React, { useState } from "react";
import { validateEmail, removeSpaces } from '../lib/helpers.js';

export default function Contact({ handleFailState, handleSuccessState, notifState }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [subjectErr, setSubjectErr] = useState('');
    const [messageErr, setMessageErr] = useState('');
    const [redName, setRedName] = useState(false);
    const [redEmail, setRedEmail] = useState(false);
    const [redSubject, setRedSubject] = useState(false);
    const [redMessage, setRedMessage] = useState(false);
    const [errTrue, setErr] = useState({
        name: true,
        email: true,
        subject: true,
        message: true
    })

    const handleInputChange = (e) => {
        
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'entry.1560707200') {
            setName(inputValue);
        };

        if (inputType === 'entry.547367803') {
            setEmail(inputValue);
        };

        if (inputType === 'entry.1792417998') {
            setSubject(inputValue);
        };

        if (inputType === 'entry.73408052') {
            setMessage(inputValue);
        };
    };

    const handleNameErr = () => {
        if (name === '') {
            setNameErr(`This field cannot be empty.`);

            setErr(prevState => ({
                ...prevState,
                name: true
            }));
            setRedName(true);
        } else {
            setNameErr('');
            setErr(prevState => ({
                ...prevState,
                name: false
            }));
            setRedName(false);
        };
    };

    const handleEmailErr = () => {
        if (email === '') {
            setEmailErr(`This field cannot be empty.`);

            setErr(prevState => ({
                ...prevState,
                email: true
            }));
            setRedEmail(true);
        } else if (!validateEmail(email)) {
            setEmailErr(`Please enter a valid email address.`);
            setErr(prevState => ({
                ...prevState,
                email: true
            }));
            setRedEmail(true);
        } else {
            setEmailErr('');
            setErr(prevState => ({
                ...prevState,
                email: false
            }));
            setRedEmail(false);
        };
    };

    const handleSubjectErr = () => {
        if (subject === '') {
            setSubjectErr(`This field cannot be empty.`);

            setErr(prevState => ({
                ...prevState,
                subject: true
            }));
            setRedSubject(true);
        } else {
            setSubjectErr('');
            setErr(prevState => ({
                ...prevState,
                subject: false
            }));
            setRedSubject(false);
        };
    };

    const handleMessageErr = () => {
        if (message === '') {
            setMessageErr(`This field cannot be empty.`);

            setErr(prevState => ({
                ...prevState,
                message: true
            }));
            setRedMessage(true);
        } else {
            setMessageErr('');
            setErr(prevState => ({
                ...prevState,
                message: false
            }));
            setRedMessage(false);
        };
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

        console.log('handle sub')

        if (!errTrue.name && !errTrue.email && !errTrue.subject && !errTrue.message) {

            console.log('succeed send')

            setName(removeSpaces(name));
            setSubject(removeSpaces(subject));
            setMessage(removeSpaces(message));
            
            fetch(`https://script.google.com/macros/s/AKfycbxDnoolt3f4Y5dFy_YXWF_3fEDT1nxQgH-ZhgAKCMslE1OKb52rBkOEI9b-aBFq1g9B/exec?name=${name}&email=${email}&subject=${subject}&message=${message}`)
            .catch((err) => {
                console.log(err)
            });

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');

            setErr({
                name: true,
                email: true,
                subject: true,
                message: true
            });

            successStateCheck();
            return;
        };

        console.log('fail send')

        failStateCheck();
        return;
    };

    const successStateCheck = () => {
        handleSuccessState(true);
        return;
    }

    const failStateCheck = () => {
        handleFailState(true);
        return;
    };

    return (

        <section className='contact'id="contact">

            <div className='contact-container'>
                <form className="form-contact">
                
                    <input 
                        value={name}
                        type='text'
                        placeholder='Name'
                        name='entry.1560707200'
                        onBlur={handleNameErr}
                        onChange={handleInputChange}
                        className={`name-input ${redName? 'red' : 'not-red'} ${notifState? 'dialog' : ''}`}
                    />
                    {nameErr && (
                        <div className='err-or-div' id='id-name-err'>
                            <p className="error-text" id="name-err">
                                {nameErr}
                            </p>
                        </div>
                    )}

                    <input
                        value={email}
                        type="email"
                        placeholder="Email"
                        name="entry.547367803"
                        onBlur={handleEmailErr}
                        onChange={handleInputChange}
                        className={`email-input input-border ${redEmail? 'red' : 'not-red'} ${notifState? 'dialog' : ''}`}
                    />
                    {emailErr && (
                        <div className="err-or-div" id="id-email-err">
                            <p className="error-text" id="email-err">
                                {emailErr}
                            </p>
                        </div>
                    )}

                    <input
                        value={subject}
                        type="text"
                        placeholder="Subject"
                        name="entry.1792417998"
                        onBlur={handleSubjectErr}
                        onChange={handleInputChange}
                        className={`subject-input input-border ${redSubject? 'red' : 'not-red'} ${notifState? 'dialog' : ''}`}
                    />
                    {subjectErr && (
                        <div className="err-or-div" id="id-subject-err">
                            <p className="error-text" id="subject-err">
                                {subjectErr}
                            </p>
                        </div>
                    )}

                    <input
                        value={message}
                        type="text"
                        placeholder="Message"
                        name="entry.73408052"
                        onBlur={handleMessageErr}
                        onChange={handleInputChange}
                        className={`message-input input-border ${redMessage? 'red' : 'not-red'} ${notifState? 'dialog' : ''}`}
                    />
                    {messageErr && (
                        <div className="err-or-div" id="id-message-err">
                            <p className="error-text" id="message-err">
                                {messageErr}
                            </p>
                        </div>
                    )}

                    <button type="submit" onClick={handleFormSubmit} className={`submit-btn ${notifState? 'dialog' : ''}`}>
                        Submit
                    </button>

                </form>

            </div>
        </section>
    );
};