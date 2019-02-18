<template>
	<div id="app">
		<div class="left" ref="left">
			<v-nav-left></v-nav-left>
		</div>
		<div class="main" @click="checkToggleLeft" ref="main">
			<div class="header-wrapper">
				<v-header :showHeaderTitle="showHeaderTitle"></v-header>
			</div>
			<div class="article-wrapper" ref="articleWrapper" @scroll="handleScroll">
				<v-article :article="article"></v-article>
			</div>
		</div>
		<div class="right" ref="right">
			<v-nav-right></v-nav-right>
		</div>
		<div class="mask" ref="mask" @click="checkToggleRightOrBottom"></div>
		<div class="bottom-wrapper" ref="bottom">
			<v-share-apd></v-share-apd>
		</div>
	</div>

</template>

<script>
	import {mapState} from 'vuex';
	import {mapMutations} from 'vuex';

	import navLeft from '@/components/left/left';
	import navRight from '@/components/right/right';
	import article from '@/components/article/article';
	import header from '@/components/header/header';
	import sharePad from '@/components/bottom/sharePad';


	export default {
		name: 'App',
		data() {
			return {
				// change(s) should alse be applied to corresponding variable(s) in variable.scss 
				navLeftWidth: 36,//vw
				navRightWidth: 20,//vw
				padBottomHeight: 26,//vh
				
				scrollOffset: 60,
				showHeaderTitle: false
			};
		},
		computed: {
			...mapState([
				'article',
				'navLeftOn',
				'navRightOn',
				'padBottomOn',
				'maskOn'
			])
		},
		components: {
			'v-nav-left': navLeft,
			'v-nav-right': navRight,
			'v-article': article,
			'v-header': header,
			'v-share-apd': sharePad
		},
		watch: {
			navLeftOn(newValue) {
				let left = this.$refs.left;
				let main = this.$refs.main;
				let articleWrapper = this.$refs.articleWrapper;
				if(newValue) {
					left.style.left = '0';
					main.style.left = this.navLeftWidth + 'vw';
					articleWrapper.style.overflowY = 'hidden';
				}else{
					left.style.left = -this.navLeftWidth + 'vw';
					main.style.left = '0';
					articleWrapper.style.overflowY = '';
				}
			},
			navRightOn(newValue) {
				let right = this.$refs.right;
				let main = this.$refs.main;
				if(newValue) {
					right.style.left = (100 - this.navRightWidth) + 'vw';
					main.style.overflowY = 'hidden';
				} else {
					right.style.left = '100vw';
					main.style.overflowY = '';
				}
			},
			padBottomOn(newValue) {	
				let bottom = this.$refs.bottom;
				if(newValue) {
					bottom.style.top = (100 - this.padBottomHeight) + 'vh';
				}else{
					bottom.style.top = '100vh';
				}
			},
			maskOn(newValue) {
				let mask = this.$refs.mask;
				if(newValue) {
					mask.style.display = 'block';
				}else{
					mask.style.display = 'none';
				}
			}
		},
		methods: {
			...mapMutations([
				'leftToggle',
				'rightToggle',
				'bottomToggle',
				'maskToggle'
			]),
			checkToggleLeft() {
				if (this.navLeftOn) {
					this.leftToggle();
				}
			},
			checkToggleRightOrBottom() {
				if (this.navRightOn) {
					this.rightToggle();
				}else{
					this.bottomToggle();
				}
				this.maskToggle();
			},
			handleScroll() {
				let scrollTop = this.$refs.articleWrapper.scrollTop;
				this.showHeaderTitle = (scrollTop >= this.scrollOffset);
			}
		}
	}
</script>

<style lang="scss">
	@import './assets/fonts/iconfont.css';
	@import './assets/scss/index.scss';

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;

		.left {
			z-index: 200;
			position: fixed;
			top: 0;
			left: -$nav-left-width;
			background: $nav-color;
			width: $nav-left-width;
			height: 100%;
			transition: $left-main-transition;
		}

		.main {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background: $main-color;
			transition: $left-main-transition;

			.header-wrapper{
				position: fixed;
				top: 0;
				z-index: 50;
				height: 3rem;
				width: 100%;
			}

			.article-wrapper {
				margin: 8vh 0.5rem 0 0.5rem;
				height: 92vh;
				overflow-y: scroll;
				&::-webkit-scrollbar{
					width: 0;
				}
			}
		}

		.right {
			position: fixed;
			z-index: 200;
			width: $nav-right-width;
			height: 100%;
			left: 100vw;
			top: 0;
			background: $nav-color;
			transition: linear 0.2s;
		}
		
		.bottom-wrapper{
			z-index: 200;
			position: fixed;
			top: 100vh; //todo: set to 100vh
			left: 0;
			width: 100vw;
			height: $pad-right-height;
			transition: ease-out 0.2s;
		}

		.mask {
			z-index: 100;
			position: absolute;
			display: none;
			z-index: 100;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: $mask-color;
		}
	}
</style>
