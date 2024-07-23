import { UserActionTypes } from "./user.types";

const INITIAL_STATE = { 
    currentUser: null,
    sections:[[0,0,1], [0,0,0,1]]
    
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case UserActionTypes.SET_SECTION_VALUES:
            return {
                ...state,
                [action.payload.sectionID]: state[action.payload.sectionID].map((value, index) => {
                    return index === action.payload.index ? action.payload.newValue : value;
                })
            }
                
        default:
            return state;
    }
}


