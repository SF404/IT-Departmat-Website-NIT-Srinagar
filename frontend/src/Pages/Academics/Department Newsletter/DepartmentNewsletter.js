import React from 'react';

function DepartmentNewsletter() {
  return (
    <div className="department-newsletter">
      <h2>Department Newsletter</h2>
      <p>Welcome to the latest edition of the NIT Srinagar Department Newsletter. In this issue, we have exciting updates and news to share with you.</p>
      
      <h3>Featured Articles</h3>
      <div className="featured-articles">
        <div className="article">
          <h4>Article 1 Title</h4>
          <p>Article 1 content goes here...</p>
        </div>
        <div className="article">
          <h4>Article 2 Title</h4>
          <p>Article 2 content goes here...</p>
        </div>
      </div>

      <h3>Upcoming Events</h3>
      <div className="upcoming-events">
        <div className="event">
          <h4>Event 1</h4>
          <p>Event 1 details and date...</p>
        </div>
        <div className="event">
          <h4>Event 2</h4>
          <p>Event 2 details and date...</p>
        </div>
      </div>
    </div>
  );
}

export default DepartmentNewsletter;
