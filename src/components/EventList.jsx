
import EventCard from "./EventCard.jsx";
import { events } from "../data/events.js";

function EventList() {
  return (
    <div className="container">
      <div className="row">
        {events.map(event => {
          return <EventCard key={event.id} title={event.title} date={event.date} category={event.category} status={event.aperto} />
        })}
      </div>
    </div>
  );
}

export default EventList;