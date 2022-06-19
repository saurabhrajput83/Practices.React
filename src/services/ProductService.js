import Config from '../AppSettings';

export var getAllProducts = function() {
    var apiUrl = Config.baseUrl + 'Product/GetAllProducts';
    return fetch(apiUrl, {
        method: "GET",
        rejectUnauthorized: false
    });
};

export var getAllActiveProducts = function() {
    var apiUrl = Config.baseUrl + 'Product/GetAllActiveProducts';
    return fetch(apiUrl);
};

export var getProductById = function(id) {
    var apiUrl = Config.baseUrl + 'Product/GetProductById/'+id;
    return fetch(apiUrl);
};

export var addProduct = function(productModel) {
    var apiUrl = Config.baseUrl + 'Product/InsertProduct';
    return fetch(apiUrl,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productModel)
    });
};

export var updateProduct = function(productModel) {
    var apiUrl = Config.baseUrl + 'Product/UpdateProduct';
    return fetch(apiUrl,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productModel)
    });
}

export var deleteProduct = function(id) {
    var apiUrl = Config.baseUrl + 'Product/DeleteProduct?id='+id;
    return fetch(apiUrl,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}

