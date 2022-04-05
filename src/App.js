// import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
// import Home from './components/Home/Home'
// import Reviews from './components/Reviews/Reviews'
// import Dashboard from './components/Dashboard/Dashboard'
// import Blogs from './components/Blogs/Blogs'
// import About from './components/About/About'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Reviews from './components/Reviews/Reviews';
import useReviews from './hooks/useReviews';

function App() {
  const [reviews] = useReviews();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path='/reviews' element={reviews.map(review =>
          <Reviews
            key={review.id}
            review={review}
          ></Reviews>)} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='*' element={<NoMatch></NoMatch>} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
      </Routes> */}
    </div>
  );
}

export default App;
