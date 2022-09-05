import './App.css';
import Functions from './components/Functions/Functions';
import '../src/components/Custom-css/App.css';
import About from './components/About/About';
import { useState } from 'react';

function App() {
  const [openModal, setopenModal] = useState(false);

  return (
    <div style={{ backgroundColor: 'purple' }}>
      <div style={{ marginLeft: '50px' }}>
        <button onClick={() => setopenModal(true)} className='dev-button'>About Developer</button>
        {
          openModal && <About setopenModal={setopenModal}>
          </About>
        }
      </div>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="App">
        <Functions></Functions>
      </div>
    </div>
  );
}

export default App;
