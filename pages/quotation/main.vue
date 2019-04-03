<template>
  <view class="container">
		<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
		 :activeColor="activeColor"></uni-segmented-control>
		<view class="rank">
			<view class="uni-divider"></view>
			<view class="item thead">
				<view class="n uni-h6">名称</view>
				<view class="p uni-h6">最新价</view>
				<view class="t uni-h6">涨跌幅</view>
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
import {uniSegmentedControl} from '@dcloudio/uni-ui'

export default {
	data() {
        return {
			items: [
				'自选',
				'USDT'
			],
			current: 0,
			activeColor: '#007aff',
			styleType: 'button'
		}
    },
  mounted() {
    
  },
  components: {
	  uniSegmentedControl
  },
  computed: {
    
  },
  methods: {
    onClickItem(index) {
    	if (this.current !== index) {
    		this.current = index;
    	}
    }
  }
}
</script>

<style scoped>
	.tab-bar{
		display: flex;
		margin: 20upx 20upx;
		border: 2upx solid #cfcfcf;
		border-radius: 10upx;
	}
	.tab-bar .tab-bar-item{
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}
	.tab-bar .active{
		background: #1478ca;
		color: #ffffff;
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
