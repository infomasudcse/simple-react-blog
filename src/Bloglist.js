const Bloglist = (props) => {
    const { blogs, title } = props;
    
    return ( 
        <div className="mt-3">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
            <div className="blog-preview col-12" key={blog.id}>
                <h2 className="text-info mt-5">{blog.title}</h2>
                <p>Written by {blog.author}</p> 
                
                <p>{blog.body}</p>                  

            </div>
            ))}
       </div>
     );
}
 
export default Bloglist;