<template>
	<view class="container">
		<uni-nav-bar status-bar="false" fixed="true" shadow="false">
		    <view class="h-title">FEXCOIN</view>
		    <view class="h-title-l" slot="left" @click="showDrawer">
				<image src="../../static/img/home-icon.png" class="icon"></image>
			</view>
		    <view class="h-title-r" slot="right"></view>
		</uni-nav-bar>
		<view class="body">
			<u-swiper :list="list" height="350" border-radius="10"></u-swiper>
			<noticeSwiper :list="noticeList"></noticeSwiper>
		</view>
		<view class="uni-divider"></view>
		<recommentMarketList :list="recommentMarketList"></recommentMarketList>
		<view class="body">
			<view class="ad">
				<image mode="widthFix" src="../../static/img/ad.jpg"></image>
			</view>
			<view class="uni-h4 title uni-bold rank-title">涨幅榜</view>
			<view class="uni-divider"></view>
			<marketList :list="marketList"></marketList>
		</view>
		<uni-drawer :visible="drawerVisible" mask="false" mode="left" @close="closeDrawer">
			<settingDrawer></settingDrawer>
		</uni-drawer>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		uniDrawer, uniNavBar
	} from '@dcloudio/uni-ui'
	import homeSwiper from '../../components/homeSwiper.vue'
	import noticeSwiper from '../../components/noticeSwiper.vue'
	import recommentMarketList from '../../components/recommentMarketList.vue'
	import marketList from '../../components/marketList.vue'
	import settingDrawer from '../../components/settingDrawer.vue'
	export default {
		components: {
			homeSwiper,
			noticeSwiper,
			recommentMarketList,
			marketList,
			settingDrawer,
			uniDrawer,
			uniNavBar
		},
		data() {
			return {
				bannerList: [],
				noticeList: [],
				recommentMarketList: [],
				marketList: [],
				drawerVisible: false,
				list: [{
					image: 'https://zb-public.oss-accelerate.aliyuncs.com/dir/fc7e02ea-b398-4cdc-a0e8-054aec6a57eb.jpg',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://zb-public.oss-accelerate.aliyuncs.com/dir/d2ae1ccc-5e9f-4883-b614-7b0deaa9c0de.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://zb-public.oss-accelerate.aliyuncs.com/dir/a71739a0-9cb1-4cbb-8ff8-b600b7ff1978.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				]
			}
		},
		onHide() {
			this.drawerVisible = false;
		},
		onNavigationBarButtonTap(e) {
			
			
		},
		mounted() {
			
			this.noticeList = ["国际站4月1日14:00开放MDC/USDT交易市场", "国际站4月2日10:00上线HKL", "关于国际站即将上线 GCCT（Global Cash Coin)"];

			this.recommentMarketList = [{
					"symbol": "BTCUSDT",
					"name": "BTC",
					"price": 51807.8400,
					"priceUnit": "USDT",
					"cnyPrice": 360064.91,
					"coinCnyPrice": 6.95,
					"high": 35.51000000,
					"low": 35.51000000,
					"volume": 132412,
					"amount": 7223022.64800000,
					"change": 51.93
				},
				{
					"symbol": "ETHUSDT",
					"name": "ETH",
					"price": 807.2500,
					"priceUnit": "USDT",
					"cnyPrice": 1064.91,
					"coinCnyPrice": 6.95,
					"high": 35.51000000,
					"low": 35.51000000,
					"volume": 863446,
					"amount": 692302221.12300000,
					"change": -25.43
				},
				{
					"symbol": "EOSUSDT",
					"name": "EOS",
					"price": 63.9000,
					"priceUnit": "USDT",
					"cnyPrice": 988114.91,
					"coinCnyPrice": 6.95,
					"high": 35.51000000,
					"low": 35.51000000,
					"volume": 743356,
					"amount": 834513535.87600000,
					"change": 46.75
				}
			];

			this.marketList = [{
					"symbol": "BTCUSDT",
					"name": "BTC",
					"price": 51807.8400,
					"priceUnit": "USDT",
					"cnyPrice": 360064.91,
					"coinCnyPrice": 6.95,
					"high": 35.51000000,
					"low": 35.51000000,
					"volume": 132412,
					"amount": 7223022.64800000,
					"change": 51.93
				},
				{
					"symbol": "ETHUSDT",
					"name": "ETH",
					"price": 807.2500,
					"priceUnit": "USDT",
					"cnyPrice": 1064.91,
					"coinCnyPrice": 6.95,
					"high": 35.51000000,
					"low": 35.51000000,
					"volume": 863446,
					"amount": 692302221.12300000,
					"change": -25.43
				},
				{
					"symbol": "EOSUSDT",
					"name": "EOS",
					"price": 63.9000,
					"priceUnit": "USDT",
					"cnyPrice": 988114.91,
					"coinCnyPrice": 6.95,
					"high": 35.51000000,
					"low": 35.51000000,
					"volume": 743356,
					"amount": 834513535.87600000,
					"change": 46.75
				}
			];
		},
		computed: {
			/* ...mapState('home', ['data']),
			content() {
			  return this.data;
			} */
		},
		methods: {
			...mapActions('home', ['getHomeData']),
			/* async initPage() {
			  await this.getHomeData()
			} */
			showDrawer(){
				this.drawerVisible = !this.drawerVisible;
			},
			closeDrawer() {
				this.drawerVisible = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		height: 100%;
		overflow-x: hidden;
		.body{
			padding: 0 $page-row-spacing;
		}
	}	
	.h-title{
		text-align: center;
		font-weight: bold;
		font-size: $font-xl;
	}
	.h-title-l{
		padding-left: 20upx;
		.icon{
			width: 30px;
			height: 30px;
		}
	}
	.uni-common-mt {
		margin-top: 60upx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20upx;
	}

	.ad image {
		min-height: 100%;
		min-width: 100%;
	}

	.rank-title {
		padding: 20upx 20upx;
	}
	
</style>
