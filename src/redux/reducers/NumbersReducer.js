import *  as types from '../types/NumbersTypes';

export const  NumbersReducer = (state={},action) =>{
    switch (action.type) {
        case types.FETCH_NUMBERS_SUCCESS:
            return {...state,fetchNumbersValue :action.payload};
        case types.FETCH_NUMBERS_FAILERE:
            return {...state,fetchNumbersValueError :action.payload};
        case types.SELECT_NUMBERS_SUCCESS:
            return {...state,selectNumbersValue :action.payload};
        case types.SELECT_NUMBERS_FAILERE:
            return {...state,selectNumbersValueError :action.payload};
        default:
            return state;
    }
}