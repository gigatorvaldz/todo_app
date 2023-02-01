import NoteItem from "./NoteItem/NoteItem";
import "./NoteList.css";
import { useTranslation } from "react-i18next";
import "../../Utils/i18next";

function PostList({ notes, ...props }) {
  const { t } = useTranslation();

  return (
    <div className="posts">
      {notes.length ? (
        notes.map((el) => <NoteItem noteData={el} key={el.id} {...props} />)
      ) : (
        <h1 style={{ textAlign: "center" }}>{t("todo.nonotes")}</h1>
      )}
    </div>
  );
}

export default PostList;
