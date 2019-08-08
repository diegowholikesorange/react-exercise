import React, {useState} from 'react';
import './App.css';
import UnicornSection from './UnicornSection';
import DragonSection, {DragonModel} from './DragonSection';
import bundle from "./Bundle";

const App: React.FC = () => {

   const unicorns: string[] =["Twilightsparkle", "Applejack", "Fluttershy", "Rainbowdash"];
   const dragon: DragonModel = {
       totalNumberOfHeads: 2,
       totalNumberOfTails: 3,
       totalAmountOfHeads: 42,
       totalFirePower: 2000000,
   }

  return (
    <div className="App">
        <div className="Container" >
            <UnicornSection title={bundle.unicornSectionTitle} unicorns={unicorns}/>
            <DragonSection model={dragon} />
        </div>
    </div>
  );
};


export default App;
