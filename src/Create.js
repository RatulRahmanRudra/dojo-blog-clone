import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const  [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading, setIsLaoding] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blog = { title, body, author };
    try{
      setIsLaoding(true);
      await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)  
      });
    }catch(e){
      alert(e);
    }
    setIsLaoding(false);
    history.push('/');
  }

  return ( 
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit = {handleSubmit}>
        <label>Title: </label>
        <input 
          value = { title }
          onChange = { (event) => setTitle(event.target.value) }
          type="text"
          required
        />

        <label>Body: </label>
        <textarea 
          value = { body }
          onChange = { (event) => setBody(event.target.value) }
          required
        />

        <select
          value = { author }
          onChange = { (event) => setAuthor(event.target.value) }
        >
          <option value='mario'>mario</option> 
          <option value='yoshi'>yoshi</option> 
        </select>

        { !isLoading && <button >Submit</button>}
        { isLoading && <button >Adding...</button>}

      </form>
      {title}
      {body}
      {author}
    </div>
  );
}
 
export default Create;