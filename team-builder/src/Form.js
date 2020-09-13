import React, { useState } from 'react';
import './App.css';



function Form(props) {
    // console.log(props);
    const [person, setPerson] = useState({name: ""});

    const handleChanges = (event) => {
      setPerson({name: event.target.value})
        console.log('evetn', person)
    }

return(
  <form>
      <label htmlFor='name'>Name :</label>
      <input id="name" type="text" placeholder="Full Name" onChange={handleChanges}/>
     
    <br/>

      <label htmlFor='email'>Email </label>
      <input id='email' type="email" placeholder='Enter email address'/>
      
    <br/>

      <label>
          Role
          <select>
              <option>Backend Developer</option>
              <option>Frontedn Developer</option>
              <option>Designer</option>
              <option>Food Service</option>
          </select>
      </label>


  </form>


)

}

export default Form;