import brandReducer from './brandReducer';
import departmentReducer from './departmentReducer';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    brand:brandReducer,
    department: departmentReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer
});

