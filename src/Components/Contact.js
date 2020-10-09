import React, { useState } from 'react';
import '../App.css';
import '../Contact.css';

function Contact() {

    const [textAreaPlaceholder, setTextAreaPlaceholder] = useState('Please type your message here...');
    const [firstNamePlaceholder, setFirstNamePlaceholder] = useState('Ex. Jane');
    const [lastNamePlaceholder, setLastNamePlaceholder] = useState('Ex. Doe');

    return (
        <div className="content-area">
             
             <div id="formContainer">
                <form>
                    <h2>Please fill out this form to get in touch:</h2>

                    <div id="names-section">
                        <div className="label-and-input">
                            <label htmlFor="firstName">First Name:</label>

                            <input type="text" name="firstName" id="firstName" className="name-inputs blue-border" placeholder={firstNamePlaceholder} onFocus={() => setFirstNamePlaceholder('')} onBlur={() => setFirstNamePlaceholder('Ex. Jane')} />
                        </div>

                        <div className="label-and-input">
                            <label htmlFor="lastName">Last Name:</label>

                            <input type="text" name="lastName" id="lastName" className="name-inputs blue-border" placeholder={lastNamePlaceholder} onFocus={() => setLastNamePlaceholder('')} onBlur={() => setLastNamePlaceholder('Ex. Doe')} />
                        </div>
                    </div>

                    <div className="label-and-input">
                        <label htmlFor="messageBox">Message:</label>

                        <textarea name="messageBox" id="messageBox" className="blue-border" placeholder={textAreaPlaceholder} onFocus={() => setTextAreaPlaceholder('')} onBlur={() => setTextAreaPlaceholder('Please type your message here...')}></textarea>
                    </div>

                    <input type="submit" name="submit" id="submit" value="Submit" />
                </form>
            </div>

            

        </div>
    );
}

export default Contact;