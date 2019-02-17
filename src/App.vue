<template>
	<div id="app">
		<div class="left" ref="left">
			<v-nav-left></v-nav-left>
		</div>
		<div class="main" @click="checkToggleLeft" ref="main">
			<div class="header">
				<span class="left-toggle" @click.stop="leftToggle">
					<i class="iconfont icon-hamburger"></i>
				</span>
				<span class="right-toggle" @click.stop="rightToggle">
					<i class="iconfont icon-more"></i>
				</span>
			</div>
			<div class="article-wrapper">
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
	import navLeft from '@/components/left/left';
	import navRight from '@/components/right/right';
	import article from '@/components/article/article';

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
					"content": ""
				}
			};
		},
		created() {
			this.$http.get('https://interface.meiriyiwen.com/article/random?dev=1').then(response => {
				// console.log(response.body.data);
				this.article = response.body.data;
			})
		},
		components: {
			'v-nav-left': navLeft,
			'v-nav-right': navRight,
			'v-article': article
		},
		methods: {
			leftToggle() {
				this.flagLeft = !this.flagLeft;
				let left = this.$refs.left;
				let main = this.$refs.main;
				if (this.flagLeft) {
					left.style.left = '0';
					main.style.left = this.navLeftWidth + 'vw';
					main.style.overflowY = 'hidden';
				} else {
					left.style.left = -this.navLeftWidth + 'vw';
					main.style.left = '0';
					main.style.overflowY = '';
				}
			},
			rightToggle() {
				this.flagRight = !this.flagRight;
				let right = this.$refs.right;
				let mask = this.$refs.mask;
				let main = this.$refs.main;
				if (this.flagRight) {
					mask.style.display = 'block';
					right.style.left = (100 - this.navRightWidth) + 'vw';
					main.style.overflowY = 'hidden';
				} else {
					mask.style.display = 'none';
					right.style.left = '100vw';
					main.style.overflowY = '';
				}
			},
			checkToggleLeft() {
				if (this.flagLeft) {
					this.leftToggle();
				}
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

			.header {
				position: relative;
				z-index: 50;
				text-decoration: none;
				color: $header-icon-color;
				font-size: 1.5rem;
				height: 3rem;

				.left-toggle {
					position: absolute;
					top: 2vh;
					left: 2.5vw;
				}

				.right-toggle {
					position: absolute;
					top: 2vh;
					right: 4vw;
				}
			}

			.article-wrapper {
				padding: 0 0.5rem;
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
