import React from 'react';
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<div/>} />
    </Routes>
  );
}

export default App;
