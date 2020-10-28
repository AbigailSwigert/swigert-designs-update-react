import React, { useState } from 'react';
import '../App.css';
import '../Contact.css';

function Contact() {

    const [textAreaPlaceholder, setTextAreaPlaceholder] = useState('Please type your message here...');
    const [firstNamePlaceholder, setFirstNamePlaceholder] = useState('Ex. Jane');
    const [lastNamePlaceholder, setLastNamePlaceholder] = useState('Ex. Doe');

    return (
        <div className="content-area" style={{display: "flex", flexDirection: "column", height: "100%"}}>
             
             <div id="formContainer">
                <form action="https://formspree.io/f/mjvpwenr" method="POST">
                    <h2>Please fill out this form to get in touch:</h2>

                    <div id="names-section">
                        <fieldset className="label-and-input">
                            <label htmlFor="firstName">First Name:</label>

                            <input type="text" name="firstName" id="firstName" className="name-inputs blue-border" placeholder={firstNamePlaceholder} onFocus={() => setFirstNamePlaceholder('')} onBlur={() => setFirstNamePlaceholder('Ex. Jane')} required />
                        </fieldset>

                        <fieldset className="label-and-input">
                            <label htmlFor="lastName">Last Name:</label>

                            <input type="text" name="lastName" id="lastName" className="name-inputs blue-border" placeholder={lastNamePlaceholder} onFocus={() => setLastNamePlaceholder('')} onBlur={() => setLastNamePlaceholder('Ex. Doe')} required />
                        </fieldset>
                    </div>

                    <div className="label-and-input">
                        <label htmlFor="messageBox">Message:</label>

                        <textarea name="messageBox" id="messageBox" className="blue-border" placeholder={textAreaPlaceholder} onFocus={() => setTextAreaPlaceholder('')} onBlur={() => setTextAreaPlaceholder('Please type your message here...')} required ></textarea>
                    </div>

                    <input type="submit" name="submit" id="submit" value="Submit" />
                </form>
            </div>

            <footer id="social-icons-group">
                <a href="https://twitter.com/abigailswigert">
                    <img className="social-icon" src={require('../assets/001-twitter.png')} alt="link to Abigail Swigert's Twitter profile" />
                </a>

                <a href="https://www.linkedin.com/in/abigailswigert">
                    <img className="social-icon" src={require('../assets/002-linkedin.png')} alt="link to Abigail Swigert's LinkedIn profile" />
                </a>

                <a href="https://www.instagram.com/abigailswigert/">
                    <img className="social-icon" src={require('../assets/003-instagram.png')} alt="link to Abigail Swigert's Instagram profile" />
                </a>
            </footer>

        </div>
    );
}

export default Contact;