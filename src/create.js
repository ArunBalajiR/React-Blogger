import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle ] = useState("");
  const [body, setBody ] = useState("");
  const [author, setAuthor ] = useState("Arun Balaji");
  const [isAdding, setisAdding] = useState(false);
  const history = useHistory();

  const handleSubmit = (e)=>{
    //to prevent default action which is reload page
    e.preventDefault();
    const blog = { title,  body, author};
    setisAdding(true);
    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body : JSON.stringify(blog) 
    }).then(()=>{
      setisAdding(false);
      console.log("New Blog Added");
      // history.go(-1); //onestep back
      // history.go(1); //onestep forward
      history.push('/'); //respected page


    })
  }

  return ( 
    <div className="create">
      <h1>Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog Title </label>
        <input
          type="text"
          required
          value={ title }
          onChange={(e)=>setTitle(e.target.value)}

        />
        <label>Blog Content</label>
        
        <textarea
          cols="30" rows="10"
          required
          value={ body }
          onChange={(e)=> setBody(e.target.value)}
        />
        <label>Written By </label>
        <select 
          value={ author }
          onChange={(e)=> setAuthor(e.target.value)}
        >
          <option value="Arun Balaji">Arun Balaji</option>
          <option value="Vijaya Baskar">Vijaya Baskar</option>

        </select>
        { 
        !isAdding ?  <button>Add Blog Entry </button>
        : <button disabled>Adding Blog ... </button> }
        
        
        
      </form>
    </div>
   );
}
 
export default Create;