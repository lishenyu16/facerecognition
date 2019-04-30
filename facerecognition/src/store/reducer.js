
const initialState = {
    url:'',
    box: null
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case('setUrl'):
            return {
                ...state,
                url:action.payload
            }
        case('setBox'):
            return {
                ...state,
                box:action.payload
            }
        default:
            return state
    }
}

export default reducer