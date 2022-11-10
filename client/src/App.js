import React from 'react'
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Main from './components/Main';
import ViewOne from './components/ViewOne';
import Create from './components/Create'

function App() {
  return (
    <div className="App">
        {/* Theater Stage */}
        <Routes>
          {/* Main - all notes */}
          <Route path='/pirates' element={<Main />}/>

          {/* Create  */}
          <Route path='/create' element={<Create />}/>

          {/* View One  */}
          <Route path='/pirates/:id' element={<ViewOne />}/>

          {/* Redirect */}
          <Route path='*' element={<Navigate to="/pirates" replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
