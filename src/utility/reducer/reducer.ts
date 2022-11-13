import { stat } from "fs";
import { SIGN_IN,ITEM_CHANGE } from "utility/actions/action";
import { Istate,Iaction } from "utility/utility";

export const reducer = (state:Istate,action:Iaction) => {
    switch (action.type) {
        case SIGN_IN:
            
            return {...state,user:action.payload};
        case ITEM_CHANGE:
            return {...state,items:action.payload}
        default:
            return state;
    }
};