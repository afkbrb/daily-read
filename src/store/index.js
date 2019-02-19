import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import collectionStore from '@/utils/collectionStore';

Vue.use(Vuex);

const state = {
	inited: false,
	bottomContent: 'setting',
	navLeftOn: false,
	navRightOn: false,
	padBottomOn: false,
	leftMaskOn: false,
	rightMaskOn: false,
	bottomMaskOn: false,
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
	//init from localStorage and will be saved to localStrorage when unload
	collection: collectionStore.fetch(),
	theme: {
		fontSize: "medium",
		themeColor: "white",
		nightMode: false
	}
};

const getters = {
	articleTitle: state => state.article.title,
	articleAuthor: state => state.article.author,
	articleCurr: state => state.article.date.curr,
	articleLiked: state => (state.collection.map(item => item.curr).indexOf(state.article.date.curr) > -1)
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});
