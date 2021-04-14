import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ioshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{ "content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('New blog added ');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add New Blog ! </h2>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="" className="form-label">Blog Title</label>
                <input type="text" className="form-control" required value={title} onChange={(e)=> setTitle(e.target.value)}/>

                <label htmlFor="" className="form-label">Blog Body</label>                
                <textarea type="text" className="form-control" value={body} onChange={(e)=> setBody(e.target.value)}required></textarea>

                <label htmlFor="" className="form-label">Author</label>

                <select value={author} onChange={(e)=> setAuthor(e.target.value)}name="" id="" className="form-control">
                    <option value="Mario" >Mario</option>
                    <option value="Ioshi">Ioshi</option>
                </select>

                { !isPending && <button className="btn btn-info">Add Blog</button> }
                { isPending && <button className="btn btn-info">Adding Blog</button> }
            </form>
        </div>
     );
}
 
export default Create;