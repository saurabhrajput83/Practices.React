import {requestDefaults} from './baseService';
import Config from '../AppSettings';

export var getAllProducts = function() {
    var apiUrl = Config.baseApiUrl + 'Product/GetAllProducts';
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var getAllActiveProducts = function() {
    var apiUrl = Config.baseApiUrl + 'Product/GetAllActiveProducts';
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var getProductById = function(id) {
    var apiUrl = Config.baseApiUrl + 'Product/GetProductById/'+id;
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var addProduct = function(productModel) {
    var apiUrl = Config.baseApiUrl + 'Product/InsertProduct';
    return fetch(apiUrl,{
        method: 'POST',
        headers: requestDefaults.headers,
        body: JSON.stringify(productModel)
    });
};

export var updateProduct = function(productModel) {
    var apiUrl = Config.baseApiUrl + 'Product/UpdateProduct';
    return fetch(apiUrl,{
        method: 'PUT',
        headers: requestDefaults.headers,
        body: JSON.stringify(productModel)
    });
}

export var deleteProduct = function(id) {
    var apiUrl = Config.baseApiUrl + 'Product/DeleteProduct?id='+id;
    return fetch(apiUrl,{
        method: 'DELETE',
        headers: requestDefaults.headers
    });
}

