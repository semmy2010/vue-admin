//@flow
import * as types from '../types';

const mutations = {
    [types.INCREMENT](state) {
        state.count++;
    },
    [types.DECREMENT](state) {
        state.count--;
    }
};
export default mutations;
