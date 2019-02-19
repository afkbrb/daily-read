<template>
	<div id="app">
		<div class="left" ref="left">
			<v-nav-left></v-nav-left>
		</div>
		<div class="main-wrapper" ref="mainWrapper">
			<v-main></v-main>
		</div>
		<div class="right" ref="right">
			<v-nav-right></v-nav-right>
		</div>
		<div class="bottom-wrapper" ref="bottomWrapper">
			<v-bottom></v-bottom>
		</div>
		<div v-show="leftMaskOn" class="mask left" @click="handleLeft"></div>
		<div v-show="rightMaskOn" class="mask right" @click="handleRight"></div>
		<div v-show="bottomMaskOn" class="mask bottom" @click="handleBottom"></div>

	</div>

</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		mapMutations
	} from 'vuex';

	import navLeft from '@/components/left/left';
	import navRight from '@/components/right/right';
	import bottom from '@/components/bottom/bottom';
	import main from '@/components/main/main';


	export default {
		name: 'App',
		data() {
			return {
				// change(s) should alse be applied to corresponding variable(s) in variable.scss 
				navLeftWidth: 36, //vw
				navRightWidth: 20, //vw
				padBottomHeight: 26, //vh
			};
		},
		computed: {
			...mapState([
				'navLeftOn',
				'navRightOn',
				'padBottomOn',
				'leftMaskOn',
				'rightMaskOn',
				'bottomMaskOn'
			])
		},
		components: {
			'v-nav-left': navLeft,
			'v-nav-right': navRight,
			'v-bottom': bottom,
			'v-main': main
		},
		watch: {
			navLeftOn(newValue) {
				let left = this.$refs.left;
				let mainWrapper = this.$refs.mainWrapper;
				let articleWrapper = this.$refs.articleWrapper;
				if (newValue) {
					left.style.left = '0';
					mainWrapper.style.left = this.navLeftWidth + 'vw';
					mainWrapper.style.overflowY = 'hidden'; //prevent mainWrapper from scrolling
				} else {
					left.style.left = -this.navLeftWidth + 'vw';
					mainWrapper.style.left = '0';
					mainWrapper.style.overflowY = '';
				}
			},
			navRightOn(newValue) {
				let right = this.$refs.right;
				let mainWrapper = this.$refs.mainWrapper;
				if (newValue) {
					right.style.left = (100 - this.navRightWidth) + 'vw';
					mainWrapper.style.overflowY = 'hidden'; //prevent mainWrapper from scrolling
				} else {
					right.style.left = '100vw';
					mainWrapper.style.overflowY = '';
				}
			},
			padBottomOn(newValue) {
				let bottomWrapper = this.$refs.bottomWrapper;
				if (newValue) {
					bottomWrapper.style.top = (100 - this.padBottomHeight) + 'vh';
				} else {
					bottomWrapper.style.top = '100vh';
				}
			}
		},
		methods: {
			...mapMutations([
				'leftToggle',
				'rightToggle',
				'bottomToggle',
				'leftMaskToggle',
				'rightMaskToggle',
				'bottomMaskToggle'
			]),
			handleLeft() {
				this.leftToggle();
				this.leftMaskToggle();
			},
			handleRight() {
				this.rightToggle();
				this.rightMaskToggle();
			},
			handleBottom() {
				this.bottomToggle();
				this.bottomMaskToggle();
			}
		}
	}
</script>

<style lang="scss">
	@import 'assets/fonts/iconfont.css';
	@import 'assets/scss/index.scss';

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

		.main-wrapper {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			transition: $left-main-transition;
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

		.bottom-wrapper {
			z-index: 200;
			position: fixed;
			top: 100vh;
			left: 0;
			width: 100vw;
			height: $pad-right-height;
			transition: ease-out 0.2s;
		}

		.mask {
			z-index: 100;
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;

			&.left {
				background: $left-mask-color;
			}

			&.right {
				background: $right-mask-color;
			}

			&.bottom {
				background: $bottom-mask-color;
			}

		}
	}
</style>
