const initialState={
    color:1,
    fontStyle:1
}
const StyleReducer=((state=initialState,action)=>{
    if(action.type=="changeStyle"){
        return action.payload
    }else{
        return state
    }
})
export default StyleReducer