import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  // set up state for team members
  const [members, setMembers] = useState("");
  return (
    <div className="App">

      <form onSubmit={event => {
        event.preventDefault();
      }}>

        <label> Full name<input onChange={event => setMembers(event.target.value)}

          maxLength='30'
          placeholder="name"
          ip='nameInput'
          name='name'
          type='text'
          />


        </label>

        <br/>
        <input type="submit"/>

      </form>

      <h3>Team Roster {members} </h3>
     
    </div>
  );
}

export default App;
