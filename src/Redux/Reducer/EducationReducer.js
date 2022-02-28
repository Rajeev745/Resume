const initialState={
    school:"",
    city:"",
    degree:"",
    country:"",
    date:"",
    description:""
}

const EducationReducer=(state=initialState,action)=>{
    if(action.type=="educationfill"){
        return action.payload
    }else{
        return state
    }
}
export default EducationReducer