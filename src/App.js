import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import TodolistPage from "./Pages/TodolistPage";
import Help from "./Pages/HelpPage";
import { ThemeContext} from "./Context/ThemeContext";
import { useEffect, useState } from "react";
import getTheme from "./Utils/getTheme";
import i18n from "./Utils/i18next";

function App() {
  
  const [theme, setTheme] = useState(getTheme);
  const toggleTheme = (mode) => {
    setTheme(mode);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect( () => {
    i18n.changeLanguage(localStorage.getItem("lng"))
  }, [] )
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Sidebar className="sidebar" />
        <div className="mainpage">
          <Routes>
            <Route path="/todolist/*" element={<TodolistPage />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
