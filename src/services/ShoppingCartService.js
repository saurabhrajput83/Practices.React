import {requestDefaults} from './baseService';
import Config from '../AppSettings';

export var getAllShoppingCarts = function() {
    var apiUrl = Config.baseApiUrl + 'ShoppingCart/GetAllShoppingCarts';
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var getAllActiveShoppingCarts = function() {
    var apiUrl = Config.baseApiUrl + 'ShoppingCart/GetAllActiveShoppingCarts';
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var getShoppingCartById = function(id) {
    var apiUrl = Config.baseApiUrl + 'ShoppingCart/GetShoppingCartById/'+id;
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var addShoppingCart = function(shoppingCartModel) {
    var apiUrl = Config.baseApiUrl + 'ShoppingCart/InsertShoppingCart';
    return fetch(apiUrl,{
        method: 'POST',
        headers: requestDefaults.headers,
        body: JSON.stringify(shoppingCartModel)
    });
};

export var updateShoppingCart = function(shoppingCartModel) {
    var apiUrl = Config.baseApiUrl + 'ShoppingCart/UpdateShoppingCart';
    return fetch(apiUrl,{
        method: 'PUT',
        headers: requestDefaults.headers,
        body: JSON.stringify(shoppingCartModel)
    });
}

export var deleteShoppingCart = function(id) {
    var apiUrl = Config.baseUrl + 'ShoppingCart/DeleteShoppingCart?id='+id;
    return fetch(apiUrl,{
        method: 'DELETE',
        headers: requestDefaults.headers
    });
}

