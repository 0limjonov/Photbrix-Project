import './App.css';

import { Route, Routes } from 'react-router';
import Step from './Components/Step';
import Main from './Components/Main';
import Images from './Components/Images';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Step' element={<Step />} />
        <Route path='/Images' element={<Images />} />
        <Route path='/Step3' element={<Step3 />} />
        <Route path='/Step4' element={<Step4 />} />
      </Routes>

    </div>
  );
}

export default App;
