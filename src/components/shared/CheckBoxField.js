import React from 'react';
import {useField} from 'formik';

function CheckBoxField(props) {
   
    const[field, meta] = useField(props);

    return (
        <>
            <div className="form-group">
                <div className='form-check'>
                    <input type="checkbox" 
                    className="form-check-input" 
                    {...field} {...props} />
                    <label htmlFor={props.id} className="form-check-label">{props.label}</label>
                </div>
            </div>
        </>
    );
}

export default CheckBoxField;