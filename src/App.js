import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import TodolistPage from './Pages/TodolistPage';
import Help from './Pages/HelpPage';

function App() {
  return (
    <div className="App">
      <Sidebar className='sidebar'/>
      <div className='mainpage'>
          <Routes>
            <Route path="/todolist/*" element={<TodolistPage/>}/>
            <Route path="/help" element={<Help/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
