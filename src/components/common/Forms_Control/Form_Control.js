import React from 'react'
import styles from './Form_Control.module.css'
import { Field } from 'redux-form'

export const Element = Element => ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error;
    return (
      <div className={ styles.formControl + " " + (hasError ? styles.error : "") }>
        <div><Element {...input} {...props} /></div>
        { hasError && <span> { error } </span> }
      </div>
    );
  };
  export const Frex = (placeholder, name, validate, component, props ={}, text="" ) => (
    <div>
         <Field  placeholder={placeholder}   name={name}  validate={validate}  component={component}        
         {...props}/> 
         {text} 
         </div>
 )

