const initialState = {
  job_title: "",
  company: "",
  city: "",
  country: "",
  date1: "",
  date2: "",
};
const ExperienceReducer = (state = initialState, action) => {
  if (action.type == "experiencefill") {
    return action.payload;
  } else {
    return state;
  }
};
export default ExperienceReducer;
