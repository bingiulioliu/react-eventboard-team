import { useState } from 'react'
import './App.css'

function App() {
  const [selectCategory, setSelectCategory] = useState('tutti')

  return <>
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

  </>



}

export default App
