import {
    GET_PEDIDOS
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_PEDIDOS:
            console.log('ACTION.PAYLOAD: ', action.payload.pedidos)
            return {
                pedidos: action.payload.pedidos,
                ...state
            }

        default:
            return state
    }
}