import actionTypes from '../actionCreators/actionTypes';

const defaultProduct = {
    productId: 0,
    productName: '',
    productDescription: '',
    isActive: false,
    listPrice: '',
    sellingPrice: '',
    quantity: '',
    productImageUrl: '',
    productUrl: '',
    brandId: '',
    departmentId: ''
};

const productInitialState = {
    products:[],
    product: defaultProduct,
    eventType: actionTypes.Product_Initial_Load
};

const productReducer =function(state=productInitialState, action){
    let newState;
    switch(action.type) {
        case actionTypes.Product_Create:
            newState = {...state, product: action.payload, eventType: action.type};
        break;
        case actionTypes.Product_Delete:
            newState = {...state, eventType: action.type};
        break;
        case actionTypes.Product_GetAll:
            newState = {...state, products: action.payload, product: defaultProduct, eventType: action.type};
        break;
        case actionTypes.Product_GetById:
            newState = {...state, product: action.payload, eventType: action.type};
        break;
        case actionTypes.Product_Update:
            newState = {...state, product: action.payload, eventType: action.type};
        break;
        case actionTypes.Product_Initial_Load:
            newState = {...state, eventType: actionTypes.Product_Initial_Load};
        break;
        default:
            newState = {...state, eventType: actionTypes.Product_Initial_Load};
        break;
    }
    localStorage.setItem('currentActionType', action.type);
    return newState;
};

export default productReducer;