<template>
	<div class="nav-right">
		<ul class="list">
			<li class="item" @click="handleLike">
				<div class="icon" :class="{'liked': articleLiked}">
					<i class="iconfont icon-like"></i>
				</div>
				<div class="text">收藏</div>
			</li>
			<li class="item" @click="handleShare">
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
			<li v-show="showTomorrow" class="item" @click="getArticleTomorrow">
				<div class="icon">
					<i class="iconfont icon-right"></i>
				</div>
				<div class="text">后一天</div>
			</li>
			<li v-show="showToday" class="item" @click="getArticleToday">
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
	import {
		mapMutations
	} from 'vuex';
	import {
		mapState
	} from 'vuex';
	import {
		mapGetters
	} from 'vuex';
	
	import store from '@/utils/collectionStore';

	export default {
		name: 'right',
		created() {
			this.today = this.getFormatDateToday();
			this.getArticleToday();
		},
		computed: {
			...mapState([
				'inited',
			]),
			...mapGetters([
				'articleLiked',
				'articleCurr'
			]),
			showToday() {
				return this.today !== this.articleCurr;
			},
			showTomorrow() {
				return parseInt(this.today) > parseInt(this.articleCurr);
			},
			liked() {
				let list = store.fetch();
				let currs = list.map(item => item.curr);
				console.log(currs);
				return currs.indexOf(this.article.date.curr) >= 0;
			}
		},
		methods: {
			...mapMutations([
				'init',
				'updateArticle',
				'rightToggle',
				'bottomToggle',
				'rightMaskToggle',
				'bottomMaskToggle',
				'openShare',
				'articleLikeToggle'
			]),
			handleLike() {
				this.articleLikeToggle();
				this.rightToggle();
				this.rightMaskToggle();
			},
			handleShare() {
				this.openShare();
				this.bottomToggle();
				this.rightToggle();
				this.bottomMaskToggle();
				this.rightMaskToggle();
			},
			getArticleToday() {
				this.$http.get('https://interface.meiriyiwen.com/article/today?dev=1').then(response => {
					this.updateArticle(response.body.data);
					//to prevent the right nav from auto-expanding while initializing
					if (this.inited) {
						this.rightToggle();
						this.rightMaskToggle();
					} else {
						this.init();
					}
				});
			},
			getArticleRandom() {
				this.$http.get('https://interface.meiriyiwen.com/article/random?dev=1').then(response => {
					this.updateArticle(response.body.data);
					this.rightToggle();
					this.rightMaskToggle();
				});
			},
			getArticleByDate(date) {
				this.$http.get(`https://interface.meiriyiwen.com/article/day?dev=1&date=${date}`).then(response => {
					this.updateArticle(response.body.data);
					this.rightToggle();
					this.rightMaskToggle();
				});
			},
			getArticleYesterday() {
				let date = this.$store.state.article.date.prev;
				this.getArticleByDate(date);
			},
			getArticleTomorrow() {
				let date = this.$store.state.article.date.next;
				this.getArticleByDate(date);
			},
			getFormatDateToday() {
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				};
				if (day >= 0 && day <= 9) {
					day = "0" + day;
				};
				return (year + month + day);
			}
		},
	}
</script>

<style lang="scss">
	@import 'assets/scss/index.scss';

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
					
					&.liked{
						color: red;
					}
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
