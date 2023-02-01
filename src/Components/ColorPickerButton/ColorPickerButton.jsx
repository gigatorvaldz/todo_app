import React, { useState } from "react";
import { ChromePicker } from "react-color";
import s from "./ColorPickerButton.module.css";
import { useTranslation } from "react-i18next";
import "../../Utils/i18next"

function ColorPickerButton({color, setColor}) {
  const [isPickerActive, setIsPickerActive] = useState(false);
  const {t} = useTranslation();
  return (
    <div>
      <button
        style={{
          background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        }}
        onClick={() => setIsPickerActive(!isPickerActive)}
      >
        {t("todo.themeColor")}
      </button>
      {isPickerActive && (
        <div className={s.picker}>
          <div className={s.cover} onClick={() => setIsPickerActive(false)} />
          <ChromePicker
            onClick={(e) => e.stopPropagation}
            color={color}
            onChange={(e) => setColor(e.rgb)}
          />
        </div>
      )}
    </div>
  );
}

export default ColorPickerButton;
