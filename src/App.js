import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Pratice from './memes/meme'

import Home from './landingPage'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
// import Crud from "./crud"
// import Ndex from './Ndex';
//blog
import BlogAbout from "./components/Blogabout"
import BlogHome from "./components/BlogHome"
import BlogPost from "./components/Blogpost"
import BlogProjects from "./components/BlogProjects"
import BlogSinglePost from "./components/BlogsinglePost"
import Contact from './components/contact';



function App() {
  return (
      <Router>
        <Navbar/>
    <Routes>
        <Route exact path='/'  element={<Home />} />
         {/* <Route exact path='/Crud'  element={<Crud />} />
            <Route exact path='/Ndex'  element={<Ndex />} /> */}
            {/* /Blog/ */}
            
            <Route exact path='/home'  element={<BlogHome />} />
            <Route exact path='/about'  element={<BlogAbout />} />
            <Route exact path='/post/:slug'  element={<BlogSinglePost />} />
            <Route exact path='/post'  element={<BlogPost />} />
            <Route exact path='/projects'  element={<BlogProjects />} />
            <Route exact path='/Contact'  element={<Contact />} />


    </Routes>
<Footer/>
    </Router>

  );
}

export default App;
