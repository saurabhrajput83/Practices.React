import {requestDefaults} from './baseService';
import Config from '../AppSettings';

export var getAllBrands = function() {
    var apiUrl = Config.baseApiUrl + 'Brand/GetAllBrands';

    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var getAllActiveBrands = function() {
    var apiUrl = Config.baseApiUrl + 'Brand/GetAllActiveBrands';
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var getBrandById = function(id) {
    var apiUrl = Config.baseApiUrl + 'Brand/GetBrandById/'+id;
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var addBrand = function(brandModel) {
    var apiUrl = Config.baseApiUrl + 'Brand/InsertBrand';
    return fetch(apiUrl,{
        method: 'POST',
        headers: requestDefaults.headers,
        body: JSON.stringify(brandModel)
    });
};

export var updateBrand = function(brandModel) {
    var apiUrl = Config.baseApiUrl + 'Brand/UpdateBrand';
    return fetch(apiUrl,{
        method: 'PUT',
        headers: requestDefaults.headers,
        body: JSON.stringify(brandModel)
    });
}

export var deleteBrand = function(id) {
    var apiUrl = Config.baseApiUrl + 'Brand/DeleteBrand?id='+id;
    return fetch(apiUrl,{
        method: 'DELETE',
        headers: requestDefaults.headers
    });
}

