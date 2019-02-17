<template>
	<div class="nav-right">
		<ul class="list">
			<li class="item">
				<div class="icon">
					<i class="iconfont icon-like"></i>
				</div>
				<div class="text">收藏</div>
			</li>
			<li class="item">
				<div class="icon">
					<i class="iconfont icon-share"></i>
				</div>
				<div class="text">分享</div>
			</li>
			<li class="item">
				<div class="icon">
					<i class="iconfont icon-left"></i>
				</div>
				<div class="text">前一天</div>
			</li>
			<li class="item">
				<div class="icon">
					<i class="iconfont icon-random"></i>
				</div>
				<div class="text">
					随机
				</div>
			</li>
			<li class="item">
				<div class="icon">
					<i class="iconfont icon-right"></i>
				</div>
				<div class="text">后一天</div>
			</li>
			<li class="item">
				<div class="icon">
					<i class="iconfont icon-clock"></i>
				</div>
				<div class="text">
					今日
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'right'
	}
</script>

<style lang="scss">
	
	@import '../../assets/scss/index.scss';
	
	.nav-right{
		.list{
			list-style: none;
			padding-left: 0;
			margin-top: 5vh;
			
			.item{
				text-align: center;
				margin: 1rem 0;

				.icon{
					color: $nav-icon-color;
					font-size: 2rem;
				}
				
				.text{
					color: $nav-text-color;
					font-size: 0.5rem;
					font-weight: 100;
				}
				
			}
		}
	}
</style>
