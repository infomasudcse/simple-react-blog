import { Link } from "react-router-dom";

const NotDound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>This can not be found</p>
            <Link to="/">Got to Homepage...</Link>
        </div>
     );
}
 
export default NotDound
