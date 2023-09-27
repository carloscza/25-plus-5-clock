import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SessionBreakTimerSetters from './SessionBreakTimerSetters';
import Timer from './Timer';
import Title from './Title';
import ClockContextProvider from './context';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ClockContextProvider>
        <main className="App">
          <section id="clock" className='clock-container'>
            <Title /> 
            <SessionBreakTimerSetters />
            <Timer />
          </section>
        </main>
      </ClockContextProvider>
    </BrowserRouter>
  );
}

export default App;
