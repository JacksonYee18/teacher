<template>
	<view>
		<view class="content1">
			<view class="search-block">
				<view class="search-ico-wapper">
					<image src="../../static/img/sousuo.png" class="search-ico" mode="">
					</image>
				</view>
				<input type="text" value="" placeholder="搜索对话" class="search-text" maxlength="10" focus />
			</view>
		</view>
		<view class="">
			<view class="" v-for="(item,index) in list" :key="index">
				<view class="list-data">
					<view class="list-icon">
						<!-- <img :src="item.icon" :alt="item.icon" />
						 -->
						 <img src="../../static/img/男头像.png" alt="男头像" />
						 
					</view>
					<view class="list-msg">
						<view class="list-title">
							{{item.title}}
						</view>
						<view class="list-content">
							{{item.content}}
						</view>
					</view>
					<view class="list-time">
						{{item.time}}
					</view>
				</view>

				<!-- <view class="list-line" v-if="index<list.length-1">
				</view> -->
				<view class="list-line">
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	import data from "@/static/json/data.js"
	export default {
		data() {
			return {
				message: data.message,
				list: [],
			}
		},
		onLoad() {
			console.log(this.message);
			this.list = this.message

			//=>cityJson:[{id:'',city:''},{id:'',city:''}]
		},
		methods: {

		}
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

	/* 搜索框 */
	.search-ico,
	.search-ico-1 {
		width: 40upx;
		height: 40upx;
	}

	.search-text {
		font-size: 14px;
		background-color: #FFFFFF;
		height: 60upx;
		/* width: 480upx; */
		width: 100%;
		border-bottom-right-radius: 18px;
		border-top-right-radius: 18px
	}

	.search-block {
		display: flex;
		flex-direction: row;
		padding: 0upx 20upx;
		position: relative;
	}

	.search-ico-wapper {
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0upx 0upx 0upx 40upx;
		border-bottom-left-radius: 18px;
		border-top-left-radius: 18px;
	}

	.search-ico-wapper1 {
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0upx 40upx 0upx 0upx;
		border-bottom-left-radius: 18px;
		border-top-left-radius: 18px;
	}


	/* 信息列表 */
	.list-data {
		display: flex;
		justify-content: space-between;
		padding: 10px 15px;
		align-items: end;
	}

	.list-icon {
		width: 15%;
		height: 60upx;
	}

	.list-time {
		width: 20%;
		text-align: right;
	}

	.list-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.list-msg {
		width: 65%;
	}

	.list-icon img {
		width: 80upx;
		height: 80upx;
	}

	.list-line {
		height: 2upx;
		width: 90%;
		background-color: #eee;
		margin: 0 5%;
	}
</style>
