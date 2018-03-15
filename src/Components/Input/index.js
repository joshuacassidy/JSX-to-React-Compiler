import React from 'react';

const Input = (props) => 
  <textarea onChange={props.transpile.bind(this)} defaultValue={props.input} ></textarea>


export default Input;
