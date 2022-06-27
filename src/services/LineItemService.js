import {requestDefaults} from './baseService';
import Config from '../AppSettings';

export var getAllLineItems = function() {
    var apiUrl = Config.baseApiUrl + 'LineItem/GetAllLineItems';
    return fetch(apiUrl, {
        method: "GET",
        rejectUnauthorized: false
    });
};

export var getAllLineItemsByShoppingCartId = function(shoppingCartId) {
    var apiUrl = Config.baseApiUrl + 'LineItem/getAllLineItemsByShoppingCartId?shoppingCartId='+shoppingCartId;;
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var getLineItemById = function(id) {
    var apiUrl = Config.baseApiUrl + 'LineItem/GetLineItemById/'+id;
    return fetch(apiUrl, {
        method: "GET",
        headers: requestDefaults.headers
    });
};

export var addLineItem = function(lineItemModel) {
    var apiUrl = Config.baseApiUrl + 'LineItem/InsertLineItem';
    return fetch(apiUrl, {
        method: 'POST',
        headers: requestDefaults.headers,
        body: JSON.stringify(lineItemModel)
    });
};

export var updateLineItem = function(lineItemModel) {
    var apiUrl = Config.baseApiUrl + 'LineItem/UpdateLineItem';
    return fetch(apiUrl, {
        method: 'PUT', 
        headers: requestDefaults.headers,
        body: JSON.stringify(lineItemModel)
    });
}

export var deleteLineItem = function(id) {
    var apiUrl = Config.baseApiUrl + 'LineItem/DeleteLineItem?id='+id;
    return fetch(apiUrl, {
        method: 'DELETE',
        headers: requestDefaults.headers
    });
}

