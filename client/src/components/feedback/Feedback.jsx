import React, { useRef } from 'react'
import $ from "jquery";
import emailjs from '@emailjs/browser';

const Feedback = () => {
    const form = useRef();
    let errMes;

    const sendEmail = (e) => {
        e.preventDefault();

        if (!localStorage.getItem("ip")) {
            emailjs.sendForm('service_fta2cg8', 'template_dg7zngu', form.current, 'h9SNBTG1l1E3UEXDy')
                .then((result) => {
                    console.log(result.text);
                    $(".complete_message").css({ display: "flex" });
                    $.getJSON("https://api.ipify.org?format=json", function (data) {
                        localStorage.setItem("ip", data.ip);
                    })
                }, (error) => {
                    errMes = error.text;
                    console.log(error.text);
                    $(".incomplete_message").css({ display: "flex" });
                });
        } else {
            $(".form__submit").css({ "pointer-events": "none", opacity: "0.1" });
            return;
        }
    };
    $(document).ready(function () {
        if (!localStorage.getItem("ip")) {
            return;
        } else {
            $(".form__wrapper").remove();
            $(".form__input").remove();
            $(".form__textarea").remove();
            $(".form__submit").remove();

            errMes = "Already Submitted Feedback";
            $(".incomplete_message").css({ display: "block" });
            $(".incomplete_message>p").append(errMes);
        }
    })
    return (
        <div className="feedback__container container dark">
            <form ref={form} onSubmit={sendEmail} className='container__form' id="feeback_form" name="feedback_form">
                <h1>Feedback</h1>
                <div className="form__wrapper">
                    <label className='wrapper__label'>Name</label>
                </div>
                <input type="text" name="user_name" className='form__input' required="true" />
                <div className="form__wrapper">
                    <label className='wrapper__label'>Email</label>
                </div>
                <input type="email" name="user_email" className='form__input' required={true} />
                <div className="form__wrapper">
                    <label className='wrapper__label'>Message</label>
                </div>
                <textarea name="message" className='form__textarea' required={true} />
                <input type="submit" value="Send" className='form__submit' />
                <div className="complete_message">
                    <p>Feedback Sent</p>
                </div>
                <div className="incomplete_message">
                    <p>Error: {errMes}</p>
                </div>
            </form>
        </div>
    )
}

export default Feedback
