import { combineReducers } from "redux";
import FormReducer from "./FormReducer";
import ExperienceReducer from "./ExperienceReducer";
import EducationReducer from "./EducationReducer";
import SummaryReducer from "./SummaryReducer";
import StyleReducer from "./StyleReducer";
const rootReducer = combineReducers({
  FormReducer,
  ExperienceReducer,
  EducationReducer,
  SummaryReducer,
  StyleReducer
});
export default rootReducer;
