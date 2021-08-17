import React from 'react';
import styles from './Button.module.css';
export default function Button(props) {
  return (
    <div className={styles.divButton}>
      <button type={props.type}>{props.nome}</button>
    </div>
  );
}
