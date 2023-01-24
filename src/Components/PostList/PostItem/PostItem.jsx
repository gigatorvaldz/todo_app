import StandartButton from "../../StandartButton/StandartButton";
import StandartInput from "../../StandartInput/StandartInput";
import s from "./PostItem.module.css"
import { useState } from "react";

function PostItem({postData, deletePost}) {

    const [editMode, setEditMode] = useState({Mode: false, id: 1})
    const [post, setPost] = useState({title: postData.title, body: postData.body, id: postData.id, date: postData.date});

    return (
        <div className={s.post}>
            <div className={s.postInfo}>
                {editMode.Mode ? <StandartInput value={post.title} onChange={e => setPost({...post, title: e.target.value})}></StandartInput> : <h1>Todo: {post.title}</h1>}
                {editMode.Mode ? <StandartInput value={post.body} onChange={e => setPost({...post, body: e.target.value})}></StandartInput> : <h2>Description: {post.body}</h2>}
                <h2>id: {post.id}</h2>
                <h2>Date: {post.date}</h2>
            </div>
            <div>
                {editMode.Mode ? <StandartButton onClick={e => setEditMode({Mode: false, id: post.id})}>Claim</StandartButton> : <StandartButton onClick={e => setEditMode({Mode: true, id: post.id})}>Edit</StandartButton>}
                <StandartButton onClick={e => deletePost(post.id)}>Delete</StandartButton>
                <StandartButton>Open</StandartButton>
            </div>
        </div>
    );
  }

export default PostItem;