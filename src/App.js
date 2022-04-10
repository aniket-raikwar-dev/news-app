import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewsFullData from './components/NewsFullData';

function App() {

  const [news, setNews] = useState([]);

  var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: 'all', lang: 'en', sort_by: 'relevancy', page: '1'},
    headers: {
      'x-api-key': `${process.env.API_KEY}`
    }
  };
  const getData = async () => {
    await axios.request(options).then(function (response) {
      console.log(response.data.articles);
      setNews(response.data.articles)
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="bg-gray-100 ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News news={news} />} />
          <Route path="/newsBlog/:id" element={<NewsFullData news={news} />} />
        </Routes>
        <Footer />
       </Router>
    </div>
  );
}

export default App;
