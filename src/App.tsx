import React from 'react';
import './App.css';
import UnicornSection from './UnicornSection';
import bundle from "./Bundle";

const App: React.FC = () => {
  return (
    <div className="App">
        <div className="Container" >
            <UnicornSection title={bundle.unicornSectionTitle}/>
        </div>
    </div>
  );
}


export default App;
