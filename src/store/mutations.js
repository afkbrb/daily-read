export default {
	updateArticle: (state, article) => {
		state.article = article;
	},
	leftToggle: state => {
		state.navLeftOn = !state.navLeftOn;
	},
	rightToggle: state => {
		state.navRightOn = !state.navRightOn;
	}
}