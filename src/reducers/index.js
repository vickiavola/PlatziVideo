import { bindActionCreators } from "redux"

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE' :
            return {
                ...state,
                myList: state.myList.find(
                    item => {return item.id === action.payload.id }) ? state.myList :
                [...state.myList, action.payload]
            }
            case 'DELETE_FAVORITE':
                return {
                    ...state,
                    myList: state.myList.filter(items => items.id !== action.payload)
                }
                case 'LOGIN_REQUEST':
                    return {
                        ...state,
                        user: action.payload,
                    }
                case 'LOGOUT_REQUEST':
                    return {
                        ...state,
                        user: action.payload,
                    }
        default:
                return state;
    }
}

export default reducer;