import React, { useContext } from "react";
import {ThemeContext} from "../../Context/ThemeContext";
import s from "./StandartModal.module.css";

export default function StandartModal({ isActive, setIsActive, children }) {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={isActive ? s.activemodal : s.nonactivemodal} onClick={() => setIsActive(!isActive)}>
      <div className={s.modal} data-theme={theme} onClick={(e => e.stopPropagation())}>{children}</div>
    </div>
  );
}
