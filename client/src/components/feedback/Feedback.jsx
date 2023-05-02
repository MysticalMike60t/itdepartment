import React, { useState } from 'react'

const Feedback = () => {
    var [email,setEmail]=useState();

    const emailUpdate=(event)=>{
        setEmail(event.target.value);
    }
    const handleSubmit = ()=>{
        const postURL = "https://us-east-1.aws.data.mongodb-api.com/app/data-ncpfj/endpoint/data/v1";
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then(()=>{
            alert("yessss");
        })
    }
    // const [inputErrorList, setInputErrorList] = useState({});
    // const [userFeedback, setUserFeedback] = useState({
    //     email: '',
    //     date: '',
    //     feedbackType: '',
    //     description: ''
    // })
    // const handleInput = (e) => {
    //     e.persist();
    //     setUserFeedback({ ...userFeedback, [e.target.name]: e.target.value });
    // }
    // const saveUserFeedback = (e) => {
    //     const data = {
    //         email: userFeedback.email,
    //         date: userFeedback.date,
    //         feedbackType: userFeedback.feedbackType,
    //         description: userFeedback.description,
    //     }
    //     Axios.post(`https://us-east-1.aws.data.mongodb-api.com/app/data-ncpfj/endpoint/data/v1`, data)
    //         .then(res => {
    //             alert(res.data.message);
    //         }).catch(function(error){
    //             if(error.response){
    //                 if(error.response.status === 422) {
    //                     setInputErrorList(error.response.data.errors);
    //                 }
    //                 if(error.response.status === 500) {
    //                     alert(error.response.data);
    //                 }
    //             }
    //         });
    // }
    return (
        <div className="feedback__container container dark">
            <div className="container__wrapper">
                <form className="wrapper__form" name="feedback_form"> {/* onSubmit={saveUserFeedback()} */}
                    <h1>Feedback</h1>
                    <div className="form__inputs">
                        <label htmlFor="">Email <input required type="text" className="inputs__input" name="email" onChange={emailUpdate}/></label> {/* value={userFeedback.email} onChange={handleInput}} */}
                        {/* <span className='inputs__error'>{inputErrorList.name}</span> */}
                        <label htmlFor="">Date <input type="date" className="inputs__input" name="date"/></label>
                        <label htmlFor="">
                            What feedback do you want to give?
                            <select name="feedback_type" className='label__select' id="selector">
                                <option value="0">Other</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            Please explain in as much detail as possible:
                            <textarea className='inputs__input' name="description"/>
                        </label>
                    </div>
                    <button type="submit" className="form__submit" name="submit">
                        Submit
                    </button>
                </form>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Feedback