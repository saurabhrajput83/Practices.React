import React from 'react';
import {ErrorMessage, useField} from 'formik';


function TextAreaField(props) {
    let wrapperClass = 'form-group';
    if(props.error) {
        wrapperClass += " has-error"
    }

    const[field, meta] = useField(props);

    return (
        <>
            <div className={wrapperClass}>
                <label htmlFor={props.id}>{props.label}</label>
                <textarea className='form-control shadow-none' 
                id = {props.id} rows = {props.rows} 
                {...field}>
                </textarea>
                <ErrorMessage component='span' name={field.name} className='text-danger' />
            </div>
        </>
    );
}

export default TextAreaField;