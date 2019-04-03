<template>
  <view class="container">
			<view class="content">
				<view class="trade">
					<view class="tab">
						<view class="buy uni-bg-up">买入</view>
						<view class="sell uni-bg-down normal">卖出</view>
						<view class="parallelogram"></view>
					</view>
					<view class="price-input uni-thinner-border">
							<input class="uni-input " type="digit" placeholder="" value="521.052" />
						<view class="opt uni-thinner-left-border">
							<view class="button">-</view>
							<view class="button">+</view>
						</view>
					</view>
					<view class="uni-h7 uni-text-gray">≈28767.23 CNY</view>
					<view class="num-input uni-thinner-border">
						<input class="uni-input" type="digit" placeholder="数量" />
						<view class="opt"></view>
					</view>
					<view class="uni-h7 uni-text-gray">可用 28767.23BTC</view>
					 <slider value="0" min="0" max="100" show-value />
					 <view class="uni-h5">交易额  125.02555 USDT</view>
					 <button class="btn uni-bg-up">买入</button>
				</view>
				
				<view class="position">
					<positionList></positionList>
				</view>
			</view>
			
			<view class="uni-gap"></view>
			<entrustOrderList></entrustOrderList>
			<uni-drawer :visible="drawerVisible" mask="false" mode="left" @close="closeDrawer">
				<view class="drawer">
					<scroll-view class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
					    <view class="swiper-tab-list uni-bold"><label>自选</label></view>
							 <view class="swiper-tab-list uni-bold"><label class="active">USDT</label></view>
							 <view class="swiper-tab-list uni-bold"><label>BTC</label></view>
							 <view class="swiper-tab-list uni-bold"><label>ETH</label></view>
							 <view class="swiper-tab-list uni-bold"><label>USD</label></view>
					</scroll-view>
					<view class="uni-list">
					    <block>
					        <view class="uni-list-cell" hover-class="uni-list-cell-hover">
					            <view class="uni-triplex-row">
					                <view class="uni-triplex-left">
					                    <text class="uni-title uni-ellipsis">BTC/USDT</text>
					                </view>
					                <view class="uni-triplex-right">
					                    <text class="uni-h5 uni-up">5542.5</text>
					                </view>
					            </view>
					        </view>
					    </block>
							<block>
							    <view class="uni-list-cell" hover-class="uni-list-cell-hover">
							        <view class="uni-triplex-row">
							            <view class="uni-triplex-left">
							                <text class="uni-title uni-ellipsis">BTC/USDT</text>
							            </view>
							            <view class="uni-triplex-right">
							                <text class="uni-h5 uni-down">5542.5</text>
							            </view>
							        </view>
							    </view>
							</block>
							<block>
							    <view class="uni-list-cell" hover-class="uni-list-cell-hover">
							        <view class="uni-triplex-row">
							            <view class="uni-triplex-left">
							                <text class="uni-title uni-ellipsis">BTC/USDT</text>
							            </view>
							            <view class="uni-triplex-right">
							                <text class="uni-h5 uni-down">5542.5</text>
							            </view>
							        </view>
							    </view>
							</block>
							<block>
							    <view class="uni-list-cell" hover-class="uni-list-cell-hover">
							        <view class="uni-triplex-row">
							            <view class="uni-triplex-left">
							                <text class="uni-title uni-ellipsis">BTC/USDT</text>
							            </view>
							            <view class="uni-triplex-right">
							                <text class="uni-h5 uni-down">5542.5</text>
							            </view>
							        </view>
							    </view>
							</block>
							<block>
							    <view class="uni-list-cell" hover-class="uni-list-cell-hover">
							        <view class="uni-triplex-row">
							            <view class="uni-triplex-left">
							                <text class="uni-title uni-ellipsis">BTC/USDT</text>
							            </view>
							            <view class="uni-triplex-right">
							                <text class="uni-h5 uni-down">5542.5</text>
							            </view>
							        </view>
							    </view>
							</block>
					</view>
				</view>
			</uni-drawer>
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {uniDrawer} from '@dcloudio/uni-ui'
import {positionList } from '../../components/positionList.vue'
import {entrustOrderList } from '../../components/entrustOrderList.vue'
export default {
	onReady() {
		uni.setNavigationBarTitle({
			title:"BTC/USDT"
		})
	},
	onNavigationBarButtonTap(e){
		if(e.index == 0){
			this.drawerVisible = true;
		}else{
			uni.navigateTo({
				url: "/pages/trade/kline/main"
			})
		}
	},
  components: {
		uniDrawer,
		positionList,
		entrustOrderList
  },
	data() {
		return {
			drawerVisible: false,
			scrollLeft: 0
		}
	},
  computed: {
    
  },
  methods: {
		
		
    closeDrawer() {
    	this.drawerVisible = false;
    }
  }
}
</script>

<style scoped>
	.content{
		margin-top: 20upx;
		display: flex;
	}
	.content .trade{
		width: 60%;
		padding-left: 20upx;
		padding-right: 20upx;
	}
	.content .trade .tab{
		position: relative;
		display: flex;
		text-align: center;
	}
	.content .trade .tab .buy{
		color: #ffffff;
		font-weight: bold;
		width: 50%;
		height: 70upx;
		line-height: 70upx;
	}
	.content .trade .tab .sell{
		color: #ffffff;
		font-weight: bold;
		width: 50%;
		height: 70upx;
		line-height: 70upx;
	}
	.content .trade .tab .normal{
		background: #ECECF6;
		color: #555555;
		font-weight: bold;
	}
	.content .trade .tab .parallelogram {
		position: absolute;
		left: calc(50% - 19upx);
		top: 0;
    transform: translate(-50%, -50%);
    width: 36upx;
    height: 74upx;
    background: #ffffff;
    -webkit-transform: skew(-30deg);
    -moz-transform: skew(-30deg);
    -o-transform: skew(-30deg);
    transform: skew(-30deg);
	}       
	.content .trade .price-input{
		position: relative;
		margin-top: 30upx;
	}
	.content .trade .price-input input{
		position: relative;
		padding-right: 180upx;
	}
	.content .trade .price-input .opt{
		display: flex;
		position: absolute;
		top: 2upx;
		right: 0;
		width: 180upx;
		height: 78upx;
		line-height: 78upx;
	}
	.content .trade .num-input{
		position: relative;
		margin-top: 30upx;
	}
	.content .trade .price-input .opt .button{
		border: 0;
		background: #fff;
		width: 80upx;
		height: 78upx;
		line-height: 78upx;
		text-align: center;
		font-size: 48upx;
		font-weight: 400;
	}
	.content .trade .btn{
		height: 74upx;
		line-height: 74upx;
		color: #fff;
		font-size: 28upx;
		font-weight: bold;
		margin-top: 30upx;
	}
	.content .position{
		width: 40%;
	}
	.drawer{
		padding-top: calc(var(--status-bar-height) + 40px);
		width: 100%;
	}
	.drawer .active{
		color: #0056B3;
		border-bottom: 6upx solid #0056B3;
	}
</style>
