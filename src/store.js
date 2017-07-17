import { compose, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import reducer from './ducks/productsReducer';


let store = compose(
  autoRehydrate()
)(createStore)(reducer);

persistStore(store);

export default store;
