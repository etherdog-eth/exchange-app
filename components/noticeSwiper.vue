<template>
	<view class="uni-swiper-msg notice">
		<view class="uni-swiper-msg-icon">
			<image src="../../static/icon/notice.png" mode="widthFix"></image>
		</view>
		
		<swiper vertical="true" autoplay="true" circular="true" interval="3000">
			<swiper-item v-for="(item, index) in noticeList" :key="index">
				<navigator>{{item}}</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:{
			noticeList:{
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
	.notice{
		margin: 0rpx 10px;
	}
</style>
