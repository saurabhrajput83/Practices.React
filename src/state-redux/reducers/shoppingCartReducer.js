import actionTypes from '../actionCreators/actionTypes';

const defaultBrand = {
    brandId: 0,
    brandName: '',
    brandDescription: '',
    isActive: false
};

const shoppingCartInitialState = {
    lineItems:[]
};

const shoppingCartReducer =function(state=shoppingCartInitialState, action){
    let newState;
    switch(action.type) {
        case actionTypes.LineItem_GetByShoppingCartId:
            newState = {...state, lineItems: action.payload};
        break;
        default:
            newState = {...state};
    }
    localStorage.setItem('currentActionType', action.type);
    return newState;
};

export default shoppingCartReducer;