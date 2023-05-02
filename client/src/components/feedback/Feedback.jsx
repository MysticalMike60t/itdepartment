import React from 'react'

const Feedback = () => {
  return (
    <div className="feedback__container container dark">
        <div className="container__wrapper">
            <form className="wrapper__form" name="feedback_form" method="POST" data-netlify="true">
                <h1>Feedback</h1>
                <div className="form__inputs">
                    <label htmlFor="">Email <input type="text" className="inputs__input" name="email" /></label>
                    <label htmlFor="">Date <input type="date" className="inputs__input" name="date"/></label>
                    <label htmlFor="">
                        What feedback do you want to give?   
                        <select name="feedback_type" className='label__select' id="selector">
                            <option value="0">Other</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Please explain in as much detail as possible:
                        <textarea className='inputs__input' name="description" />
                    </label>
                </div>
                <button type="submit" className="form__submit" name="submit">
                    Submit
                </button>
            </form>
        </div>
        <br/>
        <br/>
    </div>
  )
}

export default Feedback