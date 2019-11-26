import { combineReducers } from 'redux'
import { imageReducer } from './imageReducer';

export const rootReducer = combineReducers({
  data: imageReducer,
})