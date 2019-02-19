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
	},
	articleLikeToggle: state => {
		if(state.collection.map(item => item.curr).indexOf(state.article.date.curr) > -1) {
			state.collection.splice(state.collection.map(item => item.curr).indexOf(state.article.date.curr), 1);
		}else{
			let title = state.article.title;
			let author = state.article.author;
			let curr = state.article.date.curr;
			let item = {title, author, curr};
			state.collection.push(item);
		}
	},
	setThemeFontSize: (state, fontSize) => {
		state.theme.fontSize = fontSize;
	},
	setThemeColor: (state, color) => {
		state.theme.themeColor = color;
	},
	setThemeNightMode: (state, mode) => {
		state.theme.nightMode = mode;
	}
}
