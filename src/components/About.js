import React from 'react'
import './About.css';

export const About = () => {
    return (
       <div className='html'>
            <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>
<div style={{display:'flex', justifyContent:'center'}}>
  <h2>Our Team</h2>
</div>
<div className="row" style={{display:'flex', justifyContent:'center'}}>
  <div className="column" style={{width:'500px'}}>
    <div className="card">
      <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" width="430px"/>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column" style={{width:'500px'}}>
    <div className="card">
      <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike" width="430px"/>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column" style={{width:'500px'}}>
    <div className="card">
      <img src="https://www.w3schools.com/w3images/team3.jpg" alt="John" width="430px"/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div> 
</div>
    )
}
