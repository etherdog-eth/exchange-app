<template>
	<view class="container">
		<view class="tab">
			<text @click="switchTab" :class="tabIndex == 0 ? 'active uni-text-gray' : 'uni-text-gray'">全部委托</text>
			<text @click="switchTab" :class="tabIndex == 1 ? 'active uni-text-gray' : 'uni-text-gray'">历史记录</text>
		</view>
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					
					<view class="list">
						<view class="item uni-divider">
							<view class="title">
								<view class="n uni-h4"><text class="uni-up">买入</text><text class="uni-h5 uni-common-pl">BTC/USDT</text></view>
								<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
							</view>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">时间</view>
									<view class="c uni-text-gray">委托价</view>
									<view class="r uni-text-gray">委托量</view>
								</view>
								<view class="thead">
									<view class="l">11:19 04/14</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">成交总额</view>
									<view class="c uni-text-gray">成交均价</view>
									<view class="r uni-text-gray">成交量</view>
								</view>
								<view class="thead">
									<view class="l">5211.52</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
						</view>
					
						<view class="item uni-divider">
							<view class="title">
								<view class="n uni-h4"><text class="uni-up">买入</text><text class="uni-h5 uni-common-pl">EOS/USDT</text></view>
								<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
							</view>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">时间</view>
									<view class="c uni-text-gray">委托价</view>
									<view class="r uni-text-gray">委托量</view>
								</view>
								<view class="thead">
									<view class="l">11:19 04/14</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">成交总额</view>
									<view class="c uni-text-gray">成交均价</view>
									<view class="r uni-text-gray">成交量</view>
								</view>
								<view class="thead">
									<view class="l">5211.52</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
						</view>
					
						<view class="item uni-divider">
							<view class="title">
								<view class="n uni-h4"><text class="uni-down">卖出</text><text class="uni-h5 uni-common-pl">ETH/USDT</text></view>
								<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
							</view>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">时间</view>
									<view class="c uni-text-gray">委托价</view>
									<view class="r uni-text-gray">委托量</view>
								</view>
								<view class="thead">
									<view class="l">11:19 04/14</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">成交总额</view>
									<view class="c uni-text-gray">成交均价</view>
									<view class="r uni-text-gray">成交量</view>
								</view>
								<view class="thead">
									<view class="l">5211.52</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
						</view>
					
						<view class="item">
							<view class="title">
								<view class="n uni-h4"><text class="uni-down">卖出</text><text class="uni-h5 uni-common-pl">EOS/USDT</text></view>
								<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
							</view>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">时间</view>
									<view class="c uni-text-gray">委托价</view>
									<view class="r uni-text-gray">委托量</view>
								</view>
								<view class="thead">
									<view class="l">11:19 04/14</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">成交总额</view>
									<view class="c uni-text-gray">成交均价</view>
									<view class="r uni-text-gray">成交量</view>
								</view>
								<view class="thead">
									<view class="l">5211.52</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
						</view>
					
					</view>
					
					<uni-load-more :status="loadingType"></uni-load-more>
				</scroll-view>
			</swiper-item>
			
			<swiper-item class="tab-content">
				<scroll-view class="list-scroll-content" scroll-y>
					<empty></empty>
				</scroll-view>
				
			</swiper-item>
		</swiper>
		<uni-popup :show="showPopupTop" :position="popType" v-on:hidePopup="hidePopup">
			<view class="search">
				<text class="uni-h4 uni-common-pl">交易对</text>
				<view class="uni-thinner-border symbol-input">
					<input class="uni-input" />
				</view>
				<text class="uni-h4 uni-common-pl">订单状态</text>
				<view class="status">
					<view class="item">已成交</view>
					<view class="item">已撤消</view>
				</view>
				<view class="btns">
					<view class="reset btn" @click="reset">重置</view>
					<view class="ok btn" @click="search">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import uniLoadMore from '../../../components/uni-load-more/uni-load-more.vue';
	import {
		uniPopup
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				tabIndex: 0,
				loadingType: "more",
				showPopupTop: false,
				popType: 'top'
			}
		},
		components: {
			uniLoadMore,
			uniPopup
		},
		onNavigationBarButtonTap(e) {
			this.showPopupTop = !this.showPopupTop;
		},
		onReady() {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#0952c3',
				animation: {
					duration: 400,
					timingFunc: 'easeIn'
				}
			})
		},
		computed: {

		},
		methods: {
			switchTab() {
				this.tabIndex = Math.abs(this.tabIndex - 1)
			},
			changeTab(){
				
			},
			loadData(){
				if(this.loadingType === 'loading'){
					//防止重复加载
					return;
				}
				
				this.loadingType = 'loading';
				
				setTimeout(() =>{
					this.loadingType = 'noMore';
				}, 2000);
			},
			hidePopup(){
				this.showPopupTop = false;
			},
			search(){
				this.showPopupTop = false;
			},
			reset(){
				
			}
		}
	}
	
</script>
<style lang="scss">
	page, .container{
		background: $page-color-base;
		height: 100%;
	}
	.container .tab {
		padding-top: $page-row-spacing;
		padding-bottom: $page-row-spacing;
		padding-left: $page-row-spacing;
		color: #0952c3;
		font-size: $font-lg;
	}

	.container .tab text {
		padding-right: $page-row-spacing;
		font-weight: bold;
	}

	.container .tab .active {
		font-size: $font-xl;
		color: #000000;
	}
	
	.container .swiper-box{
		height: calc(100% - 110upx);
	}
	.container .list-scroll-content{
		height: 100%;
	}
	.container .uni-swiper-item{
		height: auto;
	}
	.container .list .item .title {
		display: flex;
		padding: 20upx 20upx;
	}

	.container .list .item .title .n {
		width: 50%;
	}

	.container .list .item .title .g {
		width: 50%;
		text-align: right;
	}

	.container .list .item .thead {
		display: flex;
		padding: 0 20upx 10upx 20upx;
	}

	.container .list .item .thead .l {
		width: 35%;
	}

	.container .list .item .thead .c {
		width: 35%;
	}

	.container .list .item .thead .r {
		width: 30%;
		text-align: right;
	}
	.container .search{
		width: 100%;
		background: #ffffff;
		text-align: left;
		padding-top: $page-row-spacing;
	}
	.container .search .symbol-input{
		width: 300upx;
		margin-top: $page-row-spacing;
		margin-bottom: $page-row-spacing;
		margin-left: $page-row-spacing;
	}
	.container .search .status{
		width: 100%;
		display: flex;
		padding-top: $page-row-spacing;
	}
	.container .search .status .item{
		width: 150upx;
		height: 60upx;
		line-height: 60upx;
		background: #ececec;
		margin-left: $page-row-spacing;;
		text-align: center;
		border-radius: 4upx;
	}
	.container .search .btns {
		display: flex;
		margin-top: 50upx;
	}
	.container .search .btns .btn{
		width: 50%;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		background: #ececec;
	}
	.container .search .btns .ok{
		background: #0952c3;
		color: #ffffff;
	}
</style>
