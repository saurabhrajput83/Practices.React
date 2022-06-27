import actionTypes from '../actionCreators/actionTypes';

const defaultBrand = {
    brandId: 0,
    brandName: '',
    brandDescription: '',
    isActive: false
};

const brandInitialState = {
    brands:[],
    brand: defaultBrand
};

const brandReducer =function(state=brandInitialState, action){
    let newState;
    switch(action.type) {
        case actionTypes.Brand_Create:
            newState = {...state, brand: action.payload};
        break;
        case actionTypes.Brand_Delete:
            newState = {...state, eventType: action.type};
        break;
        case actionTypes.Brand_GetAll:
            newState = {...state, brands: action.payload, brand: defaultBrand};
        break;
        case actionTypes.Brand_GetById:
            newState = {...state, brand: action.payload};
        break;
        case actionTypes.Brand_Update:
            newState = {...state, brand: action.payload};
        break;
        case actionTypes.Brand_Initial_Load:
            newState = {...state};
        break;
        default:
            newState = {...state};
    }
    localStorage.setItem('currentActionType', action.type);
    return newState;
};

export default brandReducer;