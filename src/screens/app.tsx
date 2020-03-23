import React from 'react';

import State from 'hooks/state';
//import Resume from 'screens/resume';
import ResumeGUI from 'screens/resumeGUI';
import { StateProvider } from 'hooks/provider';
import { Reducer } from 'hooks/reducer';
import 'styles/app/main.css';

const App: React.FC = () => {
  return (
    <StateProvider initialState={State} reducer={Reducer}>
      <div className="App">
        <ResumeGUI />
        {/* <Resume /> */}
      </div>
    </StateProvider>
  );
};

export default App;
