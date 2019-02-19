<template>
	<div class="nav-left">
		<ul class="list">
			<li class="item border-1px" @click="handleCollection">
				<i class="iconfont icon-tag"></i>我的收藏
			</li>
			<li class="item border-1px" @click="handleSetting">
				<i class="iconfont icon-setting"></i>阅读设置
			</li>
			<li class="item border-1px" @click="handlePraise">
				<i class="iconfont icon-good"></i>给个好评
			</li>
		</ul>
	</div>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';

	export default {
		name: 'left',
		methods: {
			...mapMutations([
				'openSetting',
				'leftToggle',
				'bottomToggle',
				'leftMaskToggle',
				'bottomMaskToggle'
			]),
			handleSetting() {
				this.openSetting();
				this.leftToggle();
				this.bottomToggle();
				this.leftMaskToggle();
				this.bottomMaskToggle();
			},
			handlePraise() {
				window.location.href = 'https://meiriyiwen.com';
			},
			handleCollection() {
				this.$router.push('/collection');
				this.leftToggle();
				this.leftMaskToggle();
			}
		},
	}
</script>

<style lang="scss">
	@import 'assets/scss/index.scss';

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
