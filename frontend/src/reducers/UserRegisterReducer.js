import { FAILL, SUCCESS } from "../constants/actionTypes";


export const UserRegisterReducer = (state={initialState:[]},action) =>{
    switch(action.type){
        case SUCCESS:
            return{
                initialState:action.payload
            }
        case FAILL:
            return {
                initialState:action.payload
            }
        default :
        return state
    }
}