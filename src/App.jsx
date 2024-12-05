
import Navigation from './components/Navigation'
import Header from './components/Header';
import Proceed from './components/Proceed';
import { useState } from 'react';

function App() {
  const [proceed, setProceed] = useState(false);
  const [detected, setdetected] = useState(false);


    function onChange () {
      setProceed(true);
    }

    function onClose () {
      setProceed(false);
    }

    function pictureDetected () {
      setdetected(true);
      setProceed(false);
    }

  return (
    <>
      <Navigation />
      <Header onChange={onChange} displayDetected={detected}/>   
      {proceed && <Proceed onClose={onClose} detected={pictureDetected}/>}
    </>
  )
}

export default App
