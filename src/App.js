import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import ReviewStatic from './components/ReviewStatic/ReviewStatic';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/reviews" element={<ReviewStatic></ReviewStatic>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/blogs' element={blogs.map(blog =>
          <Blogs
            key={blog.id}
            blog={blog}
          ></Blogs>)} />
        <Route path='/about' element={<About></About>} />
        <Route path='*' element={<NoMatch></NoMatch>} />
      </Routes>
    </div>
  );
}

export default App;
