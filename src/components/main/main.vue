<template>
	<div class="main" :class="{'night': theme.nightMode}">
		<div class="header-wrapper">
			<v-header :showHeaderTitle="showHeaderTitle"></v-header>
		</div>
		<div class="article-wrapper" ref="articleWrapper" @scroll="handleScroll">
			<v-article :article="article"></v-article>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		mapMutations
	} from 'vuex';

	import article from './article/article';
	import header from './header/header';

	export default {
		data() {
			return {
				scrollOffset: 60,
				showHeaderTitle: false
			}
		},
		computed: {
			...mapState([
				'article',
				'theme'
			])
		},
		components: {
			'v-article': article,
			'v-header': header
		},
		methods: {
			handleScroll() {
				let scrollTop = this.$refs.articleWrapper.scrollTop;
				this.showHeaderTitle = (scrollTop >= this.scrollOffset);
			}
		},

	}
</script>

<style lang="scss">
	@import 'assets/scss/index.scss';

	.main {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: $main-color;

		&.night {
			background: $main-color-night;
		}

		.header-wrapper {
			position: fixed;
			top: 0;
			z-index: 50;
			height: 3rem;
			width: 100%;
		}

		.article-wrapper {
			margin: 3rem 0.5rem 0 0.5rem;
			height: 92vh;
			overflow-y: scroll;

			&::-webkit-scrollbar {
				width: 0;
			}
		}

	}
</style>
