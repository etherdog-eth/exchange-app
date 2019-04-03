<template>
  <view class="pmain">
    <view class="item">
			<text class="price">价格</text>
			<text class="num">数量</text>
		</view>
		<view class="item uni-down">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg buybg" style="width: 50%;"></view>
		</view>
		<view class="item uni-down">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg buybg" style="width: 10%;"></view>
		</view>
		<view class="item uni-down">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg buybg" style="width: 30%;"></view>
		</view>
		<view class="item uni-down">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg buybg" style="width: 5%;"></view>
		</view>
		<view class="item uni-down">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg buybg" style="width: 80%;"></view>
		</view>
		
		<view class="current-price">
			<view class="uni-h5 uni-bold uni-up usdt">521.5</view>
			<view class="uni-h7 cny uni-text-gray">≈28767.23 CNY</view>
		</view>
		
		<view class="item uni-up">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg sellbg" style="width: 80%;"></view>
		</view>
		<view class="item uni-up">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg sellbg" style="width: 10%;"></view>
		</view>
		<view class="item uni-up">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg sellbg" style="width: 40%;"></view>
		</view>
		<view class="item uni-up">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg sellbg" style="width: 60%;"></view>
		</view>
		<view class="item uni-up">
			<text class="price">521.5</text>
			<text class="num">825.4</text>
			<view class="bg sellbg" style="width: 20%;"></view>
		</view>
		<view class="depth uni-thinner-border"><view class="uni-h6">深度1</view></view>
  </view>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    
  }
}
</script>

<style scoped>
  .pmain {
    width: 100%;
    height: 600upx;
    position: relative;
    justify-content: space-between;
    text-align: left;
  }
  .pmain .item{
		position: relative;
		width: 100%;
		display: flex;
		font-size: 24upx;
	}
	.pmain .item .bg{
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		z-index: -9999;
	}
	.pmain .item .buybg{
		background: #fdf4f7;
	}
	.pmain .item .sellbg{
		background: #f0faf9;
	}
	.pmain .item .price{
		display: block;
		width: 50%;
		text-align: left;
	}
	.position .item .num{
		display: block;
		width: 50%;
		text-align: right;
		padding-right: 10upx;
	}
	.pmain .current-price {
		margin: 10upx 0;
	}
	.pmain .current-price .usdt{
		
	}
	.pmain .depth{
		margin-top: 10upx;
		margin-right: 10upx;
	}
	.pmain .depth .uni-h6{
		text-align: center;
		height: 60upx;
		line-height: 60upx;
	}
</style>
