import './App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import TodolistPage from './Pages/TodolistPage';

function App() {
  return (
    <div className="App">
      <Sidebar className='sidebar'/>
      <div className='mainpage'>
        <TodolistPage/>
      </div>
    </div>
  );
}

export default App;
