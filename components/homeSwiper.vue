<template>
	<block>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500" indicator-active-color="#ffffff" indicator-color="#9d9d9d">
						<swiper-item v-for="(item, index) in bannerList" :key="index">
								<view class="swiper-item"><image mode="widthFix" :src="item.value"></image></view>
						</swiper-item>
				</swiper>
			</view>
		</view>
	</block>
</template>

<script>
	export default {
		data() {
	        return {
				background: ['color1', 'color2', 'color3'],
	            indicatorDots: true,
	            autoplay: true,
	            interval: 2000,
	            duration: 500,
			}
	    },
		props:{
			bannerList:{
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

<style>
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
</style>
