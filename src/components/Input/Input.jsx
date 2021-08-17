import React from 'react';
import './Input.module.css';
export default function Input(props) {
  return (
    <>
      <label htmlFor={props.htmlFor}>{props.name}</label>
      <input onChange={props.onChange} type={props.type} name={props.name} />
    </>
  );
}
