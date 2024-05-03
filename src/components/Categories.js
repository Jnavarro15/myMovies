import React from 'react'


function Categories({ handleCategoryChange, selectedButton, setSelectedButton }) {

    

    const handleButtonClick = (buttonName) => {
        handleCategoryChange(buttonName);
        setSelectedButton(buttonName);
      // You can add logic here to handle button clicks, such as fetching data based on the selected button
    };


  return (
    <div className='category'>
      <button
        className={selectedButton === 'discover' ? 'selected' : 'unselected'}
        onClick={() => handleButtonClick('discover')}
      >
        Discover
      </button>
      <button
        className={selectedButton === 'trending' ? 'selected' : 'unselected'}
        onClick={() => handleButtonClick('trending')}
      >
        Trending
      </button>
      <button
        className={selectedButton === 'topRated' ? 'selected' : 'unselected'}
        onClick={() => handleButtonClick('topRated')}
      >
        Top Rated
      </button>
      <button
        className={selectedButton === 'nowPlaying' ? 'selected' : 'unselected'}
        onClick={() => handleButtonClick('nowPlaying')}
      >
        Now Playing
      </button>
    </div>
  )
}

export default Categories
