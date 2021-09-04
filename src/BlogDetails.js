// @ts-nocheck
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data:blog, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`)
  const history = useHistory();
  const handleDelete = async () => {
    try{
      await fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE'
      });
      history.push('/');
    }catch(e){
      alert(e);
    }
  } 

  return (
    <div className="blog-details">
      { isLoading && <div>Loading</div> }
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author} </p>
          <div>{ blog.body }</div>
        </article>
      )}
      <button onClick = {handleDelete}>delete</button>
    </div>
  );
}
 
export default BlogDetails;


/*

-> MERN
-----------------
  M -> mongo -> db
  E -> Express -> backend 
  R -> React -> frontend
  N -> Node -> backend engine

-> MEAN
-----------------
  M -> mongo 
  E -> Express
  A -> Angular -> Frontend
  N -> Node

-> MEVN
-----------------
  M -> mongo 
  E -> Express
  V -> VUE
  N -> Node

*/