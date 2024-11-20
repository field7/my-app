<template>
	<view class="content">
		<view class="operate">
			<view class="input">
				<input type="number" v-model="num"/>
			</view>
			<view class="button">
				<view class="btn btn1" @click="setValueHandle">提交</view>
				<view class="btn btn2" @click="clearValueHandle">清除</view>
			</view>
		</view>
		<view class="data-box">
			<view class="left">
				<view class="line"></view>
				<view class="data">
					<view class="data1">
						<view :class="index == arr1.length - 1 ? 'item item1 end' : 'item item1'" v-for="(item, index) in arr1" :key="index">{{ item }}</view>
					</view>
					<view class="data2">
						<view :class="index == arr2.length - 1 ? 'item item2 end' : 'item item2'" v-for="(item, index) in arr2" :key="index">{{ item }}</view>
					</view>
					<view class="data3">
						<view :class="index == arr3.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr3" :key="index">{{ item }}</view>
					</view>
				</view>
			</view>
			<view class="right">
				<view class="result">
					<view class="result1">
						<view :class="{ 'item end': index === result1.length - 1, 'item': index !== result1.length - 1, 'item-blue': item.isSpecial, 'item-red': item.isBao }" v-for="(item, index) in result1" :key="index">{{ item.sum }}</view>
					</view>
					<view class="result2">
						<view :class="{ 'item end': index === result2.length - 1, 'item': index !== result2.length - 1, 'item-blue': item === '大'}" v-for="(item, index) in result2" :key="index">{{ item }}</view>
					</view>
					<view class="result3">
						<view :class="{ 'item end': index === result3.length - 1, 'item': index !== result3.length - 1, 'item-blue': item === '双'}" v-for="(item, index) in result3" :key="index">{{ item }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

/* data */
const num = ref('')
const arr1 = ref([])
const arr2 = ref([])
const arr3 = ref([])
const result1 = ref([])
const result2 = ref([])
const result3 = ref([])

/* 生命周期函数 */
onLoad(() => {
	getData()
	// findHandle(0)
	// findHandle(1)
	// findHandle(2)
	// nextTick(() => {
	//   if (oneAmountMin.value == twoAmountMin.value) {
	//   	twoAmountMin.value = twoAmountMax.value
	//   }
	// })
})

/* methods */
function setValueHandle() {
	if (typeof num.value[0] != 'undefined' && typeof num.value[1] != 'undefined' && typeof num.value[2] != 'undefined') {
		arr1.value.unshift(num.value[0]);
		arr2.value.unshift(num.value[1]);
		arr3.value.unshift(num.value[2]);
		findHandle()
		setStorage()
		setTimeout(() => {
			num.value = ''
		}, 100)
	}
}
function clearValueHandle() {
	arr1.value.shift()
	arr2.value.shift()
	arr3.value.shift()
	result1.value.shift()
	result2.value.shift()
	result3.value.shift()
	setStorage()
}
function setStorage() {
	uni.setStorageSync('arr1', JSON.stringify(arr1.value))
	uni.setStorageSync('arr2', JSON.stringify(arr2.value))
	uni.setStorageSync('arr3', JSON.stringify(arr3.value))
}
function getData() {
	if(uni.getStorageSync('arr1')){
		arr1.value = JSON.parse(uni.getStorageSync('arr1'))
		arr2.value = JSON.parse(uni.getStorageSync('arr2'))
		arr3.value = JSON.parse(uni.getStorageSync('arr3'))
		arr1.value.forEach((item, index) => {
			num.value = arr1.value[index] + arr2.value[index] + arr3.value[index]
			findHandle(true)
			num.value = ''
		})
	}
}
function findHandle(isPush) {
	let sum = Number(num.value[0]) + Number(num.value[1]) + Number(num.value[2])
	let json = {
		sum,
		isSpecial: false,
		isBao: false
	}
	if (Number(num.value[0]) == Number(num.value[1]) && Number(num.value[0]) == Number(num.value[2]) ) {
		json.isBao = true
	}
	if (isPush) {
		if (result1.value.length > 0) {
			if (result1.value[result1.value.length - 1]?.sum === sum) {
				json.isSpecial = true
				result1.value[result1.value.length - 1].isSpecial = true
			}
		}
		result1.value.push(json)
	} else {
		if (result1.value.length > 1) {
			if (result1.value[0]?.sum === sum) {
				json.isSpecial = true
				result1.value[0].isSpecial = true
			}
		}
		result1.value.unshift(json)
	}
	let re2 = ''
	if (sum > 10) {
		re2 = '大'
	} else {
		re2 = '小'
	}
	if (isPush) {
		result2.value.push(re2)
	} else {
		result2.value.unshift(re2)
	}
	let re3 = ''
	if (sum % 2 == 0) {
		re3 = '双'
	} else {
		re3 = '单'
	}
	if (isPush) {
		result3.value.push(re3)
	} else {
		result3.value.unshift(re3)
	}
}
</script>

<style lang="scss">
.content {
	.operate {
		padding: 30rpx 30rpx;
		.input {
			background-color: #f9f9f9;
			border: 1px solid #ccc;
			border-radius: 20rpx;
			margin-bottom: 20rpx;
			padding: 2rpx 10rpx;
			position: relative;
			input {
				padding: 30rpx 10rpx;
				height: 60rpx;
				font-size: 60rpx;
			}
		}
		.button {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10rpx;
			.btn {
				box-sizing: border-box;
				font-size: 32rpx;
				color: #fff;
				font-weight: 400;
				height: 66rpx;
				border-radius: 43rpx;
				background-color: #3a73d9;
				text-align: center;
				line-height: 66rpx;
			}
			.btn1 {
				width: 70%;
				background-color: #ff0000;
			}
			.btn2 {
				height: 54rpx;
				line-height: 54rpx;
				width: 28%;
				font-size: 24rpx;
			}
		}
	}
	.data-box {
		padding: 10rpx;
		display: flex;
		.left {
			width: 50%;
			padding: 10rpx;
			box-sizing: border-box;
			position: relative;
			.data {
				display: flex;
				box-sizing: border-box;
				padding-left: 10rpx;
				.item {
					padding: 10rpx 30rpx;
					font-size: 24rpx;
					border: 1px solid #ccc;
					color: #000;
					border-bottom: none;
					text-align: center;
					&.item1 {
						border-right: none;
					}
					&.item2 {
						border-right: none;
					}
					&.end {
						border-bottom: 1px solid #ccc;;
					}
				}
			}
			.line {
				width: 1rpx;
				height: 600rpx;
				background-color: #ccc;
				position: absolute;
				right: 35rpx;
				top: 150rpx;
				border-radius: 1rpx;
			}
		}
		.right {
			width: 50%;
			box-sizing: border-box;
			padding: 10rpx 40rpx;
			.result {
				display: flex;
				.item {
					padding: 10rpx 30rpx;
					font-size: 24rpx;
					border: 1px solid #ccc;
					border-bottom: none;
					text-align: center;
					&.end {
						border-bottom: 1px solid #ccc;;
					}
				}
				.result1 {
					.item {
						color: #000;
						border-right: none;
						&.item-blue {
							color: #0e78c7;
						}
						&.item-red {
							color: #f3514a;
						}
					}
				}
				.result2 {
					.item {
						color: #f3514a;
						border-right: none;
						&.item-blue {
							color: #0e78c7;
						}
					}
				}
				.result3 {
					.item {
						color: #f3514a;
						&.item-blue {
							color: #0e78c7;
						}
					}
				}
			}
		}
	}
}
</style>
