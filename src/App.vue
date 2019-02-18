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
		<div class="mask" ref="mask" @click="rightToggle"></div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import {mapMutations} from 'vuex';

	import navLeft from '@/components/left/left';
	import navRight from '@/components/right/right';
	import article from '@/components/article/article';
	import header from '@/components/header/header';


	export default {
		name: 'App',
		data() {
			return {
				// change(s) of navLeftWidth and navRightWidth should alse be applied to
				//$nav-left-width and &nav-right-width in variable.scss 
				navLeftWidth: 36,
				navRightWidth: 20,
				flagLeft: false,
				flagRight: false,
				scrollOffset: 60,
				showHeaderTitle: false
			};
		},
		computed: {
			...mapState([
				'article',
				'navLeftOn',
				'navRightOn'
			])
		},
		components: {
			'v-nav-left': navLeft,
			'v-nav-right': navRight,
			'v-article': article,
			'v-header': header
		},
		watch: {
			navLeftOn(newValue) {
				let left = this.$refs.left;
				let main = this.$refs.main;
				if(newValue) {
					left.style.left = '0';
					main.style.left = this.navLeftWidth + 'vw';
					main.style.overflowY = 'hidden';
				}else{
					left.style.left = -this.navLeftWidth + 'vw';
					main.style.left = '0';
					main.style.overflowY = '';
				}
			},
			navRightOn(newValue) {
				let right = this.$refs.right;
				let mask = this.$refs.mask;
				let main = this.$refs.main;
				if(newValue) {
					mask.style.display = 'block';
					right.style.left = (100 - this.navRightWidth) + 'vw';
					main.style.overflowY = 'hidden';
				} else {
					mask.style.display = 'none';
					right.style.left = '100vw';
					main.style.overflowY = '';
				}
			}
		},
		methods: {
			...mapMutations([
				'leftToggle',
				'rightToggle'
			]),
			checkToggleLeft() {
				if (this.navLeftOn) {
					this.leftToggle();
				}
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
			width: 100%;
			height: 100%;
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
					// width: 0;
					// display: none;
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

		.mask {
			position: fixed;
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
