import React, { useState } from 'react';
import './App.css';
import './styles/body.css'
import '@shoelace-style/shoelace/dist/themes/light.css';

import Users from './components/users';
import Results from './components/results';
import Search from './components/search';


import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/');

function App() {
  const [albums, setAlbums] = useState([]);
  const [usersArr, setUsersArr] = useState([]);
  return (
    <div className="App">
      <Search users={usersArr} setAlbums={setAlbums}/>
      <div className="wrapper-col">
        <div className="col">
          <Users setAlbums={setAlbums} users={usersArr} setUsers={setUsersArr}/>
        </div>
        <div className="col">
          <Results albums={albums}/>
        </div>
      </div>
    </div>
  );
}

export default App;
