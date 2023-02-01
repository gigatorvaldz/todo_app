import PostItem from "./PostItem/PostItem";
import "./PostList.css";
import { useTranslation } from "react-i18next";
import "../../Utils/i18next";

function PostList({ posts, ...props }) {
  const { t } = useTranslation();

  return (
    <div className="posts">
      {posts.length ? (
        posts.map((el) => <PostItem postData={el} key={el.id} {...props} />)
      ) : (
        <h1 style={{ textAlign: "center" }}>{t("todo.noposts")}</h1>
      )}
    </div>
  );
}

export default PostList;
