import Config from '../AppSettings';

export var getAllLineItems = function() {
    var apiUrl = Config.baseUrl + 'LineItem/GetAllLineItems';
    return fetch(apiUrl, {
        method: "GET",
        rejectUnauthorized: false
    });
};

export var getAllLineItemsByShoppingCartId = function(shoppingCartId) {
    var apiUrl = Config.baseUrl + 'LineItem/getAllLineItemsByShoppingCartId?shoppingCartId='+shoppingCartId;;
    return fetch(apiUrl);
};

export var getLineItemById = function(id) {
    var apiUrl = Config.baseUrl + 'LineItem/GetLineItemById/'+id;
    return fetch(apiUrl);
};

export var addLineItem = function(lineItemModel) {
    var apiUrl = Config.baseUrl + 'LineItem/InsertLineItem';
    return fetch(apiUrl,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lineItemModel)
    });
};

export var updateLineItem = function(lineItemModel) {
    var apiUrl = Config.baseUrl + 'LineItem/UpdateLineItem';
    return fetch(apiUrl,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lineItemModel)
    });
}

export var deleteLineItem = function(id) {
    var apiUrl = Config.baseUrl + 'LineItem/DeleteLineItem?id='+id;
    return fetch(apiUrl,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}

