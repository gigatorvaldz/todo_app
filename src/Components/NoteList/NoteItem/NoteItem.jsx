import StandartButton from "../../StandartButton/StandartButton";
import StandartInput from "../../StandartInput/StandartInput";
import { CSSTransition } from "react-transition-group";
import s from "./NoteItem.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../Utils/i18next";

function NoteItem({ noteData, deleteNote }) {
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState({ Mode: false, id: 1 });
  const [note, setNote] = useState({ body: noteData.body, id: noteData.id });
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <CSSTransition
      in={!isDeleted}
      timeout={300}
      classNames="postwrapper"
      onExited={() => deleteNote(note.id)}
      unmountOnExit
    >
      <div className={s.post}>
        <div className={s.postInfo}>
          {editMode.Mode ? (
            <StandartInput
              value={note.body}
              onChange={(e) => setNote({ ...note, body: e.target.value })}
            ></StandartInput>
          ) : (
            <p>
              <span className={s.noteTitle}>{t("todo.note")}</span>: {note.body}
            </p>
          )}
        </div>
        <div className={s.controls}>
          {editMode.Mode ? (
            <StandartButton
              onClick={(e) => setEditMode({ Mode: false, id: note.id })}
            >
              {t("todo.claim")}
            </StandartButton>
          ) : (
            <StandartButton
              onClick={(e) => setEditMode({ Mode: true, id: note.id })}
            >
              {t("todo.edit")}
            </StandartButton>
          )}
          <StandartButton onClick={(e) => setIsDeleted(true)}>
            {" "}
            {t("todo.delete")}
          </StandartButton>
        </div>
      </div>
    </CSSTransition>
  );
}

export default NoteItem;
