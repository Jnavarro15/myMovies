import React from 'react'

function Result(props) {
  return (
  
    <div className="result" >
      <img src={props.poster} alt="" />
      <div className='movie-info'>
        <h3>{props.movie.original_title}</h3>
        <span>{props.movie.vote_average.toFixed(1)}</span>
      </div>
      <div className="movie-over">
        <h2>Overview:<br/><br/></h2>
        <p>{props.movie.overview}</p>
      </div>
    </div>
  )
}

export default Result 
