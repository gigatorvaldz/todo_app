import s from "./Sidebar.module.css"
import settingsicon from "../../Assets/sets.png"
import contactsicon from "../../Assets/servidce.png"
import donateicon from "../../Assets/donate.png"
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className={s.sidebar}>
            <h3 className={s.menu}>Menu List</h3>
            <div className={s.linklist}>
                <NavLink to="/todolist" 
                    className={({ isActive }) =>
                    isActive ? s.activeLink : s.nonActiveLink}
                    >
                    Link1
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                    isActive ? s.activeLink : s.nonActiveLink}
                to="/help">Link2</NavLink>
                <NavLink to="/about"
                    className={({ isActive }) =>
                    isActive ? s.activeLink : s.nonActiveLink}
                >Link3</NavLink>
            </div>
            <div className={s.icons}>
                <img className={s.icon} src={settingsicon} alt="settings"></img>
                <img className={s.icon} src={contactsicon} alt="settings"></img>
                <img className={s.icon} src={donateicon} alt="settings"></img>
            </div>
        </div>
    );
  }

export default Sidebar;