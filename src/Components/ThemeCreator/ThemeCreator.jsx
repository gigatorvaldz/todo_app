import React from "react";
import { useTranslation } from "react-i18next";
import "../../Utils/i18next";
import { useState } from "react";
import StandartButton from "../StandartButton/StandartButton";
import StandartInput from "../StandartInput/StandartInput";
import ColorPickerButton from "../../Components/ColorPickerButton/ColorPickerButton";

function ThemeCreator({ themes, setThemes }) {
  const { t } = useTranslation();
  const [themeCreator, setThemeCreator] = useState({
    name: "",
    color: { r: 83, g: 83, b: 83, a: 1 },
  });

  const setNewTheme = () => {
    setThemes([
      ...themes,
      {
        name: themeCreator.name,
        value: themeCreator.name,
        color: themeCreator.color,
      },
    ]);
  };

  return (
    <div className="Theme Creator">
      <h1>{t("todo.createTheme")}</h1>
      <StandartInput
        value={themeCreator.name}
        onChange={(e) =>
          setThemeCreator({ ...themeCreator, name: e.target.value })
        }
        placeholder={t("todo.themeName")}
      />
      <ColorPickerButton
        color={themeCreator.color}
        setColor={(color) => setThemeCreator({ ...themeCreator, color })}
      />
      <StandartButton onClick={setNewTheme}>{t("todo.create")}</StandartButton>
    </div>
  );
}

export default ThemeCreator;
