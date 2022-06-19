import React from 'react';
import {ErrorMessage, useField} from 'formik';

function SelectField(props) {
    let wrapperClass = 'form-group';
    if(props.error) {
        wrapperClass += " has-error"
    }
    const values = props.values;
    const[field, meta] = useField(props);
    return (
        <>
            <div className={wrapperClass}>
                <label htmlFor={props.id}>{props.label}</label>
                <select className='form-control shadow-none' 
                {...field}>
                    {values && values.length > 0 && values.map((item)=>{
                        return <option key={item.value} value={item.value}>{item.text}</option>
                    })}
                </select>
                <ErrorMessage component='span' name={field.name} className='text-danger' />
            </div>
        </>
    );
}

export default SelectField;