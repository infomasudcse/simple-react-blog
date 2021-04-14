import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ioshi');


    return ( 
        <div className="create">
            <h2>Add New Blog ! </h2>
            <form action="" className="form">
                <label htmlFor="" className="form-label">Blog Title</label>
                <input type="text" className="form-control" required value={title} onChange={(e)=> setTitle(e.target.value)}/>

                <label htmlFor="" className="form-label">Blog Body</label>                
                <textarea type="text" className="form-control" value={body} onChange={(e)=> setBody(e.target.value)}required></textarea>

                <label htmlFor="" className="form-label">Author</label>

                <select value={author} onChange={(e)=> setAuthor(e.target.value)}name="" id="" className="form-control">
                    <option value="Mario" >Mario</option>
                    <option value="Ioshi">Ioshi</option>
                </select>
                <button className="btn btn-info">Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;