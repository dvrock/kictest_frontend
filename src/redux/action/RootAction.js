import  store  from '../store';
import { countChange } from '../reducer/RootReducer';
 const {dispatch}= store;
export function increment(data) {
  dispatch(countChange(data))
}
export function decrement(data) {
  dispatch(countChange(data))
}
