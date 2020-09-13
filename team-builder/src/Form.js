import React from 'react';
import './App.css';



function Form(props) {
    console.log(props);
return(
  <form>
      <label>
          Name : 
         
          <imput type="text"/>
      </label>
    <br/>

      <label>
          Email 
          <input type="email"/>
      </label>
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