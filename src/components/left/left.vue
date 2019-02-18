<template>
	<div class="nav-left">
		<ul class="list">
			<li class="item border-1px">
				<i class="iconfont icon-tag"></i>我的收藏
			</li>
			<li class="item border-1px" @click="handleOpenSetting">
				<i class="iconfont icon-setting"></i>阅读设置
			</li>
			<li class="item border-1px">
				<i class="iconfont icon-good"></i>给个好评
			</li>
		</ul>
	</div>
</template>

<script>
	
	import {mapMutations} from 'vuex';
	
	export default {
		name: 'left',
		methods: {
			...mapMutations([
				'openSetting',
				'leftToggle',
				'bottomToggle'
			]),
			handleOpenSetting() {
				this.openSetting();
				this.leftToggle();
				this.bottomToggle();
			}
		},
	}
</script>

<style lang="scss">
	@import '../../assets/scss/index.scss';

	.nav-left {
		.list {
			list-style: none;
			padding-left: 0;
			padding-top: 2vh;
			color: $nav-text-color;
			font-weight: 100;
			font-size: 0.9rem;

			.item {
				padding: 1rem 0 1rem 1rem;
				@include border-1px($nav-border-color);

				i {
					padding-right: 1rem;
				}
			}
		}
	}
</style>
