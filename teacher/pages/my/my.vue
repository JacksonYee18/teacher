<template>
	<view>
		<view class="content1">
			<img src="../../static/img/男头像.png" alt="">
			<view class="">
				李四老师
			</view>
		</view>
		<view class="content">
			<view class="three">
				<view class="">
					<img src="../../static/img/资料.png" alt="">
				</view>
				<view class="line">

				</view>
				<view class="">
					<img src="../../static/img/报名.png" alt="">
				</view>
				<view class="line">

				</view>
				<view class="">
					<img src="../../static/img/组织机构图.png" alt="">
				</view>
			</view>
			<view class="about">
				<img src="../../static/img/关于.png" alt="">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #F2F2F2;
	}

	.content1 {
		/* height: 150upx; */
		background: #00669A;
		padding: 30upx 10upx;
		display: flex;
		align-items: center;
	}


	.content1 view {
		font-size: 50upx;
		color: #fff;
		font-weight: bolder;
		margin-left: 18upx;
	}

	.content1 img {
		width: 100upx;
		height: 100upx;
		color: #fff;
		font-weight: bolder;
		margin-left: 18upx;
	}

	.content img {
		width: 160upx;
		height: 160upx;
	}

	.three {
		display: flex;
		margin-top: 10upx;
		justify-content: space-around;
		align-items: center;
		height: 300upx;
	}

	.line {
		height: 300upx;
		width: 2upx;
		background-color: #666;
		height: 160upx;
		padding-top: 80upx;
	}
</style>
