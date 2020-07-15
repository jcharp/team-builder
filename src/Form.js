import React, { useState } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';


function Form() {
    return(
        <div className="Form">
            <form>
                <label>
                    Name 
                    <input />
                </label>
                <label>
                    Email
                    <input />
                </label>
                <label>
                    Role
                    <select>
                        <option>Backend Developer</option>
                        <option>Frontend Developer</option>
                        <option>Mail Room Intern</option>
                        <option>CEO/Owner</option>


                    </select>
                </label>
            </form>

        </div>

    )
    
}


export default Form;