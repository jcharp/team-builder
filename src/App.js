import React, { useState } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Form from './Form';





function App() {
  const [members, setMembers] = useState('');
  return (
    <div className="App">
      
      <form onSubmit={event => {
        event.preventDefault();
      }}>
        <label>Full name <input onChange={event => setMembers(event.target.value)}

      
          maxLength='30'
          placeholder='name'
          id='nameInput'
          name='name'
          type="text"
          />
            </label>

        <br/>
        <input type="submit"/>

        

      </form>

      
      <h3> Team Roster {members}</h3>
     





    </div>
  );
}

export default App;




















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href=""
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
