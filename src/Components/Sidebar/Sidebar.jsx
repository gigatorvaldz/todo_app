import s from "./Sidebar.module.css"
import settingsicon from "../../Assets/sets.png"
import { useContext, useState } from 'react'
import { NavLink } from "react-router-dom";
import StandartModal from "../StandarModal/StandartModal";
import StandartSelect from "../StandartSelect/StandartSelect";
import { useTranslation } from "react-i18next";
import "../../Utils/i18next"
import ThemeModeToggle from "./ThemeModeToggle/ThemeModeToggle";
import {ThemeContext} from "../../Context/ThemeContext";

function Sidebar() {

    const [modalIsActive, setModalIsActive] = useState(false)

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      localStorage.setItem("lng", language)
    };

    const languages = [
        {name: "en", value: "en"},
        {name: "ru", value: "ru"},
    ]

    const { theme, toggleTheme } = useContext(ThemeContext) 

    const changeTheme = () => {
        toggleTheme( theme === "light" ? "dark" : "light")
    }

    return (
        <div className={s.sidebar}>
            <h3 className={s.menu}>Menu List</h3>
            <div className={s.linklist}>
                <NavLink to="/todolist" 
                    className={({ isActive }) =>
                    isActive ? s.activeLink : s.nonActiveLink}
                    >
                    Todo
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                    isActive ? s.activeLink : s.nonActiveLink}
                to="/about">About</NavLink>
            </div>
            <div className={s.icons}>
                <img className={s.icon} onClick={() => setModalIsActive(!modalIsActive)} src={settingsicon} alt="settings"></img>
            </div>
            <StandartModal isActive={modalIsActive} setIsActive={setModalIsActive}>
                <StandartSelect options={languages} defaultOptoin={t("settings.changeLanguageOptions")} onChange={changeLanguage}></StandartSelect>
                <ThemeModeToggle onClick={changeTheme}/>
                {theme}
            </StandartModal>
        </div>
    );
  }

export default Sidebar;