import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import CurrentTime from './components/CurrentTime';

function App() {

  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  )
}

export default App
