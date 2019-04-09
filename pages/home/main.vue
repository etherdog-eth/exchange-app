<template>
  <view class="container">
    <homeSwiper :list="bannerList"></homeSwiper>
	<noticeSwiper :list="noticeList"></noticeSwiper>
	<view class="uni-divider"></view>
	<recommentMarketList :list="recommentMarketList"></recommentMarketList>
	<view class="ad"><image mode="widthFix" src="../../static/img/ad.jpg"></image></view>
	<view class="uni-h5 title uni-bold rank-title">涨幅榜</view>
	<view class="uni-divider"></view>
	<marketList :list="marketList"></marketList>	
		
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import homeSwiper  from '../../components/homeSwiper.vue'
import noticeSwiper  from '../../components/noticeSwiper.vue'
import recommentMarketList  from '../../components/recommentMarketList.vue'
import marketList  from '../../components/marketList.vue'
export default {
	data() {
        return {
			bannerList: [],
			noticeList: [],
			recommentMarketList: [],
			marketList: []
        }
    },
  components: {
	  homeSwiper,
	  noticeSwiper,
	  recommentMarketList,
	  marketList
  },
  mounted() {
    //this.initPage()
	this.bannerList = [
		{id:1,name:"1",value:"https://oss999.oss-cn-hongkong.aliyuncs.com/upload/201903211634211654.jpg"},
		{id:2,name:"2",value:"https://oss999.oss-cn-hongkong.aliyuncs.com/upload/2019031211003874293.jpg"},
		{id:3,name:"3",value:"https://oss999.oss-cn-hongkong.aliyuncs.com/upload/2019031815071397696.jpg"}
	];
	this.noticeList = ["国际站4月1日14:00开放MDC/USDT交易市场","国际站4月2日10:00上线HKL","关于国际站即将上线 GCCT（Global Cash Coin)"];
	
	this.recommentMarketList = [
		{"symbol":"BTCUSDT","name":"BTC","price":51807.8400,"priceUnit":"USDT","cnyPrice":360064.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":132412,"amount":7223022.64800000,"change":51.93},
		{"symbol":"ETHUSDT","name":"ETH","price":807.2500,"priceUnit":"USDT","cnyPrice":1064.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":863446,"amount":692302221.12300000,"change":-25.43},
		{"symbol":"EOSUSDT","name":"EOS","price":63.9000,"priceUnit":"USDT","cnyPrice":988114.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":743356,"amount":834513535.87600000,"change":46.75}
	];
	
	this.marketList =  [
		{"symbol":"BTCUSDT","name":"BTC","price":51807.8400,"priceUnit":"USDT","cnyPrice":360064.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":132412,"amount":7223022.64800000,"change":51.93},
		{"symbol":"ETHUSDT","name":"ETH","price":807.2500,"priceUnit":"USDT","cnyPrice":1064.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":863446,"amount":692302221.12300000,"change":-25.43},
		{"symbol":"EOSUSDT","name":"EOS","price":63.9000,"priceUnit":"USDT","cnyPrice":988114.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":743356,"amount":834513535.87600000,"change":46.75}
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
  }
}
</script>

<style scoped>
	.uni-common-mt{
		margin-top:60upx;
		position:relative;
	}
	
	.info {
		position: absolute;
		right:20upx;
	}
	
	.ad image{
		min-height: 100%;
		min-width: 100%;
	}
	.rank-title{
		padding: 20px 20px;
	}
	
</style>
