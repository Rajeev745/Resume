const initialState={}

const SummaryReducer=((state=initialState,action)=>{
    if(action.type=="summaryfill"){
        return action.payload
    }else{
        return state
    }
})

export default SummaryReducer