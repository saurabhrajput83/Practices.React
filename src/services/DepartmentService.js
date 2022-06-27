import {requestDefaults} from './baseService';
import Config from '../AppSettings';

export var getAllDepartments = function() {
    var apiUrl = Config.baseApiUrl + 'Department/GetAllDepartments';
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var getAllActiveDepartments = function() {
    var apiUrl = Config.baseApiUrl + 'Department/GetAllActiveDepartments';
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var getDepartmentById = function(id) {
    var apiUrl = Config.baseApiUrl + 'Department/GetDepartmentById/'+id;
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var addDepartment = function(departmentModel) {
    var apiUrl = Config.baseApiUrl + 'Department/InsertDepartment';
    return fetch(apiUrl,{
        method: 'POST',
        headers: requestDefaults.headers,
        body: JSON.stringify(departmentModel)
    });
};

export var updateDepartment = function(departmentModel) {
    var apiUrl = Config.baseApiUrl + 'Department/UpdateDepartment';
    return fetch(apiUrl,{
        method: 'PUT',
        headers: requestDefaults.headers,
        body: JSON.stringify(departmentModel)
    });
}

export var deleteDepartment = function(id) {
    var apiUrl = Config.baseApiUrl + 'Department/DeleteDepartment?id='+id;
    return fetch(apiUrl,{
        method: 'DELETE',
        headers: requestDefaults.headers
    });
}

