import '../App.css';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticlesListPage from './ArticlesListPage';
import ArticlePage from './ArticlePage';
import AboutPage from './AboutPage';
import ErrorPage from './ErrorPage';
import NavBar from '../NavBar';

const MainRoutes = () => {
  return (
    <Router>
      <NavBar />
      <div className='page-body'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles-list' element={<ArticlesListPage />} />
          <Route path='/article/:id' element={<ArticlePage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainRoutes;
