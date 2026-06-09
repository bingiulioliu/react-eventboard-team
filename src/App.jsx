import { useState } from 'react'
import './App.css'

function App() {
  const [selectCategory, setSelectCategory] = useState('tutti')

  return <div className='d-flex justify-content-center align-items-center' >
    <label htmlFor="filter">
      filtra Per Categoria
    </label>

    <select value={selectCategory} id="filter" onChange={(e) => setSelectCategory(e.target.value)}>
      <option value="Tutti">Tutti</option>
      <option value="Conferenze">Conferenze</option>
      <option value="Workshop">Workshop</option>
      <option value="Meetup">Meetup</option>
    </select>
    <p>Categoria selezionata {selectCategory}</p>
  </div>






}

export default App
