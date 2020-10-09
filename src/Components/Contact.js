import React from 'react';
import '../App.css';
import '../Contact.css';

function Contact() {
    return (
        <div className="content-area">
             
             <div id="formContainer">
                <form>
                    <h2>Please fill out this form to get in touch:</h2>

                    <div id="names-section">
                        <div className="label-and-input">
                            <label for="firstName">First Name:</label>

                            <input type="text" name="firstName" id="firstName" className="name-inputs blue-border" placeholder="Ex. Jane" onfocus="this.placeholder=''" onblur="this.placeholder='First Name'" />
                        </div>

                        <div className="label-and-input">
                            <label for="lastName">Last Name:</label>

                            <input type="text" name="lastName" id="lastName" className="name-inputs blue-border" placeholder="Ex. Doe" onfocus="this.placeholder=''" onblur="this.placeholder='Last Name'" />
                        </div>
                    </div>

                    <div className="label-and-input">
                        <label for="messageBox">Message:</label>
                        
                        <textarea name="messageBox" id="messageBox" className="blue-border" placeholder="Please type your message here..." onfocus="this.placeholder=''" onblur="this.placeholder='Please type your message here...'"></textarea>
                    </div>

                    <input type="submit" name="submit" id="submit" value="Submit" />
                </form>
            </div>

        </div>
    );
}

export default Contact;