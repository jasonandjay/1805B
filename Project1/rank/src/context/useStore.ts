import {useContext} from 'react';
import StoreContext from './StoreContext';

let useStore = ()=>useContext(StoreContext);
export default useStore;
