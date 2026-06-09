import { events } from "./data/events"

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import EventList from './components/EventList.jsx';

function App() {

    

  return (
    <>
      {/* header principale */}
      <header>
        <h1>EventBoard</h1>
        <p>Scopri tutti gli eventi disponibili</p>
      </header>
    
      {/* counter eventi */}
      <p>Eventi trovati: {events.length}</p>

      {/* contenitore principale */}

      <main>
        <EventList />
      </main>
    </>
  );

}

export default App;
