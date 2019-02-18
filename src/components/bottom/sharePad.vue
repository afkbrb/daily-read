<template>
	<div class="share-pad">
		<div class="title">分享</div>
			<ul class="list">
				<li class="item">
					<div class="icon"><i class="iconfont icon-friends"></i></div>
					<div class="text">朋友圈</div>
				</li>
				<li class="item">
					<div class="icon"><i class="iconfont icon-wechat"></i></div>
					<div class="text">微信</div>
				</li>
				<li class="item">
					<div class="icon"><i class="iconfont icon-space"></i></div>
					<div class="text">空间</div>
				</li>
				<li class="item">
					<div class="icon"><i class="iconfont icon-qq"></i></div>
					<div class="text">QQ</div>
				</li>
				<li class="item">
					<div class="icon"><i class="iconfont icon-copy"></i></div>
					<div class="text">复制</div>
				</li>
			</ul>
	</div>
</template>

<script>
	export default {
		name: 'sharePad'
	}
</script>

<style lang="scss">
	@import '../../assets/scss/index.scss';

	.share-pad {
		padding-top: 1.2rem;
		width: 100%;
		height: 100%;
		background: #fefefe;
		color: #888888;

		.title {
			text-align: center;
			font-size: 0.8rem;
			font-weight: 300;
		}

		.list {
			list-style: none;
			padding-left: 0;
			display: flex;

			.item {
				flex: 1;
				float: left;

				.icon {
					text-align: center;
					font-size: 2.5rem;
				}

				.text {
					padding-top: 0.6rem;
					text-align: center;
					font-size: 0.8rem;
				}
			}
		}

	}
</style>
