import StandartButton from "../Components/StandartButton/StandartButton";
import './TodolistPage.css'
import { useState } from "react";
import PostList from "../Components/PostList/PostList";
import StandartInput from "../Components/StandartInput/StandartInput";
import Calendar from "../Components/Calendar/Calendar.jsx";

function TodolistPage() {

    const initPosts = [
        {title: "1", body: "2", id: 1, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
        {title: "1", body: "2", id: 2, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
        {title: "1", body: "2", id: 3, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
        {title: "1", body: "2", id: 4, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
        {title: "1", body: "2", id: 5, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
    ]

    const [posts, setPosts] = useState(initPosts)
    const [postCreator, setPostCreator] = useState({title: '', body: ''})

    let setNewPost = () => {
        let date = new Date();
        setPosts([...posts, {title: postCreator.title, body: postCreator.body, date: date.toString(), id: Date.now()}])
        postCreator.title = ''
        postCreator.body = ''
    }
    let deletePost = (id) => {
        setPosts(posts.filter( el => el.id !== id))
    }

    return (
        <div className="TodolistPageWrapper">
                <div className="Calendar">
                    <Calendar/>
                </div>
                <div className="PostSettings">
                    <StandartInput value={postCreator.title} onChange={e => setPostCreator({body: postCreator.body, title: e.target.value})} placeholder="placeholder"/>
                    <StandartInput value={postCreator.body} onChange={e => setPostCreator({title: postCreator.title, body: e.target.value})} placeholder="placeholder"/>
                    <StandartButton onClick={setNewPost}>Submit</StandartButton>
                </div>
                <div className="Filters">
                    <StandartButton>Loh</StandartButton>
                    <StandartButton>Loh</StandartButton>
                    <StandartButton>Loh</StandartButton>
                    <StandartButton>Loh</StandartButton>
                    <StandartButton>Loh</StandartButton>
                    <StandartButton>Loh</StandartButton>
                </div>
                <div className="TodoPosts">
                    <PostList deletePost={deletePost} posts={posts}/>
                </div>  
        </div>
    );
  }

export default TodolistPage;