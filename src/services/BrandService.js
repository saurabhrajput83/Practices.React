import Config from '../AppSettings';

export var getAllBrands = function() {
    var apiUrl = Config.baseUrl + 'Brand/GetAllBrands';
    return fetch(apiUrl, {
        method: "GET",
        rejectUnauthorized: false
    });
};

export var getAllActiveBrands = function() {
    var apiUrl = Config.baseUrl + 'Brand/GetAllActiveBrands';
    return fetch(apiUrl);
};

export var getBrandById = function(id) {
    var apiUrl = Config.baseUrl + 'Brand/GetBrandById/'+id;
    return fetch(apiUrl);
};

export var addBrand = function(brandModel) {
    var apiUrl = Config.baseUrl + 'Brand/InsertBrand';
    return fetch(apiUrl,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(brandModel)
    });
};

export var updateBrand = function(brandModel) {
    var apiUrl = Config.baseUrl + 'Brand/UpdateBrand';
    return fetch(apiUrl,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(brandModel)
    });
}

export var deleteBrand = function(id) {
    var apiUrl = Config.baseUrl + 'Brand/DeleteBrand?id='+id;
    return fetch(apiUrl,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}

