<template>
	<block>
		<view class="uni-grid-9">
			<view v-for="(item, index) in recommentMarketList" :key="index" class="uni-grid-9-item no-border-right recomment">
				<label class="uni-h7 uni-bold">{{item.symbol}}</label>
				<label :class="item.change > 0 ? 'uni-h4 uni-up' : 'uni-h4 uni-down' ">{{item.price}}</label>
				<label :class="item.change > 0 ? 'uni-h7 uni-up' : 'uni-h7 uni-down' ">{{item.change > 0 ? "+" : ""}}{{item.change}}%</label>
				<label class="uni-h7">≈{{item.cnyPrice}}CNY</label>
			</view>
		</view>
	</block>
</template>


<script>
	export default {
		data() {
	        return {
			}
	    },
		props:{
			recommentMarketList:{
				type: Array,
				default: function(){
					return [];
				}
			}
		},
		created() {
		},
		methods:{
		}
	}
</script>

<style scoped>
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
</style>
