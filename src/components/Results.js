import React from 'react'
import Result from './Result';

function Results({ results }) {
  const  IMG_API = "https://image.tmdb.org/t/p/w1280"
  return (
    // <section className="results">
    //   {results.map(result => (
    //     <Result key={result.imdbID} result={result} openPopup={openPopup} />
    //   ))}
    // </section>
    
    <section className="results">
      {results.map(movie => {
          let moviePoster = 'https://via.placeholder.com/150'; // Placeholder image
          if (movie.poster_path && movie.poster_path !== '') {
            moviePoster =  IMG_API + movie.poster_path;
            return <Result movie={movie} key={movie.id} poster={moviePoster} />;
          }
          return null; // If poster_path is not available or empty, don't render Result component
        })
      
      
      
      }
    </section>
  )
}

export default Results

