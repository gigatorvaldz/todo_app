import { NavLink } from "react-router-dom";
import s from "./CalendarButton.module.css"

function CalendarButton({children, year, month, ...props}) {
    return (
      <div className={s.buttonWrapper}>
        <NavLink to={`${children.props.children}-${month}-${year}`}>
            <button className={s.Button} {...props}>
                {children}
            </button>
        </NavLink>
      </div>
    );
  }

export default CalendarButton;