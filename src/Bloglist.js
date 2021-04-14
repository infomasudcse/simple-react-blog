import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist = (props) => {
    const { blogs, title } = props;
    
    return ( 
        <div className="mt-3">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
            <div className="blog-preview col-12" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2 className="text-info mt-5">{blog.title}</h2>
                <p>Written by {blog.author}</p> 
                
                <p>{blog.body}</p>                  
                </Link>
            </div>
            ))}
       </div>
     );
}
 
export default Bloglist;