<template>
	<view>
		<view class="content1">
			<view class="">
				欢迎！
			</view>
			<view class="">
				李四老师，您可以：
			</view>
		</view>
		<view class="msg">
			<img src="../../static/img/发布.png" alt="">
			<view class="title">
				<view class="">
					发布工作
				</view>
			</view>
		</view>
		<view class="msg">
			<img src="../../static/img/志愿者.png" alt="">
			<view class="title">
				<view class="">
					查看志愿者名录
				</view>
				
			</view>
		</view>
		<view class="msg">
			<img src="../../static/img/打卡.png" alt="">
			<view class="title">
				<view class="">
					查看打卡情况
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>
<style>
	page {
		background-color: #FFFFFF;
	}
	.content1 {
		/* height: 150upx; */
		background: #00669A;
		padding: 30upx 10upx;
	}
	.content1 view{
		font-size: 50upx;
		color: #fff;
		font-weight: bolder;
		margin-left: 18upx;
	}
	.msg{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 5px solid #eee;
		padding: 10px 5px;
	}
	.msg img{
		width: 16%;
		height: 100upx;
	}
	.msg .title{
		width: 70%;
	}
	.msg .title view{
		width: 50%;
		text-align: center;
		padding: 20upx;
		background: #00669A;
		color: #fff;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
</style>
