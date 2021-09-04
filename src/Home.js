import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const { data:blogs, isLoading } = useFetch('http://localhost:8000/blogs');

  return ( 
    <div className="home">
      { isLoading && <div>loading...</div> }
      { blogs && <BlogList blogs={blogs} title = 'All blogs' /> }
    </div>
  );
}
 
export default Home;