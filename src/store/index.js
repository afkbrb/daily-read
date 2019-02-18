import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
	navLeftOn: false,
	navRightOn: false,
	inited: false,
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
	}
};

const getters = {
	articleTitle: state => state.article.title
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});
