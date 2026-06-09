
import { useState } from 'react'
import './App.css'
import { events } from "./data/events"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EventList from './components/EventList.jsx';

function App() {
  const [selectCategory, setSelectCategory] = useState('tutti')

  return <>
    {/* header principale */}
      <header>
        <h1>EventBoard</h1>
        <p>Scopri tutti gli eventi disponibili</p>
      </header>
   {/* counter eventi */}
      <p>Eventi trovati: {events.length}</p>
    
    <div className='d-flex justify-content-center align-items-center mb-4'>
      <label htmlFor="filter" className='me-3' >
        filtra Per Categoria
      </label>

      <select value={selectCategory} id="filter" onChange={(e) => setSelectCategory(e.target.value)}>
        <option value="Tutti">Tutti</option>
        <option value="Conferenze">Conferenze</option>
        <option value="Workshop">Workshop</option>
        <option value="Meetup">Meetup</option>
      </select>

    </div>
    <p className='text-center' mt-4>Categoria selezionata {selectCategory}</p>
    {/* contenitore principale */}
     <main>
        <EventList />
      </main>
  </>
}

export default App;
