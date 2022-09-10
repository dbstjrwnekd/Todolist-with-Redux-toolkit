import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TodoListWithRedux from './pages/TodoListWithRedux';
import TodoListWithRTKQuery from './pages/TodoListWithRTKQuery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/withRedux" element={<TodoListWithRedux />} />
      <Route path="/withRTQuery" element={<TodoListWithRTKQuery />} />
    </Routes>
  );
}

export default App;
