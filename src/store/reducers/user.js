
function user(state='',action){
    switch(action.type){
        case 'ADDUSER':
            state = action.payload;
            return state;
        case 'DELETEUSER':
            state = '';
            return state;
        default:
            return state;
    }
}

export default user;