import BlogList from "./BlogList";
import useFetch from "./useFetch";
// import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const { data: blogs, isLoading } = useFetch("http://localhost:8000/blogs");
  // const [len, setLen] = useState(blogs.length);

  return (
    <div className="home">
      {isLoading && <div>loading...</div>}
      {blogs && blogs.length ? (
        <BlogList blogs={blogs} title="All blogs" />
      ) : !isLoading ? (
        <h1>
          No blog found <Link to="/create">create one</Link>{" "}
        </h1>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
