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
						<view :class="index == arr1.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr1" :key="index">{{ item }}</view>
					</view>
					<view class="data2">
						<view :class="index == arr2.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr2" :key="index">{{ item }}</view>
					</view>
					<view class="data3">
						<view :class="index == arr3.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr3" :key="index">{{ item }}</view>
					</view>
				</view>
			</view>
			<view class="right">
				<view class="result">
					<view class="result1">
						<view :class="(index == oneMax || index == oneAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result2">
						<view :class="(index == twoMax || index == twoAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result3">
						<view :class="(index == twoMax || index == twoAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
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
const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const oneMax = ref(-1)
const oneMax2 = ref(-1)
const oneMax3 = ref(-1)
const oneMin = ref(-1)
const oneMin2 = ref(-1)
const twoMax = ref(-1)
const twoMax2 = ref(-1)
const twoMax3 = ref(-1)
const twoMin = ref(-1)
const twoMin2 = ref(-1)
const threeMax = ref(-1)
const threeMax2 = ref(-1)
const threeMax3 = ref(-1)
const threeMin = ref(-1)
const threeMin2 = ref(-1)
const oneAmountMax = ref(-1)
const oneAmountMin = ref(-1)
const twoAmountMax = ref(-1)
const twoAmountMin = ref(-1)
const threeAmountMax = ref(-1)
const threeAmountMin = ref(-1)

/* 生命周期函数 */
onLoad(() => {
	getData()
	findHandle(0)
	findHandle(1)
	findHandle(2)
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
		if (arr1.value.length > 20) {
			arr1.value.pop()
		}
		if (arr2.value.length > 20) {
			arr2.value.pop()
		}
		if (arr3.value.length > 20) {
			arr3.value.pop()
		}
		num.value = ''
		setStorage()
		findHandle(0)
		findHandle(1)
		findHandle(2)
		// nextTick(() => {
		//   if (oneAmountMin.value == twoAmountMin.value) {
		//   	twoAmountMin.value = twoAmountMax.value
		//   }
		// })
	}
}
function clearValueHandle() {
	arr1.value.shift()
	arr2.value.shift()
	arr3.value.shift()
	setStorage()
	findHandle(0)
	findHandle(1)
	findHandle(2)
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
	}
}
function findMaxMin(arr){
	let number = [...new Set(arr)] // 记录一共有几个不重复的数组项
	let arrstr = arr.join('') // 原数组的拼接字符串，用于查找每项出现的次数。 
	let countarr=[] // 记录每一个不重复的项 各出现了几次
	for(let i = 0; i < number.length; i++){
			let count = arrstr.split(number[i]).length-1;//有几个这个数就会分成次数+1个项
			countarr.push(count)
	}
	return {
		max: number[countarr.indexOf(Math.max.apply(null,countarr))],
		min: number[countarr.indexOf(Math.min.apply(null,countarr))]
	}
	// console.log(number[countarr.indexOf(Math.max.apply(null,countarr))] ,"出现次数最多的")        
	// console.log(number[countarr.indexOf(Math.min.apply(null,countarr))] ,"出现次数最少的")
}
function findHandle(index) {
	let arr = []
	if (index == 0) {
		arr = arr1.value
	} else {
		arr = arr2.value
	}
	let arrRes = []
	for(let i = 0; i < 10; i++) {
		arrRes.push(find(arr, i.toString()))
	}
	let max = Math.max(...arrRes)
	let index1 = arrRes.map(item => item).indexOf(max)
	let temp = arrRes[index1]
	arrRes[index1] = -1
	let max2 = Math.max(...arrRes)
	let index2 = arrRes.map(item => item).indexOf(max2)
	let temp2 = arrRes[index2]
	arrRes[index2] = -1
	let max3 = Math.max(...arrRes)
	let index3 = arrRes.map(item => item).indexOf(max3)
	arrRes[index1] = temp
	arrRes[index2] = temp2
	let min = Math.min(...arrRes)
	let index4 = arrRes.map(item => item).indexOf(min)
	let temp3 = arrRes[index4]
	arrRes[index4] = 21
	let min2 = Math.min(...arrRes)
	let index5 = arrRes.map(item => item).indexOf(min2)
	arrRes[index4] = temp3
	let objMaxMin = findMaxMin(arr)
	if (index == 0) {
		oneMax.value = index1
		oneMax2.value = index2
		oneMax3.value = index3
		oneMin.value = index4
		oneMin2.value = index5
		oneAmountMax.value = objMaxMin.max
		oneAmountMin.value = objMaxMin.min
		if (oneMin2.value == oneAmountMin.value) {
			oneMin2.value = oneAmountMax.value
		}
		if (oneMax.value == oneAmountMin.value) {
			oneMax.value = oneMax2.value
		}
	} else if (index == 1) {
		twoMax.value = index1
		twoMax2.value = index2
		twoMax3.value = index3
		twoMin.value = index4
		twoMin2.value = index5
		twoAmountMax.value = objMaxMin.max
		twoAmountMin.value = objMaxMin.min
		if (twoMin2.value == twoAmountMin.value) {
			twoMin2.value = twoAmountMax.value
		}
		if (twoMax.value == twoAmountMin.value) {
			twoMax.value = twoMax2.value
		}
	} else if (index == 2) {
		threeMax.value = index1
		threeMax2.value = index2
		threeMax3.value = index3
		threeMin.value = index4
		threeMin2.value = index5
		threeAmountMax.value = objMaxMin.max
		threeAmountMin.value = objMaxMin.min
		if (threeMin2.value == threeAmountMin.value) {
			threeMin2.value = threeAmountMax.value
		}
		if (threeMax.value == threeAmountMin.value) {
			threeMax.value = threeMax2.value
		}
	}
}
function find(arr, item) {
	let res = arr.indexOf(item)
	if(res == -1) {
		return arr.length
	}
	return res
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
				justify-content: space-around;
				box-sizing: border-box;
				width: 84%;
				padding-left: 20rpx;
				.item {
					padding: 4rpx 30rpx;
					font-size: 24rpx;
					border: 1px solid #3a73d9;
					margin-right: 10rpx;
					border-bottom: none;
					&.end {
						border-bottom: 1px solid #3a73d9;;
					}
				}
			}
			.line {
				width: 1rpx;
				height: 600rpx;
				background-color: #ccc;
				position: absolute;
				right: 25rpx;
				top: 150rpx;
				border-radius: 1rpx;
			}
		}
		.right {
			padding: 10rpx;
			width: 50%;
			box-sizing: border-box;
			.result {
				display: flex;
				justify-content: space-around;
				.item {
					padding: 20rpx 10rpx;
					text-align: center;
					&.active {
						background-color: #f00;
					}
				}
			}
			.result1, .result2, .result3 {
				width: 23%;
			}
		}
	}
}
</style>
