import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Categories from './components/Categories';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selectedButton, setSelectedButton] = useState('discover');
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  const API_KEY = '7c24c7e4a99e51dc0b99079afac010c2'


  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
  const TOPRATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  const NOWPLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  const TRENDING_API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`

  useEffect(() => {
    axios(FEATURED_API).then(({ data }) => {
      setResults(data.results || []);
    }).catch(error => {
      console.error('Error fetching search results:', error)
    });
  }, [FEATURED_API]);


  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearchPerformed(true)
    axios(SEARCH_API + searchTerm).then(({ data }) => {
      setResults(data.results || []);
      console.log(data.results);
    }).catch(error => {
      console.error('Error fetching search results:', error);
    });
  }

  const handleCategoryChange = (category) => {
  
    if (category === 'trending' && selectedButton !== 'trending') {
      axios(TRENDING_API).then(({ data }) => {
        setResults(data.results || []);
  
      }).catch(error => {
        console.error('Error fetching trending movies:', error)
      });
    } 
    else if (category === 'discover' && selectedButton !== 'discover') {
      axios(FEATURED_API).then(({ data }) => {
        setResults(data.results || []);
      }).catch(error => {
        console.error('Error fetching discover movies:', error)
      });
    } 
    else if (category === 'topRated' && selectedButton !== 'topRated') {
      axios(TOPRATED_API).then(({ data }) => {
        setResults(data.results || []);
  
      }).catch(error => {
        console.error('Error fetching top rated movies:', error)
      });
    }
    else if (category === 'nowPlaying' && selectedButton !== 'nowPlaying'){
      axios(NOWPLAYING_API).then(({ data }) => {
        setResults(data.results || []);
  
      }).catch(error => {
        console.error('Error fetching movies now playing:', error)
      });
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }
 

  return (
    <div className="App">
      <header>
        <h1>myMovies</h1>
      </header>
      <main>
        <Categories handleCategoryChange={handleCategoryChange} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
        <Search handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} />
        {searchPerformed && results.length === 0 ? (
          <div className="no-results-message">
            <h2>
            No movies found. Please try a different title.
            </h2>
          </div>
          ) : (
            <Results results={results}  />
          )}
      </main>
    </div>
  );

  
}

export default App;
