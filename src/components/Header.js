import React from 'react';

const Header = ({ tagline }) => (
  <header className='top'>
    <h1>
      Catch
      <span className='ofThe'>
        <span class='of'>Of</span>
        <span class='the'>the</span>
      </span>
      Day
    </h1>
    <h3 className='tagline'>
      <span>{tagline}</span>
    </h3>
  </header>
);

export default Header;
