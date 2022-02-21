import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             if (!e.target.value.length) {
    //                 setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //                 setErrorMessage('');
    //             }
    //         }
    //     } 
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //     }
    // }
 
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label><br />
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label><br />
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <div className="contactInfo">
                <h3>Mark Kanczuzewski</h3>
                <h5>Email: mkanczuzewski@gmail.com</h5>
                <h5>Phone: (248)515-8462</h5>
            </div>
        </section>
      )
    }
    
export default ContactForm;