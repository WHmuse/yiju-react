// 城市city的reducer

function city(state='北京',action){
    switch(action.type){
        case 'UPDATECITY':
                state = action.payload;
                return state;
        default:
                return state;
    }
}

export default city;