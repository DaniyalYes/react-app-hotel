import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Destionations from './components/Destinations/Home';
import SinglePage from './SinglePage/SinglePgae';
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/blog-single-page/BlogSingle';
import Testimonial from './components/Testimonail/Testimonail';
import Contact from './components/Contact/Contact';
import Login from './components/login/Login';
import Register from './components/login/Register';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/gallery' exact element={<Gallery/>} />
        <Route path='/destination' exact element={<Destionations/>} />
        <Route path='/singlepage/:id' exact element={<SinglePage/>} />
        <Route path='/blog' exact element={<Blog/>} />
        <Route path='/blogsingle/:id' exact element={<BlogSingle/>} />
        <Route path='/testimonail' exact element={<Testimonial/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/sign-in' exact element={<Login/>} />
        <Route path='/register' exact element={<Register/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
