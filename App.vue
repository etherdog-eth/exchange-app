<script>
	import {
		mapActions,
		mapMutations
	} from 'vuex'
	export default {
		created() {

		},
		methods: {
			async getLocation() {
				return await new Promise((resolve, reject) => {
					wx.getLocation({
						success(location) {
							resolve(location)
						},
						fail(err) {
							console.log(err)
							reject(err)
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';

	.container {
		font-size: $font-base;
		height: 100%;
	}

	.wrapper {
		font-size: $font-base;
		text-align: left;
	}
	
	.uni-navbar__header-btns{
		padding: 0 !important;
		width: 150upx !important;
	}

	* {
		transition: width 2s;
		-moz-transition: width 2s;
		-webkit-transition: width 2s;
		-o-transition: width 2s;
	}

	/* font color */
	* {
		color: #353535;
	}

	.gray {
		color: #808080;
	}

	.wxParse {
		text-indent: 2em;
	}

	.wxParse image {
		text-indent: 0;
	}

	.wxParse ._view {
		padding: 0 10rpx;
		text-indent: 0;
	}

	.wxParse .p {
		text-indent: 1em;
	}
</style>
