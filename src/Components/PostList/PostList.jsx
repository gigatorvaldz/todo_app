import PostItem from "./PostItem/PostItem";
import "./PostList.css"

function PostList({posts, ...props}) {
    return (
        <div className="posts">
            {
                posts.map( el => <PostItem postData={el} key={el.id} {...props}/>)
            }
        </div>
    );
  }

export default PostList;