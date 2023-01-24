import StandartButton from "../StandartButton/StandartButton";
import s from "./Sidebar.module.css"
import settingsicon from "../../Assets/sets.png"
import contactsicon from "../../Assets/servidce.png"
import donateicon from "../../Assets/donate.png"

function Sidebar() {
    return (
        <div className={s.sidebar}>
            <h3 className={s.menu}>Menu List</h3>
            <div className={s.linklist}>
                <p className={s.activeLink}>Link1</p>
                <p>Link1</p>
                <p>Link1</p>
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