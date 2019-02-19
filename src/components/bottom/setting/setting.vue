<template>
	<div class="setting">
		<ul class="list">
			<li class="item">
				<div class="text">
					字号
				</div>
				<div class="tool">
					<div class="button-group">
						<div class="button" :class="{'active': theme.fontSize==='small'}" @click="setThemeFontSize('small')">小</div>
						<div class="button" :class="{'active': theme.fontSize==='medium'}" @click="setThemeFontSize('medium')">中</div>
						<div class="button" :class="{'active': theme.fontSize==='large'}" @click="setThemeFontSize('large')">大</div>
					</div>
				</div>
			</li>
			<li class="item">
				<div class="text">
					背景
				</div>
				<div class="tool">
					<ul class="color-selector">
						<li class="selector white" @click="setThemeColor('white')">
							<i class="iconfont icon-selected" v-show="theme.themeColor==='white'"></i>
						</li>
						<li class="selector green" @click="setThemeColor('green')">
							<i class="iconfont icon-selected" v-show="theme.themeColor==='green'"></i>
						</li>
						<li class="selector brown" @click="setThemeColor('brown')">
							<i class="iconfont icon-selected" v-show="theme.themeColor==='brown'"></i>
						</li>
						<li class="selector pink" @click="setThemeColor('pink')">
							<i class="iconfont icon-selected" v-show="theme.themeColor==='pink'"></i>
						</li>
					</ul>
				</div>
			</li>
			<li class="item">
				<div class="text">
					夜间
				</div>
				<div class="tool">
					<div class="switch">
						<my-switch v-model="nightMode" color="green" open-name="" close-name="" size="md"></my-switch>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import mySwitch from 'vue-switch/switch-2.vue';
	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {
		computed: {
			...mapState([
				'theme'
			]),
			nightMode: {
				get() {
					return this.$store.state.theme.nightMode;
				},
				set(value) {
					this.setThemeNightMode(value);
				}
			}
		},
		components: {
			'my-switch': mySwitch
		},
		methods: {
			...mapMutations([
				'setThemeFontSize',
				'setThemeColor',
				'setThemeNightMode'
			])
		},

	}
</script>

<style lang="scss">
	@import 'assets/scss/index.scss';

	.setting {
		width: 100%;
		height: 100%;
		background: $basic-color;

		.list {
			list-style: none;
			padding-left: 1rem;
			padding-right: 1rem;
			margin-bottom: 5vh;

			.item {
				height: 7vh;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.text {
					font-size: 0.8rem;
					color: #666666;
					font-weight: 300;
				}

				.tool {

					.button-group {

						.button {

							$button-color: #111111;

							float: left;
							width: 12vw;
							height: 4vh;
							border: $button-color solid 1px;
							text-align: center;
							line-height: 4vh;

							$button-border-radius: 0.2rem;

							&:first-child {
								border-radius: $button-border-radius 0 0 $button-border-radius;
								border-right: 0;
							}

							&:last-child {
								border-radius: 0 $button-border-radius $button-border-radius 0;
								border-left: 0;
							}

							&.active {
								background: $button-color;
								color: white;
							}
						}

					}

					.color-selector {
						list-style: none;
						padding-left: 0;
						// width: 70vw;

						.selector {
							float: left;
							width: 1.8rem;
							height: 1.8rem;
							border: 1px solid #aaaaaa;
							border-radius: 50%;
							margin-left: 2rem;
							text-align: center;
							line-height: 1.8rem;

							:first-child {
								margin-left: 0;
							}

							&.white {
								background: #fbfbfb;
							}

							&.green {
								background: #eeffdb;
							}

							&.brown {
								background: #ebe6d5;
							}

							&.pink {
								background: #f6ebf2;
							}


						}
					}

					.switch {}

				}

			}
		}
	}
</style>
