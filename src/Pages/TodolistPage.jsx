import StandartButton from "../Components/StandartButton/StandartButton";
import './TodolistPage.css'
import { useEffect, useState } from "react";
import PostList from "../Components/PostList/PostList";
import StandartInput from "../Components/StandartInput/StandartInput";
import Calendar from "../Components/Calendar/Calendar.jsx";
import axios from "axios";
import FetchService from "../Utils/FetchService";
import Loader from "../Components/Loader/Loader";

function TodolistPage() {

    const initPosts = [
        {title: "1", body: "2", id: 1, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
        {title: "1", body: "2", id: 2, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
        {title: "1", body: "2", id: 3, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
        {title: "1", body: "2", id: 4, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
        {title: "1", body: "2", id: 5, date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)"},
    ]

    const initNotes = [
            {
              postId: 1,
              id: 1,
              name: "id labore ex et quam laborum",
              email: "Eliseo@gardner.biz",
              body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            }
    ]

    const [posts, setPosts] = useState(initPosts)
    const [notes, setNotes] = useState(initNotes)
    const [postCreator, setPostCreator] = useState({title: '', body: ''})
    const [selectedDate ,setSelectedDate] = useState(new Date().getDate())
    const [selectedFullDate, setSelectedFullDate] = useState(new Date())
    const [isPostsFetching, setIsPostsFetching] = useState(false)
    const [isNotesFetching, setIsNotesFetching] = useState(false)

    let setNewPost = () => {
        let date = new Date();
        setPosts([...posts, {title: postCreator.title, body: postCreator.body, date: date.toString(), id: Date.now()}])
        postCreator.title = ''
        postCreator.body = ''
    }
    let deletePost = (id) => {
        setPosts(posts.filter( el => el.id !== id))
    }

    let fetchPosts = async () => {
        setIsPostsFetching(true)
        let response = await FetchService.getPosts(3, selectedDate);
        setPosts(response.data)
        setIsPostsFetching(false)
    }

    let fetchNotes = async () => {
        setIsNotesFetching(true)
        let response = await FetchService.getNotes(selectedDate)
        setNotes(response.data)
        setIsNotesFetching(false)
    }

    useEffect( () => {
        fetchPosts()
        fetchNotes()
    }, [selectedDate] )

    return (
        <div className="TodolistPageWrapper">
                <div className="Calendar">
                    <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedFullDate={selectedFullDate} setSelectedFullDate={setSelectedFullDate}/>
                </div>
                <div className="PostSettings">
                    <StandartInput value={postCreator.title} onChange={e => setPostCreator({body: postCreator.body, title: e.target.value})} placeholder="placeholder"/>
                    <StandartInput value={postCreator.body} onChange={e => setPostCreator({title: postCreator.title, body: e.target.value})} placeholder="placeholder"/>
                    <StandartButton onClick={setNewPost}>Submit</StandartButton>
                </div>
                <div className="Filters">
                    {
                        isNotesFetching ?
                        <Loader/>
                        :
                        <PostList deletePost={deletePost} posts={notes}/>
                    }
                </div>
                <div className="TodoPosts">
                    {
                        isPostsFetching ?
                        <Loader/>
                        :
                        <PostList deletePost={deletePost} posts={posts}/>
                    }
                </div>  
        </div>
    );
  }

export default TodolistPage;