<template>
		<div class="article">
			<div class="title border-1px">{{article.title}}</div>
			<div class="author">{{article.author}}</div>
			<div class="content border-1px" v-html="article.content">
				{{article.content}}
			</div>
			<div class="foot">全文完 共{{article.wc}}字</div>
		</div>
</template>

<script>
	export default {
		props: {
			article: {
				type: Object
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import '../../assets/scss/index.scss';

	.article {

		.title {
			text-align: center;
			font-size: 1.3rem;
			font-weight: 500;
			padding-bottom: 0.5rem;
			@include border-1px($article-title-border-color);
		}

		.author {
			text-align: center;
			font-size: 0.8rem;
			font-weight: 100;
			color: $article-author-color;
			padding-top: 0.4rem;
		}
		
		.content{
			font-size: 1rem;
			font-weight: 400;
			padding-bottom: 1rem;
			@include border-1px($article-foot-border-color);

			p{
				text-indent: 2rem;
			}
		}
		
		.foot{
			font-size: 0.8rem;
			text-align: center;
			font-weight: 100;
			color: $article-foot-color;
			padding-top: 1rem;
			padding-bottom: 1rem;			
		}
	}
</style>
