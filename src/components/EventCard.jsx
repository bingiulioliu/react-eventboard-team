import React from 'react';

function EventCard({ title, date, category, status }) {
  return (
    <div className='event-card d-flex flex-column'>
        <h3>{title}</h3>
        <h5>{date}</h5>
        <p>{category}</p>
        <p>{status}</p>
    </div>
  );
}

export default EventCard