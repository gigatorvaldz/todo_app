import React from "react";
import { useTranslation } from "react-i18next";
import "../../Utils/i18next";
import { useState } from "react";
import StandartButton from "../StandartButton/StandartButton";
import StandartInput from "../StandartInput/StandartInput";
import StandartSelect from "../StandartSelect/StandartSelect";

function PostCreator({ themes, posts, setPosts }) {
  const [postCreator, setPostCreator] = useState({
    title: "",
    body: "",
    theme: "",
  });

  const [titleDirty, setTitleDirty] = useState(false);
  const [titleError, setTitleError] = useState(true);

  const { t } = useTranslation();

  const setTheme = (theme) => {
    setPostCreator({ ...postCreator, theme });
  };

  let setNewPost = () => {
    let date = new Date();
    setPosts([
      ...posts,
      {
        title: postCreator.title,
        body: postCreator.body,
        date: date.toString(),
        id: Date.now(),
        theme: postCreator.theme,
      },
    ]);
    postCreator.title = "";
    postCreator.body = "";
  };

  let onChangeHandler = (e) => {
    setPostCreator({ ...postCreator, title: e.target.value });
    if (e.target.value) {
      setTitleError(false);
    } else setTitleError(true);
  };

  let onClickHandler = () => {
    setNewPost();
    setTitleError(true);
    setTitleDirty(false);
  };

  return (
    <div className="PostCreator">
      <h1>{t("todo.createpost")}</h1>
      {titleError && titleDirty && (
        <p style={{ color: "red" }}>{t("todo.titleerror")}</p>
      )}
      <StandartInput
        onBlur={() => setTitleDirty(true)}
        value={postCreator.title}
        onChange={(e) => onChangeHandler(e)}
        placeholder={t("todo.todo")}
      />
      <StandartInput
        value={postCreator.body}
        onChange={(e) =>
          setPostCreator({ ...postCreator, body: e.target.value })
        }
        placeholder={t("todo.description")}
      />
      <StandartSelect
        options={themes}
        onChange={setTheme}
        defaultOptoin={t("todo.themechoose")}
      />
      <StandartButton disabled={titleError} onClick={onClickHandler}>
        {t("todo.create")}
      </StandartButton>
    </div>
  );
}

export default PostCreator;
