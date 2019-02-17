<template>
	<div class="nav-left">
		<ul class="list">
			<li class="item">
				<i class="iconfont icon-tag"></i>我的收藏
			</li>
			<li class="item">
				<i class="iconfont icon-setting"></i>阅读设置
			</li>
			<li class="item">
				<i class="iconfont icon-good"></i>给个好评
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'left'
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
				border-bottom: 1px solid $nav-border-color;

				i {
					padding-right: 1rem;
				}
			}
		}
	}
</style>
