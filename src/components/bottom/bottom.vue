<template>
	<div class="bottom">
		<v-setting v-if="bottomContent==='setting'"></v-setting>
		<v-share v-if="bottomContent==='share'"></v-share>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex';

	import share from './share/share';
	import setting from './setting/setting';

	export default {
		computed: {
			...mapState([
				'bottomContent'
			])
		},
		components: {
			'v-share': share,
			'v-setting': setting
		}
	}
</script>

<style lang="scss">
	@import 'assets/scss/index.scss';

	.bottom {
		width: 100%;
		height: 100%;
	}
</style>
