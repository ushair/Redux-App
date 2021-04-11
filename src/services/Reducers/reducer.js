import { act } from "react-dom/test-utils";
import { ADD_TO_CART,REMOVE_FROM_CART } from "../constants";

const initialState = {
    cartData :[]
}

export default function cardItems(state=[],action){
    switch (action.type) {
        case ADD_TO_CART:
            return[
                ...state,
                {cartData : action.data}
            ]
            break;
        case REMOVE_FROM_CART:
            state.pop()
            return[
                ...state,

            ]
            break;
        default:
            return state
    }
}