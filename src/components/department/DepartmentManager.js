import React, { useEffect, useState } from 'react';
import Departments from './Departments';
import AddEditDepartment from './AddEditDepartment';
import * as departmentService from '../../services/DepartmentService';

function DepartmentManager (props) {

    console.log("DepartmentManager init");

    const defaultDepartment = {
        departmentId: 0,
        departmentName: '',
        departmentDescription: '',
        isActive: false
    };

    const [departments, setDepartments] = useState([]);
    const [department, setDepartment] = useState(defaultDepartment);

  
    useEffect(()=> {
        console.log("DepartmentManager useEffect");
        loadDepartments();
    }, []);

    const loadDepartments = () => {
        console.log("DepartmentManager loadDepartments");
        
        departmentService
        .getAllDepartments()
        .then((response)=> response.json())
        .then((data)=> {
            console.log("DepartmentManager loadDepartments data", data)
            setDepartments(data)
        })
        .catch((error)=>console.log(error));
    };
   
    const addDepartment = (event)=> {

        console.log("DepartmentManager addDepartment", event);
        setDepartment(defaultDepartment);
        document.getElementById("divAddEditDepartmentModalOpen").click();
        
    };

    const editDepartment = (event)=> {

        console.log("DepartmentManager editDepartment", event);
        let departmentId = parseInt(event.target.id);
        departmentService
        .getDepartmentById(departmentId)
        .then((response)=>response.json())
        .then((data)=> {
            setDepartment(data);
            document.getElementById("divAddEditDepartmentModalOpen").click();
        });
    };

    const deleteDepartment = (event)=> {

        console.log("DepartmentManager deleteDepartment", event);
        let departmentId = parseInt(event.target.id);
        departmentService
        .deleteDepartment(departmentId)
        .then((response)=> {
            loadDepartments();
        })
        .catch((error)=> console.log(error));
    };

    const createUpdateDepartment = (event, values)=> {
        console.log("DepartmentManager createUpdateDepartment", event, values);
        if(values.departmentId > 0) {
            departmentService
            .updateDepartment(values)
            .then((response)=> {
                loadDepartments();
                document.getElementById("divAddEditDepartmentModalOpen").click();   
            })
            .catch((error)=> console.log(error));
        } else {
            departmentService
            .addDepartment(values)
            .then((response)=> {
                loadDepartments();
                document.getElementById("divAddEditDepartmentModalOpen").click();   
            })
            .catch((error)=> console.log(error));
        }
    };

    return (
        <>
            <div className='container mt-3'>
                <h4 className='bg-light p-2 rounded'>
                    Departments
                </h4>
                <p>
                    <button type="button" className='btn btn-primary' onClick={addDepartment}>Add New Department</button>
                    <button type="button" className='btn btn-primary invisible' id='divAddEditDepartmentModalOpen' data-bs-toggle="modal" data-bs-target="#divAddEditDepartmentModal">Add New Department</button>
                </p>
                <Departments departments={departments} editDepartment={editDepartment} deleteDepartment={deleteDepartment} />
            </div>
            <div className="modal fade" id="divAddEditDepartmentModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            Add/Edit Department
                        </div>
                        <div className="modal-body">
                            <AddEditDepartment values={department} createUpdateHandler={createUpdateDepartment}/>
                        </div>
                        <div className="modal-footer">
                            <button id="divAddEditDepartmentModalClose" type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    

};

export default DepartmentManager;