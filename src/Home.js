import { useState, useEffect } from 'react';
import BlogList from './BlogList';

/*const Home = () => {
  //let name = 'Mario';
  const[name, setName] = useState('Mario');
  const[age, setAge] = useState(25);

  const handleClick = () =>{
    setName('Luigi');
    setAge(30);
  

    return ( 
        <div className="home">
          <h2>Homepage </h2>
          <p>{ name } is { age } years old</p>
          <button onClick={handleClick}>click me</button>
        </div>
     );useState
}*/


const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My New Website' , body: 'lorem ipsum...' , author: 'mario' , id: 1},
    {title: 'Welcome Party' , body: 'lorem ipsum...' , author: 'yoshi' , id: 2},
    {title: 'WebDev top tips' , body: 'lorem ipsum...' , author: 'mario' , id: 3} 
  ]);
    
  const handleDelete = (id) => {
     const newBlogs = blogs.filter(blog => blog.id !== id)
     setBlogs(newBlogs);
  }

  useEffect(() => {
  console.log('use effect ran')
  });

  return(
    <div className="home">
     <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
     {/*<BlogList blogs={blogs.filter((blog) => blog.author=== 'mario')} title="mario's blogs!" />*/}

    </div>
  ); 
}
 
export default Home;