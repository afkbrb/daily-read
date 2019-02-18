export default {
	updateArticle: (state, article) => {
		state.article = article;
	},
	leftToggle: state => {
		state.navLeftOn = !state.navLeftOn;
	},
	rightToggle: state => {
		state.navRightOn = !state.navRightOn;
	},
	bottomToggle: state => {
		state.padBottomOn = !state.padBottomOn;
	},
	maskToggle: state => {
		state.maskOn = !state.maskOn;
	},
	init: state => {
		state.inited = true;
	}
}