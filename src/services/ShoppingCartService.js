import Config from '../AppSettings';

export var getAllShoppingCarts = function() {
    var apiUrl = Config.baseUrl + 'ShoppingCart/GetAllShoppingCarts';
    return fetch(apiUrl, {
        method: "GET",
        rejectUnauthorized: false
    });
};

export var getAllActiveShoppingCarts = function() {
    var apiUrl = Config.baseUrl + 'ShoppingCart/GetAllActiveShoppingCarts';
    return fetch(apiUrl);
};

export var getShoppingCartById = function(id) {
    var apiUrl = Config.baseUrl + 'ShoppingCart/GetShoppingCartById/'+id;
    return fetch(apiUrl);
};

export var addShoppingCart = function(shoppingCartModel) {
    var apiUrl = Config.baseUrl + 'ShoppingCart/InsertShoppingCart';
    return fetch(apiUrl,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shoppingCartModel)
    });
};

export var updateShoppingCart = function(shoppingCartModel) {
    var apiUrl = Config.baseUrl + 'ShoppingCart/UpdateShoppingCart';
    return fetch(apiUrl,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shoppingCartModel)
    });
}

export var deleteShoppingCart = function(id) {
    var apiUrl = Config.baseUrl + 'ShoppingCart/DeleteShoppingCart?id='+id;
    return fetch(apiUrl,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}

