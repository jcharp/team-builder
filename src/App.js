import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';





function App() {
  const [members, setMembers] = useState('');
  return (
    <div className="App">
      
      <form>
        <label>Full name

      
        <input
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
