import React, { useState } from 'react';
import Arjun from './pages/Arjun';
import Winta from './pages/Winta';
import Tudor from './pages/Tudor';
import Game from './pages/Game';
import Navigation from './Navigation';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Game');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Game') {
      return <Game />;
    }
    if (currentPage === 'Winta') {
      return <Winta />;
    }
    if (currentPage === 'Tudor') {
      return <Tudor />;
    }
    return <Arjun />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

  <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>

  );
}
