import React, { memo, useEffect} from 'react';

function Departments(props) {

    console.log("Departments Component init", props);

    const departments = props.departments;
    
    useEffect(()=>{
        console.log("Departments Component useEffect");
    },[props.departments]);
    
    return (
        <>
            {departments.length>0 ? 
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Is Active</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {departments && departments.length>0 && departments.map((item)=>{
                        return <tr key={item.departmentId}>
                            <td>{item.departmentId}</td>
                            <td>{item.departmentName}</td>
                            <td>{item.departmentDescription}</td>
                            <td>{''+item.isActive}</td>
                            <td>
                                <button className="btn btn-dark m-1" onClick={props.editDepartment} 
                                id={item.departmentId}>Edit</button>
                                <button className="btn btn-danger m-1" onClick={props.deleteDepartment} 
                                id={item.departmentId}>Delete</button>
                            </td>   
                        </tr>
                    })}
                </tbody>
            </table>: 
            <h4 className='text-danger'>No Departments found.</h4>}
        </>
    );
};

export default memo (Departments);