const initialState = {
  name: "",
  email: "",
  phone: "",
  additional_phone: "",
  address: "",
  city: "",
  country: ""
};
const FormReducer = (state = initialState, action) => {
  if (action.type == "fill") {
    return action.payload;
  } else {
    return state;
  }
};
export default FormReducer;
