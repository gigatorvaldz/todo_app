import StandartInput from "../../StandartInput/StandartInput";
import s from "./PostItem.module.css";
import { useEffect, useState } from "react";
import StandartSelect from "../../StandartSelect/StandartSelect";
import { CSSTransition } from "react-transition-group";
import "./PostItemAnimation.css";
import CALENDAR_IMAGE from "../../../Assets/calendar.png";
import DELETE_IMAGE from "../../../Assets/trash-svgrepo-com.svg";
import EDIT_IMAGE from "../../../Assets/pen-svgrepo-com.png";
import CLAIM_IMAGE from "../../../Assets/pen-svgrepo-com (1).png";
import { useTranslation } from "react-i18next";
import "../../../Utils/i18next";
const STANDART_COLOR = "var(--background-color-2)";

function PostItem({ postData, deletePost, themes }) {
  const { t } = useTranslation();

  const [editMode, setEditMode] = useState({ Mode: false, id: 1 });
  const [post, setPost] = useState({
    title: postData.title,
    body: postData.body,
    id: postData.id,
    date: postData.date,
    theme: postData.theme,
  });
  const [isComplited, setIsComplited] = useState(false);
  const [isPostFetched, setIsPostFetched] = useState(false);

  useEffect(() => {
    setTimeout(setIsPostFetched(true));
  }, []);

  const themeColor = post.theme
    ? themes.find((theme) => theme.name === post.theme).color
    : undefined;
  return (
    <CSSTransition
      in={isPostFetched}
      timeout={300}
      classNames="postwrapper"
      onExited={() => deletePost(post.id)}
      unmountOnExit
    >
      <div
        className={s.post}
        style={{
          backgroundColor: themeColor
            ? `rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, ${themeColor.a})`
            : STANDART_COLOR,
        }}
      >
        <div className={isComplited ? s.postInfoComplited : s.postInfo}>
          {editMode.Mode ? (
            <StandartInput
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            ></StandartInput>
          ) : (
            <h2 className={s.title}>
              {" "}
              {t("todo.todo")}: {post.title}
            </h2>
          )}
          {editMode.Mode ? (
            <StandartInput
              value={post.body}
              onChange={(e) => setPost({ ...post, body: e.target.value })}
            ></StandartInput>
          ) : (
            <p className={s.description}>
              {t("todo.description")}: {post.body}
            </p>
          )}
          <div className={s.dateTitle}>
            <img
              className={s.dateIcon}
              src={CALENDAR_IMAGE}
              alt="calendar"
            ></img>
            <p> {post.date || t("todo.none")}</p>
          </div>
          {editMode.Mode ? (
            <StandartSelect
              options={themes}
              defaultOptoin={post.theme}
              onChange={(e) => setPost({ ...post, theme: e })}
            />
          ) : (
            <p className={s.themeTitle}>
              {t("todo.theme")}: {post.theme || t("todo.none")}
            </p>
          )}
        </div>
        <div className={s.controls}>
          {editMode.Mode ? (
            <img
              className={s.icon}
              src={CLAIM_IMAGE}
              alt="claim"
              onClick={(e) => setEditMode({ Mode: false, id: post.id })}
            />
          ) : (
            <img
              alt="edit"
              className={s.icon}
              src={EDIT_IMAGE}
              onClick={(e) => setEditMode({ Mode: true, id: post.id })}
            />
          )}
          <img
            src={DELETE_IMAGE}
            className={s.icon}
            onClick={(e) => setIsPostFetched(false)}
            alt="delete icon"
          />
          <input
            className={s.check}
            type="checkbox"
            onChange={() => setIsComplited(!isComplited)}
          ></input>
        </div>
      </div>
    </CSSTransition>
  );
}

export default PostItem;
