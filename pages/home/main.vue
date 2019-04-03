<template>
  <view class="container">
    <view class="uni-padding-wrap">
		<view class="page-section swiper">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color="#ffffff" indicator-color="#9d9d9d">
					<swiper-item>
							<view class="swiper-item"><image mode="widthFix" src="https://oss999.oss-cn-hongkong.aliyuncs.com/upload/201903211634211654.jpg"></image></view>
					</swiper-item>
					<swiper-item>
							<view class="swiper-item"><image mode="widthFix" src="https://oss999.oss-cn-hongkong.aliyuncs.com/upload/2019031211003874293.jpg"></image></view>
					</swiper-item>
					<swiper-item>
							<view class="swiper-item"><image mode="widthFix" src="https://oss999.oss-cn-hongkong.aliyuncs.com/upload/2019031815071397696.jpg"></image></view>
					</swiper-item>
			</swiper>
		</view>
	</view>
    <view class="uni-swiper-msg notice">
    	<view class="uni-swiper-msg-icon">
    		<image src="../../static/icon/notice.png" mode="widthFix"></image>
    	</view>
    	<swiper vertical="true" autoplay="true" circular="true" interval="3000">
    		<swiper-item v-for="(item, index) in notices" :key="index">
    			<navigator>{{item}}</navigator>
    		</swiper-item>
    	</swiper>
    </view>
	<view class="uni-divider"></view>
		<view class="uni-grid-9">
		    <view class="uni-grid-9-item no-border-right recomment">
		        <label class="uni-h7 uni-bold">BTC/USDT</label>
						<label class="uni-h4 uni-up">4134.51</label>
						<label class="uni-h7 uni-up">+0.90%</label>
						<label class="uni-h7">≈28767.23CNY</label>
		    </view>
				<view class="uni-grid-9-item no-border-right recomment">
				    <label class="uni-h7 uni-bold">BTC/USDT</label>
						<label class="uni-h4 uni-down">4134.51</label>
						<label class="uni-h7 uni-down">-0.90%</label>
						<label class="uni-h7">≈28767.23CNY</label>
				</view>
				<view class="uni-grid-9-item no-border-right recomment">
				    <label class="uni-h7 uni-bold">BTC/USDT</label>
						<label class="uni-h4 uni-up">4134.51</label>
						<label class="uni-h7 uni-up">+0.90%</label>
						<label class="uni-h7">≈28767.23CNY</label>
				</view>
		</view>
		<view class="ad"><image mode="widthFix" src="../../static/img/ad.jpg"></image></view>
		
		<view class="rank">
			<label class="uni-h5 title uni-bold">涨幅榜</label>
			<view class="uni-divider"></view>
			<view class="item thead">
				<view class="n uni-h7">名称</view>
				<view class="p uni-h7">最新价</view>
				<view class="t uni-h7">涨跌幅</view>
			</view>
			<view class="item uni-divider">
				<view class="n">BTC</view>
				<view class="p">25442.1</view>
				<view class="t"><label class="light uni-bg-up">+40.2%</label></view>
			</view>
			<view class="item uni-divider">
				<view class="n">BTC</view>
				<view class="p">25442.1</view>
				<view class="t"><label class="light uni-bg-up">+40.2%</label></view>
			</view>
			<view class="item uni-divider">
				<view class="n">BTC</view>
				<view class="p">25442.1</view>
				<view class="t"><label class="light uni-bg-up">+40.2%</label></view>
			</view>
			<view class="item uni-divider">
				<view class="n">BTC</view>
				<view class="p">25442.1</view>
				<view class="t"><label class="light uni-bg-up">+40.2%</label></view>
			</view>
			<view class="item uni-divider">
				<view class="n">BTC</view>
				<view class="p">25442.1</view>
				<view class="t"><label class="light uni-bg-up">+40.2%</label></view>
			</view>
			<view class="item uni-divider">
				<view class="n">BTC</view>
				<view class="p">25442.1</view>
				<view class="t"><label class="light uni-bg-up">+40.2%</label></view>
			</view>
		</view>
		
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	data() {
        return {
            background: ['color1', 'color2', 'color3'],
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500,
						notices: ["国际站4月1日14:00开放MDC/USDT交易市场qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq","国际站4月2日10:00上线HKL","关于国际站即将上线 GCCT（Global Cash Coin)"]
        }
    },
  mounted() {
    this.initPage()
  },
  components: {
  },
  computed: {
    ...mapState('home', ['data']),
    content() {
      return this.data;
    }
  },
  methods: {
    ...mapActions('home', ['getHomeData']),
    async initPage() {
      await this.getHomeData()
    }
  }
}
</script>

<style scoped>
	.swiper {
		height: 400upx;
		width: 100%;
	}
	.swiper-item {
		display: block;
		height: 400upx;
		line-height: 400upx;
		text-align: center;
	}
	.swiper-item image{
        min-height: 100%;
        min-width: 100%;
    }
	
	.uni-common-mt{
		margin-top:60upx;
		position:relative;
	}
	
	.info {
		position: absolute;
		right:20upx;
	}
	.notice{
		margin: 0rpx 10px;
	}
	.recomment .symbol{
		line-height: 40px;
	}
	.recomment .price{
		line-height: 30px;
	}
	.recomment .float{
		line-height: 30px;
	}
	.recomment .cny{
		line-height: 30px;
	}
	.ad image{
		min-height: 100%;
		min-width: 100%;
	}
	.rank{
		padding: 10px 0px;
	}
	.rank .title{
		padding: 10px 20px;
	}
	.rank .item{
		display: flex;
		padding: 20px 20px;
	}
	.rank .item .n{
		width: 35%;
	}
	.rank .item .p{
		width: 35%;
	}
	.rank .item .t{
		width: 30%;
		text-align: right;
	}
	.rank .item .t .light{
		display: block;
		width: 150px;
		color: #ffffff;
		text-align: center;
		float: right;
		border-radius: 4upx;
	}
</style>
