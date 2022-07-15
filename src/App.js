import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        "http://3.39.23.168:8080/api/diary?page=1&size=10"
      );
      setPosts(response.data.dtoList);
    };
    data();
  }, []);

  // 현재 페이지
  // size
  // 총 데이터의 개수
  // 끝 페이지
  const lastPage = currentPage * postsPerPage; // 10, 20, 30
  const firstPage = lastPage - postsPerPage; //
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts;
    return currentPosts;
  };

  return (
    <div className="App">
      {/* <Posts posts={posts} /> */}
      <Posts posts={currentPosts(posts)} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
