<template>
	<view class="container">
		<homeSwiper :list="bannerList"></homeSwiper>
		<noticeSwiper :list="noticeList"></noticeSwiper>
		<view class="uni-divider"></view>
		<recommentMarketList :list="recommentMarketList"></recommentMarketList>
		<view class="ad">
			<image mode="widthFix" src="../../static/img/ad.jpg"></image>
		</view>
		<view class="uni-h4 title uni-bold rank-title">涨幅榜</view>
		<view class="uni-divider"></view>
		<marketList :list="marketList"></marketList>
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
		uniDrawer
	} from '@dcloudio/uni-ui'
	import homeSwiper from '../../components/homeSwiper.vue'
	import noticeSwiper from '../../components/noticeSwiper.vue'
	import recommentMarketList from '../../components/recommentMarketList.vue'
	import marketList from '../../components/marketList.vue'
	import settingDrawer from '../../components/settingDrawer.vue'
	export default {
		data() {
			return {
				bannerList: [],
				noticeList: [],
				recommentMarketList: [],
				marketList: [],
				drawerVisible: false
			}
		},
		onHide() {
			this.drawerVisible = false;
		},
		onNavigationBarButtonTap(e) {
			this.drawerVisible = !this.drawerVisible;
			
		},
		components: {
			homeSwiper,
			noticeSwiper,
			recommentMarketList,
			marketList,
			settingDrawer,
			uniDrawer
		},
		mounted() {
			//this.initPage()
			this.bannerList = [{
					id: 1,
					name: "1",
					value: "https://zb-public.oss-accelerate.aliyuncs.com/dir/fc7e02ea-b398-4cdc-a0e8-054aec6a57eb.jpg"
				},
				{
					id: 2,
					name: "2",
					value: "https://zb-public.oss-accelerate.aliyuncs.com/dir/d2ae1ccc-5e9f-4883-b614-7b0deaa9c0de.jpg"
				},
				{
					id: 3,
					name: "3",
					value: "https://zb-public.oss-accelerate.aliyuncs.com/dir/a71739a0-9cb1-4cbb-8ff8-b600b7ff1978.png"
				}
			];
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
			
			closeDrawer() {
				this.drawerVisible = false;
			}
		}
	}
</script>

<style scoped>
	page{
		overflow: hidden;
		height: 100%;
	}
	.container{
		overflow: auto;
		height: 100%;
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
