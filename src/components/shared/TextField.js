import React from 'react';
import {ErrorMessage, useField} from 'formik';

function TextField(props) {
    let wrapperClass = 'form-group';
    if(props.error) {
        wrapperClass += " has-error"
    }

    const[field, meta] = useField(props);
    return (
        <>
            <div className={wrapperClass}>
                <label htmlFor={props.id}>{props.label}</label>
                <input type='text' className='form-control shadow-none'
                id = {props.id} 
                {...field} />
                <ErrorMessage component='span' name={field.name} className='text-danger' />
            </div>
        </>
    );
}

export default TextField;