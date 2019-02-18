export default {
	init: state => {
		state.inited = true;
	},
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
	leftMaskToggle: state => {
		state.leftMaskOn = !state.leftMaskOn;
	},
	rightMaskToggle: state => {
		state.rightMaskOn = !state.rightMaskOn;
	},
	bottomMaskToggle: state => {
		state.bottomMaskOn = !state.bottomMaskOn;
	},
	openSetting: state => {
		state.bottomContent = 'setting';
	},
	openShare: state => {
		state.bottomContent = 'share';
	}
}
