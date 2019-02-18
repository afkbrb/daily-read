<template>
	<div class="setting-pad">
		<ul class="list">
			<li class="item">
				<div class="text">
					字号
				</div>
				<div class="tool">
					<div class="button-group">
						<div class="button active">小</div>
						<div class="button">中</div>
						<div class="button">大</div>
					</div>
				</div>
			</li>
			<li class="item">
				<div class="text">
					背景
				</div>
				<div class="tool">
					<ul class="color-selector">
						<li class="selector white"></li>
						<li class="selector green"></li>
						<li class="selector brown"></li>
						<li class="selector pink"></li>
					</ul>
				</div>
			</li>
			<li class="item">
				<div class="text">
					夜间
				</div>
				<div class="tool">
					<div class="switch">
						<my-switch v-model="toggle" color="green" open-name="" close-name="" size="md"></my-switch>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import mySwitch from 'vue-switch/switch-2.vue';

	export default {
		name: 'settingPad',
		data() {
			return {
				toggle: true
			};
		},
		components: {
			'my-switch': mySwitch
		}

	}
</script>

<style lang="scss">
	.setting-pad {
		width: 100%;
		height: 100%;
		background: #fefefe;

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
