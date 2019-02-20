<template>
	<div class="mask-wrapper">
		<div v-show="leftMaskOn" class="mask mask-left" @click="handleLeft"></div>
		<div v-show="rightMaskOn" class="mask mask-right" @click="handleRight"></div>
		<div v-show="bottomMaskOn" class="mask mask-bottom" @click="handleBottom"></div>
		<div v-show="!theme.nightMode" class="mask mask-theme" :class="theme.themeColor"></div>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {
		computed: {
			...mapState([
				'leftMaskOn',
				'rightMaskOn',
				'bottomMaskOn',
				'theme'
			])
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
	
	@import 'assets/scss/index.scss';

	.mask-wrapper .mask {
		z-index: 100;
		position: absolute;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
	
		&.mask-left {
			background: $left-mask-color;
		}
	
		&.mask-right {
			background: $right-mask-color;
		}
	
		&.mask-bottom {
			background: $bottom-mask-color;
		}
	
		&.mask-theme {
			pointer-events: none;
		}
	
		&.white {
			background: rgba(0, 0, 0, 0);
		}
	
		&.green {
			background: rgba(0, 255, 0, 0.1);
		}
	
		&.brown {
			background: rgba(255, 152, 0, 0.1);
		}
	
		&.pink {
			background: rgba(255, 110, 158, 0.1);
		}
	
	}
</style>
