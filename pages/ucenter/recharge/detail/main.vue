<template>
	<view class="container">
		<view class="coin">
			<view class="name">BTC</view>
			<view class="select" @click="selectCoin">选择币种<text class="uni-icon uni-icon-arrowright"></text></view>
		</view>
		<view class="box">
			<canvas class="qrcode" canvas-id="qrcodeCanvas"></canvas>
			<!-- <image class="qrcode" :src="qrcode"></image> -->
			<view class="save" @click="save">保存二维码至相册</view>
			<text class="t">充币地址</text>
			<view class="hash">0x2ce6befa5ddf335abe2be96652efa5ddf335ab</view>
			<view class="copy">复制</view>
		</view>
		<text class="tip t">请勿向上述地址充值任何非BTC资产,否则资产将不可找回。您充值至上述地址后,需要整个网络节点的确认,12次网络确认后到账,30次网络确认后可提币。最小充值金额:0.1BTC,小于最小金额的充值
			将不会上帐且无法退回。</text>
	</view>
</template>
<script>
	const QR = require("utils/wxqrcode.js");
	export default {
		data() {
			return {
				qrcode: null
			}
		},
		onReady() {

		},
		onShow() {
			let ctx = uni.createCanvasContext('qrcodeCanvas');
			const qrcode = QR.createQrCodeImg("https://gitee.com/koch/exchange-app", {
				size: 300
			});
			ctx.drawImage(qrcode, 0, 0, 140, 140);
			ctx.draw();
		},
		mounted() {

		},
		computed: {
		},
		methods: {
			selectCoin() {
				uni.navigateBack({})
			},
			save() {
				uni.canvasToTempFilePath({
					canvasId: 'qrcodeCanvas',
					success: function(res) {
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function() {
								console.log('save success');
								uni.showToast({
									title: '图片保存成功',
									duration: 1500,
									icon: "none"
								});
							},
							fail: function() {
								uni.showToast({  
										title: "保存失败",  
										duration: 1500,
									icon: "none"
								});
							}
						});
					},
					fail: function() {
						uni.showToast({  
								title: "保存失败",  
								duration: 1500,
								icon: "none"  
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: $page-row-spacing;
	}

	.container .coin {
		padding: 30upx 20upx;
		display: flex;
		background: #f7f6fb;
	}

	.container .coin .name {
		width: 50%;
	}

	.container .coin .select {
		width: 50%;
		text-align: right;
	}

	.container .box {
		padding: 40upx 20upx;
		background: #f7f6fb;
		text-align: center;
		margin-top: 30upx;
	}

	.container .box .qrcode {
		width: 300upx;
		height: 300upx;
		margin: 0 auto;
	}

	.container .box .save {
		width: 300upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		margin: 30upx auto;
		background: #e9f0f8;
		border: 1px solid #b5d5ec;
		border-radius: 6upx;
		color: #1883d5;
	}

	.container .t {
		color: $font-color-light;
	}

	.container .box .hash {
		color: $font-color-dark;
	}

	.container .box .copy {
		width: 150upx;
		padding: 10upx 0;
		background: #e7ebee;
		text-align: center;
		border-radius: 4upx;
		margin: 30upx auto;
	}

	.container .tip {
		display: block;
		margin: 40upx 0;
	}
</style>
