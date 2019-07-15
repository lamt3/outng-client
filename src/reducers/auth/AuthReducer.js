
export function auth(state ={}, action){
    switch(action.type){
        case 'AUTH_VERIFY_USER':
            return action.playload;

        default:
            return state; 
    }
}