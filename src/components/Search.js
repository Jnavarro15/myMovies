import React from 'react';

function Search({ handleOnSubmit, handleOnChange }) {
  return (
    <section className="searchbox-wrap">
      <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onChange={handleOnChange}
        

      />
      </form>
      
    </section>
  )
}

export default Search
