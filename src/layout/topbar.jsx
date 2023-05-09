import React from 'react';

export default function TopBar() {
    
  return (
  
    <nav>
      <input type="checkbox" id="check"/>
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>  
      </label>
      <label className="logo">ebazar</label>
      <ul1>
        <li1><a className="active" href="#">Home</a></li1>
        <li1><a href="#">About</a></li1>
        <li1><a href="#">Services</a></li1>
        <li1><a href="#">Feedback</a></li1>
      </ul1>
      {/* <button type="submit" className="btn">submit</button>
      <input type="text" placeholder="search..." /> */}
      
    </nav>
  )
}
