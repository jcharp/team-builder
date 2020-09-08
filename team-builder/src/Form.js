import React from 'react';
import './App.css';


function Form() {

return(
  <form>
      <label>
          Name
          <imput/>
      </label>

      <label>
          Email
          <input />
      </label>

      <label>
          Rone
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