<template>
	<div id="app">
		<div class="left-main" ref="leftMain">
			<div class="left" ref="left">
				<v-nav-left></v-nav-left>
			</div>
			<div class="main" @click="checkToggleLeft">
				<div class="header">
					<span class="left-toggle" @click.stop="leftToggle">
						<i class="iconfont icon-hamburger"></i>
					</span>
					<span class="right-toggle" @click.stop="rightToggle">
						<i class="iconfont icon-more"></i>
					</span>
				</div>
				<div class="article">
					<div class="title">{{article.title}}</div>
					<div class="author">{{article.author}}</div>
					<div class="content" v-html="article.content">
						{{article.content}}
					</div>
					<div class="foot">全文完 共{{article.wc}}字</div>
				</div>
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
			'v-nav-right': navRight
		},
		methods: {
			leftToggle() {
				this.flagLeft = !this.flagLeft;
				let leftMain = this.$refs.leftMain;
				if (this.flagLeft) {
					leftMain.style.left = '0';
				} else {
					leftMain.style.left = -this.navLeftWidth + 'vw';
				}
			},
			rightToggle() {
				this.flagRight = !this.flagRight;
				let right = this.$refs.right;
				let mask = this.$refs.mask;
				if (this.flagRight) {
					mask.style.display = 'block';
					right.style.left = (100 - this.navRightWidth) + 'vw';
				} else {
					mask.style.display = 'none';
					right.style.left = '100vw';
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

		.left-main {
			position: absolute;
			top: 0;
			left: -$nav-left-width;
			background: $main-color;
			width: 100vw + $nav-left-width;
			height: 100vh;
			transition: ease-in 0.2s;

			.left {
				float: left;
				background: $nav-color;
				width: $nav-left-width;
				height: 100%;
				
				// padding-top: 4vh;
			}

			.main {
				position: relative;
				float: right;
				width: 100vw;
				min-height: 100%;
				background: $main-color;

				.header {

					text-decoration: none;
					color: $header-icon-color;
					font-size: 1.5rem;

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
			}
		}

		.right {
			position: absolute;
			z-index: 200;
			width: $nav-right-width;
			height: 100vh;
			left: 100vw;
			top: 0;
			background: $nav-color;
			transition: linear 0.2s;
		}

		.mask {
			position: absolute;
			display: none;
			z-index: 100;
			width: 100vw;
			height: 100vh;
			left: 0;
			top: 0;
			background: $mask-color;
		}
	}
</style>
