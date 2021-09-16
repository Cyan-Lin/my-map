import React from 'react';

import './main.scss';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Background from './components/Background.js';

const App = () => {
  return (
    <div className="container">
      <Background />
      <Header />
      <Content />
    </div>
  );
};

export default App;
