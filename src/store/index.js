/* import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
			isLeftOn: false,
			isRightOn: false
    },

    getters:{
        isLeftOn: state => state.isLeftOn,
				isRightOn: state => state.isRightOn
    },
    mutations:{
			toggleLeft: state => {
				state.isLeftOn = !state.isLeftOn;
			},
			toggleRight: state => {
				state.isRightOn = !state.isRightOn;
			}
    },
    actions:{}
});

export default store; */