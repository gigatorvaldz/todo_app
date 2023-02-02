import React from "react";
import { useTranslation } from "react-i18next";
import "../../Utils/i18next";
import { useState } from "react";
import StandartButton from "../StandartButton/StandartButton";
import StandartInput from "../StandartInput/StandartInput";
import ColorPickerButton from "../../Components/ColorPickerButton/ColorPickerButton";

function ThemeCreator({ themes, setThemes }) {
  const [titleDirty, setTitleDirty] = useState(false);
  const [titleError, setTitleError] = useState(true);

  const { t } = useTranslation();
  const [themeCreator, setThemeCreator] = useState({
    name: "",
    color: { r: 83, g: 83, b: 83, a: 1 },
  });

  let onChangeHandler = (e) => {
    setThemeCreator({ ...themeCreator, name: e.target.value });
    if (e.target.value) {
      setTitleError(false);
    } else setTitleError(true);
  };

  const setNewTheme = () => {
    setThemes([
      ...themes,
      {
        name: themeCreator.name,
        value: themeCreator.name,
        color: themeCreator.color,
      },
    ]);
    setThemeCreator({...themeCreator, name: ''})
  };

  let onClickHandler = () => {
    setNewTheme();
    setTitleError(true);
    setTitleDirty(false);
  };

  return (
    <div className="Theme Creator">
      <h1>{t("todo.createTheme")}</h1>
      {titleError && titleDirty && (
        <p style={{ color: "red" }}>{t("todo.titleerror")}</p>
      )}
      <StandartInput
        onBlur={() => setTitleDirty(true)}
        value={themeCreator.name}
        onChange={onChangeHandler}
        placeholder={t("todo.themeName")}
      />
      <ColorPickerButton
        color={themeCreator.color}
        setColor={(color) => setThemeCreator({ ...themeCreator, color })}
      />
      <StandartButton disabled={titleError} onClick={onClickHandler}>{t("todo.create")}</StandartButton>
    </div>
  );
}

export default ThemeCreator;
