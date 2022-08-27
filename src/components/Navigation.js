import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
  <>
  {/* class="navbar navbar-dark bg-dark" */}
  <div>
   <nav className="nav nav-tabs navbar-black bg-370617">
     <li className="nav-item"> <a className={currentPage === 'Arjun' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Arjun')} href="#arjun" >Arjun 🌸</a> </li>
     <li className="nav-item"> <a className={currentPage === 'Winta' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('Winta')}  href="#winta">Winta 🍇</a>  </li> 
     <li className="nav-item"> <a className={currentPage === 'Tudor' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Tudor')} href="#tudor">Tudor 🍒</a>  </li> 
     <li className="nav-item"> <a className={currentPage === 'Game' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Game')} href="#game">Game 🎮</a>  </li>
  </nav>
  </div>
  
  </>
  );
}

export default Navigation;
