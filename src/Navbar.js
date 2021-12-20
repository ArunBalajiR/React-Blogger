import { Link } from 'react-router-dom';
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to="/">Home</Link>
      <span>&nbsp;&nbsp;</span>
      <Link to="/create">Create Post</Link>
    </nav>
   );
}
 
export default Navbar;