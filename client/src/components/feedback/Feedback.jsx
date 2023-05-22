import React, { useState, useRef } from 'react'
import $ from "jquery";
import emailjs from '@emailjs/browser';

const Feedback = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fta2cg8', 'template_dg7zngu', form.current, 'h9SNBTG1l1E3UEXDy')
            .then((result) => {
                console.log(result.text);
                $(".complete_message").css({display:"block"});
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="feedback__container container dark">
            <form ref={form} onSubmit={sendEmail} className='container__form'>
                <div className="form__wrapper">
                    <label className='wrapper__label'>Name</label>
                </div>
                <input type="text" name="user_name" className='form__input'/>
                <div className="form__wrapper">
                    <label className='wrapper__label'>Email</label>
                </div>
                <input type="email" name="user_email" className='form__input' />
                <div className="form__wrapper">
                    <label className='wrapper__label'>Message</label>
                </div>
                <textarea name="message" className='form__textarea' />
                <input type="submit" value="Send" className='form__submit' />
                <div className="complete_message">
                    <p>Complete!</p>
                </div>
            </form>
        </div>
    )
}

export default Feedback
