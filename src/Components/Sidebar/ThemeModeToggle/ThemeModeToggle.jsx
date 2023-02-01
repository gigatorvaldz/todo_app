import React from "react";
import s from "./ThemeModeToggle.module.css";

function ThemeModeToggle({ onClick }) {
  return (
    <div className={s.toggleWrapper}>
      <input className={s.toggle} type="checkbox" onClick={onClick} />
    </div>
  );
}

export default ThemeModeToggle;
