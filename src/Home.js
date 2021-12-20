//to use hooks we must import useState
import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {

  const { data : blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
  //Note : id should be unique inorder to  iterate lists.

  return ( 
    <div className="home">
      {isLoading && <div><b>Loading....</b></div>}
      {error && <div>error</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs "/>}
    </div>
    
   );
}
 
export default Home;