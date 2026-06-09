
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

      {/* contenitore principale */}
      <main>
        <EventList />
      </main>
    </>
  );

}

export default App;
