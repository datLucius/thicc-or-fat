import { combineReducers } from 'redux';
import ThiccReducer from './components/ThiccReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  ThiccReducer
});

export default rootReducer;
