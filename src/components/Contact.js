import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
<div className="container">
  <div style={{display:'flex', justifyContent:'center'}}>
    <h2>Contact Us</h2>
  </div>
  <div className="row">
    <div className="column">
    <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d11892.678581556853!2d-71.402593!3d41.824645!3m2!1i1024!2i768!4f13.1!2m1!1s21%20Brown%20St%2C%20Providence%2C%20RI%2002906!5e0!3m2!1sen!2s!4v1594333265060!5m2!1sen!2s" width="100%" height="450" title="map" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div className="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label>Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'170px'}}></textarea>
        <div style={{ display:'flex', justifyContent:'center' }}>
        <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}
