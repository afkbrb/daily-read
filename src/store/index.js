import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';


Vue.use(Vuex);

const state = {
	article: {
		date: {
			curr: "",
			prev: "",
			next: ""
		},
		author: "",
		title: "",
		digest: "",
		wc: 0,
		content: ""
	},
	navLeftOn: false,
	navRightOn: false
}

export default new Vuex.Store({
	state,
	actions,
	mutations
});