<template>
	<div class="collection">
		<div class="back" @click="back">
			<i class="iconfont icon-back"></i>
		</div>
		<ul class="list">
			<li class="item border-1px" v-for="item in collection" :key="item.curr" @click="showDetail(item.curr)">
				<span class="title">{{item.title}}</span>
				<span class="author">{{item.author}}</span>
			</li>
		</ul>
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
				'collection'
			])
		},
		methods: {
			...mapMutations([
				'updateArticle'
			]),
			back() {
				this.$router.push('/');
			},
			showDetail(date) {
				this.getArticleByDate(date);
				this.back();
			},
			getArticleByDate(date) {
				this.$http.get(`https://interface.meiriyiwen.com/article/day?dev=1&date=${date}`).then(response => {
					this.updateArticle(response.body.data);
				});
			},
		},
	}
</script>

<style lang="scss">
	@import "assets/scss/index.scss";

	.collection {
		position: relative;
		width: 100%;
		height: 100%;
		overflow-y: scroll;

		&::-webkit-scrollbar {
			width: 0;
		}

		.back {
			position: absolute;
			left: 2.5vw;
			top: 2vh;
			color: #888888;
			font-size: 1.2rem;
		}

		.list {
			list-style: none;
			margin: 3rem 0.8rem 0 0.8rem;
			padding-left: 0;

			.item {
				height: 2.3rem;
				width: 100%;
				line-height: 2rem;
				@include border-1px(#aaaaaa);

				.title {
					font-size: 1rem;
					font-weight: 300;
					color: #000000;
				}

				.author {
					font-size: 0.6rem;
					font-weight: 200;
					color: #888888;
				}
			}
		}
	}
</style>
