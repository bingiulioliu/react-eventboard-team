import React, { useState } from 'react';
import EventList from './components/EventList';
import { events } from './data/events';

function App() {
  const [filterCategory, setFilterCategory] = useState('Tutti');

  const filteredEvents = events.filter(event => {

    if (filterCategory === 'Tutti') {
      return true;

    }
    return event.category === filterCategory;
  });

  return (
    <div>
      {/* header da mettere */}

      {/* array filtro da mettere */}
      <EventList events={filteredEvents} />
    </div>
  );




}

export default App
