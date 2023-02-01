import "./TodolistPage.css";
import { useEffect, useState } from "react";
import PostList from "../Components/PostList/PostList";
import NoteList from "../Components/NoteList/NoteList";
import Calendar from "../Components/Calendar/Calendar.jsx";
import FetchService from "../Utils/FetchService";
import Loader from "../Components/Loader/Loader";
import { useSortAndSearchPosts } from "../Hooks/hooks";
import PostCreator from "../Components/PostCreator/PostCreator";
import PostFilters from "../Components/PostFilters/PostFilters";
import ThemeCreator from "../Components/ThemeCreator/ThemeCreator";

function TodolistPage() {
  const initPosts = [
    {
      title: "1",
      body: "2",
      id: 1,
      date: "Tue Jan 24 2023 16:04:51 GMT+0300 (Москва, стандартное время)",
    },
  ];

  const initNotes = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
  ];

  const [themes, setThemes] = useState([
    {
      name: "defaultTheme1",
      value: "defaultTheme1",
      color: { r: 56, g: 56, b: 56, a: 1 },
    },
    { name: "None", value: "None", color: null },
  ]);

  const [posts, setPosts] = useState(initPosts);
  const [notes, setNotes] = useState(initNotes);

  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [selectedFullDate, setSelectedFullDate] = useState(new Date());
  const [isPostsFetching, setIsPostsFetching] = useState(false);
  const [isNotesFetching, setIsNotesFetching] = useState(false);
  const [filter, setFilter] = useState();
  const [searchInput, setSearchInput] = useState("");

  const sortedPosts = useSortAndSearchPosts(searchInput, filter, posts);

  let deletePost = (id) => {
    setPosts(posts.filter((el) => el.id !== id));
  };

  let deleteNote = (id) => {
    setNotes(notes.filter((el) => el.id !== id));
  };

  let fetchPosts = async (selectedDate) => {
    setIsPostsFetching(true);
    let response = await FetchService.getPosts(3, selectedDate);
    setPosts(response.data);
    setIsPostsFetching(false);
  };

  let fetchNotes = async (selectedDate) => {
    setIsNotesFetching(true);
    let response = await FetchService.getNotes(selectedDate);
    setNotes(response.data);
    setIsNotesFetching(false);
  };

  useEffect(() => {
    fetchPosts(selectedDate);
    fetchNotes(selectedDate);
  }, [selectedDate]);

  return (
    <div className="TodolistPageWrapper">
      <div className="Calendar">
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedFullDate={selectedFullDate}
          setSelectedFullDate={setSelectedFullDate}
        />
      </div>
      <div className="PostSettings">
        <PostCreator posts={posts} setPosts={setPosts} themes={themes} />
        <PostFilters
          setFilter={setFilter}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <ThemeCreator themes={themes} setThemes={setThemes} />
      </div>
      <div className="Notes">
        {isNotesFetching ? (
          <Loader />
        ) : (
          <NoteList deleteNote={deleteNote} notes={notes} />
        )}
      </div>
      <div className="TodoPosts">
        {isPostsFetching ? (
          <Loader />
        ) : (
          <PostList
            deletePost={deletePost}
            posts={sortedPosts}
            themes={themes}
          />
        )}
      </div>
    </div>
  );
}

export default TodolistPage;
