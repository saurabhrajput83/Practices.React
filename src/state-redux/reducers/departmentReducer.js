import actionTypes from '../actionCreators/actionTypes';

const defaultDepartment = {
    departmentId: 0,
    departmentName: '',
    departmentDescription: '',
    isActive: false
};

const departmentInitialState = {
    departments:[],
    department: defaultDepartment
};

const departmentReducer =function(state=departmentInitialState, action){
    let newState;
    switch(action.type) {
        case actionTypes.Department_Create:
            newState = {...state, department: action.payload};
        break;
        case actionTypes.Department_Delete:
            newState = {...state};
        break;
        case actionTypes.Department_GetAll:
            newState = {...state, departments: action.payload, department: defaultDepartment};
        break;
        case actionTypes.Department_GetById:
            newState = {...state, department: action.payload};
        break;
        case actionTypes.Department_Update:
            newState = {...state, department: action.payload};
        break;
        case actionTypes.Department_Initial_Load:
            newState = {...state};
        break;
        default:
            newState = {...state};
        break;
    }
    localStorage.setItem('currentActionType', action.type);
    return newState;
};

export default departmentReducer;