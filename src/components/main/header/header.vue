<template>
	<div class="header">
		<span class="left-toggle" @click.stop="handleLeftToggle">
			<i class="iconfont icon-hamburger"></i>
		</span>
		<span class="right-toggle" @click.stop="handleRightToggle">
			<i class="iconfont icon-more"></i>
		</span>
		<div v-show="showHeaderTitle" class="header-title">
				{{title}}
		</div>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex';

	export default {
		props: {
			showHeaderTitle: {
				type: Boolean,
				default: false
			},
		},
		computed: {
			title() {
				return this.$store.getters.articleTitle; 
			}
		},
		methods: {
			...mapMutations([
				'leftToggle',
				'rightToggle',
				'leftMaskToggle',
				'rightMaskToggle'
			]),
			handleLeftToggle() {
				this.leftToggle();
				this.leftMaskToggle();
			},
			handleRightToggle() {
				this.rightToggle();
				this.rightMaskToggle();
			}
		},
	}
</script>

<style lang="scss">
	@import 'assets/scss/index.scss';

	.header {
		position: relative;
		text-align: center;
		background: $header-color;
		color: $header-icon-color;
		font-size: 1.5rem;
		height: 100%;
		width: 100%;

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
		
		.header-title{
			margin-top: 1rem;
			display: inline-block;
			text-align: center;
			font-size: 0.8rem;
			font-weight: 100;
			color: $header-title-color;
			
		}
	}
</style>
