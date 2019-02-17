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
			<li class="item" @click="getArticleYesterday">
				<div class="icon">
					<i class="iconfont icon-left"></i>
				</div>
				<div class="text">前一天</div>
			</li>
			<li class="item" @click="getArticleRandom">
				<div class="icon">
					<i class="iconfont icon-random"></i>
				</div>
				<div class="text">
					随机
				</div>
			</li>
			<li class="item" @click="getArticleTomorrow">
				<div class="icon">
					<i class="iconfont icon-right"></i>
				</div>
				<div class="text">后一天</div>
			</li>
			<li class="item" @click="getArticleToday">
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
	import {mapMutations} from 'vuex';

	export default {
		name: 'right',
		created() {
			this.getArticleToday();
		},
		methods: {
			...mapMutations([
				'updateArticle',
				'rightToggle'
			]),
			getArticleToday() {
				this.$http.get('https://interface.meiriyiwen.com/article/today?dev=1').then(response => {
					this.updateArticle(response.body.data);
					//todo: cannot just call rightToggle here in case of bugs while initializing
				});
			},
			getArticleRandom() {
				this.$http.get('https://interface.meiriyiwen.com/article/random?dev=1').then(response => {
					this.updateArticle(response.body.data);
					this.rightToggle();
				});
			},
			getArticleByDate(date) {
				this.$http.get(`https://interface.meiriyiwen.com/article/day?dev=1&date=${date}`).then(response => {
					this.updateArticle(response.body.data);
					this.rightToggle();
				});
			},
			getArticleYesterday() {
				let date = this.$store.state.article.date.prev;
				this.getArticleByDate(date);
			},
			getArticleTomorrow() {
				let date = this.$store.state.article.date.next;
				this.getArticleByDate(date);
			}
		},
	}
</script>

<style lang="scss">
	@import '../../assets/scss/index.scss';

	.nav-right {
		.list {
			list-style: none;
			padding-left: 0;
			margin-top: 5vh;

			.item {
				text-align: center;
				margin: 1rem 0;

				.icon {
					color: $nav-icon-color;
					font-size: 2rem;
				}

				.text {
					color: $nav-text-color;
					font-size: 0.5rem;
					font-weight: 100;
				}

			}
		}
	}
</style>
