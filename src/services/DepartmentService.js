import Config from '../AppSettings';

export var getAllDepartments = function() {
    var apiUrl = Config.baseUrl + 'Department/GetAllDepartments';
    return fetch(apiUrl, {
        method: "GET",
        rejectUnauthorized: false
    });
};

export var getAllActiveDepartments = function() {
    var apiUrl = Config.baseUrl + 'Department/GetAllActiveDepartments';
    return fetch(apiUrl);
};

export var getDepartmentById = function(id) {
    var apiUrl = Config.baseUrl + 'Department/GetDepartmentById/'+id;
    return fetch(apiUrl);
};

export var addDepartment = function(departmentModel) {
    var apiUrl = Config.baseUrl + 'Department/InsertDepartment';
    return fetch(apiUrl,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(departmentModel)
    });
};

export var updateDepartment = function(departmentModel) {
    var apiUrl = Config.baseUrl + 'Department/UpdateDepartment';
    return fetch(apiUrl,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(departmentModel)
    });
}

export var deleteDepartment = function(id) {
    var apiUrl = Config.baseUrl + 'Department/DeleteDepartment?id='+id;
    return fetch(apiUrl,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}

