import React from 'react';
import './Textarea.module.css';
export default function Textarea(props) {
  return (
    <>
      <label htmlFor={props.htmlFor}>{props.name}</label>
      <textarea onChange={props.onChange} name={props.name} />
    </>
  );
}
