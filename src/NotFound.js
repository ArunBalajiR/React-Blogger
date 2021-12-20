import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>404</h1>
      <h2>The page you are trying to fetch is not found</h2>
      <br></br>
      <h4><Link to="/">Go to Homepage</Link></h4>
    </div>
   );
}
 
export default NotFound;