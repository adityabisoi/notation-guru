import React from 'react';
import './togglebutton.css';


const ToggleButton = (props) => {
return (
  <div>
    <input type="checkbox" className="checkbox" id="chk" />
    <label
      className="label"
      for="chk"
      onClick={(props.toggleMode)}
    >
      <i className="fas fa-moon"></i>
      <i className="fas fa-sun"></i>
      <div className="ball"></div>
    </label>
  </div>
);
};

export default ToggleButton;

