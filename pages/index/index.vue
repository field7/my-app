<template>
	<view class="content">
		<view class="operate">
			<view class="input">
				<input type="number" v-model="num"/>
				<!-- <div class="order">
					<div class="order-item">1</div>
					<div class="order-item">2</div>
					<div class="order-item">3</div>
					<div class="order-item">4</div>
					<div class="order-item">5</div>
					<div class="order-item">6</div>
					<div class="order-item">7</div>
					<div class="order-item">8</div>
					<div class="order-item">9</div>
					<div class="order-item">10</div>
					<div class="order-item">11</div>
				</div> -->
			</view>
			<view class="button">
				<view class="btn btn3" @click="getRnd">获取</view>
				<view class="btn btn1" @click="setValueHandle">提交</view>
				<view class="btn btn2" @click="clearValueHandle">清除</view>
			</view>
		</view>
		<view class="data-box">
			<view class="left">
				<view class="line"></view>
				<view class="data">
					<view class="data-item data1">
						<view :class="index == arr1.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr1" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data2">
						<view :class="index == arr2.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr2" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data3">
						<view :class="index == arr3.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr3" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data4">
						<view :class="index == arr4.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr4" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data5">
						<view :class="index == arr5.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr5" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data6">
						<view :class="index == arr6.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr6" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data7">
						<view :class="index == arr7.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr7" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data8">
						<view :class="index == arr8.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr8" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data9">
						<view :class="index == arr9.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr9" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data10">
						<view :class="index == arr10.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr10" :key="index">{{ item }}</view>
					</view>
					<view class="data-item data11">
						<view :class="index == arr11.length - 1 ? 'item end data-end' : 'item data-end'" v-for="(item, index) in arr11" :key="index">{{ item }}</view>
					</view>
				</view>
			</view>
			<view class="right">
				<div class="order">
					<div class="item">1</div>
					<div class="item">2</div>
					<div class="item">3</div>
					<div class="item">4</div>
					<div class="item">5</div>
					<div class="item">6</div>
					<div class="item">7</div>
					<div class="item">8</div>
					<div class="item">9</div>
					<div class="item">0</div>
				</div>
				<div class="times">
					<div class="item">{{ rightNum1 }}</div>
					<div class="item">{{ rightNum2 }}</div>
					<div class="item">{{ rightNum3 }}</div>
					<div class="item">{{ rightNum4 }}</div>
					<div class="item">{{ rightNum5 }}</div>
					<div class="item">{{ rightNum6 }}</div>
					<div class="item">{{ rightNum7 }}</div>
					<div class="item">{{ rightNum8 }}</div>
					<div class="item">{{ rightNum9 }}</div>
					<div class="item">{{ rightNum10 }}</div>
				</div>
				<div class="times red">
					<div class="item">{{ wrongNum1 }}</div>
					<div class="item">{{ wrongNum2 }}</div>
					<div class="item">{{ wrongNum3 }}</div>
					<div class="item">{{ wrongNum4 }}</div>
					<div class="item">{{ wrongNum5 }}</div>
					<div class="item">{{ wrongNum6 }}</div>
					<div class="item">{{ wrongNum7 }}</div>
					<div class="item">{{ wrongNum8 }}</div>
					<div class="item">{{ wrongNum9 }}</div>
					<div class="item">{{ wrongNum10 }}</div>
				</div>
				<!-- <view class="result">
					<view class="result1">
						<view :class="(index == oneMax || index == oneMin || index == oneAmountMax || index == oneAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result2">
						<view :class="(index == twoMax || index == twoMin || index == twoAmountMax || index == twoAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result3">
						<view :class="(index == threeMax || index == threeMin || index == threeAmountMax || index == threeAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result4">
						<view :class="(index == fourMax || index == fourMin || index == fourAmountMax || index == fourAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result5">
						<view :class="(index == fiveMax || index == fiveMin || index == fiveAmountMax || index == fiveAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result6">
						<view :class="(index == sixMax || index == sixMin || index == sixAmountMax || index == sixAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result7">
						<view :class="(index == sevenMax || index == sevenMin || index == sevenAmountMax || index == sevenAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result8">
						<view :class="(index == eightMax || index == eightMin || index == eightAmountMax || index == eightAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result9">
						<view :class="(index == nightMax || index == nightMin || index == nightAmountMax || index == nightAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result10">
						<view :class="(index == tenMax || index == tenMin || index == tenAmountMax || index == tenAmountMin) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
				</view> -->
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
const arr4 = ref([])
const arr5 = ref([])
const arr6 = ref([])
const arr7 = ref([])
const arr8 = ref([])
const arr9 = ref([])
const arr10 = ref([])
const arr11 = ref([])

let isRight1 = false
let isRight1Prev = ref(true)
let rightNum1 = ref(0)
let wrongNum1 = ref(0)

let isRight2 = false
let isRight2Prev = false
let rightNum2 = ref(0)
let wrongNum2 = ref(0)

let isRight3 = false
let isRight3Prev = false
let rightNum3 = ref(0)
let wrongNum3 = ref(0)

let isRight4 = false
let isRight4Prev = false
let rightNum4 = ref(0)
let wrongNum4 = ref(0)

let isRight5 = false
let isRight5Prev = false
let rightNum5 = ref(0)
let wrongNum5 = ref(0)

let isRight6 = false
let isRight6Prev = false
let rightNum6 = ref(0)
let wrongNum6 = ref(0)

let isRight7 = false
let isRight7Prev = false
let rightNum7 = ref(0)
let wrongNum7 = ref(0)

let isRight8 = false
let isRight8Prev = false
let rightNum8 = ref(0)
let wrongNum8 = ref(0)

let isRight9 = false
let isRight9Prev = false
let rightNum9 = ref(0)
let wrongNum9 = ref(0)

let isRight10 = false
let isRight10Prev = false
let rightNum10 = ref(0)
let wrongNum10 = ref(0)


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
const fourMax = ref(-1)
const fourMax2 = ref(-1)
const fourMax3 = ref(-1)
const fourMin = ref(-1)
const fourMin2 = ref(-1)
const fiveMax = ref(-1)
const fiveMax2 = ref(-1)
const fiveMax3 = ref(-1)
const fiveMin = ref(-1)
const fiveMin2 = ref(-1)

const sixMax = ref(-1)
const sixMax2 = ref(-1)
const sixMax3 = ref(-1)
const sixMin = ref(-1)
const sixMin2 = ref(-1)

const sevenMax = ref(-1)
const sevenMax2 = ref(-1)
const sevenMax3 = ref(-1)
const sevenMin = ref(-1)
const sevenMin2 = ref(-1)

const eightMax = ref(-1)
const eightMax2 = ref(-1)
const eightMax3 = ref(-1)
const eightMin = ref(-1)
const eightMin2 = ref(-1)

const nightMax = ref(-1)
const nightMax2 = ref(-1)
const nightMax3 = ref(-1)
const nightMin = ref(-1)
const nightMin2 = ref(-1)

const tenMax = ref(-1)
const tenMax2 = ref(-1)
const tenMax3 = ref(-1)
const tenMin = ref(-1)
const tenMin2 = ref(-1)

const oneAmountMax = ref(-1)
const oneAmountMin = ref(-1)
const twoAmountMax = ref(-1)
const twoAmountMin = ref(-1)
const threeAmountMax = ref(-1)
const threeAmountMin = ref(-1)
const fourAmountMax = ref(-1)
const fourAmountMin = ref(-1)
const fiveAmountMax = ref(-1)
const fiveAmountMin = ref(-1)

const sixAmountMax = ref(-1)
const sixAmountMin = ref(-1)

const sevenAmountMax = ref(-1)
const sevenAmountMin = ref(-1)

const eightAmountMax = ref(-1)
const eightAmountMin = ref(-1)

const nightAmountMax = ref(-1)
const nightAmountMin = ref(-1)

const tenAmountMax = ref(-1)
const tenAmountMin = ref(-1)

const orderNumber1 = ref(0)
const orderNumberNext1 = ref(0)
const oneMaxLast = ref(-1)
const oneMinLast = ref(-1)
const oneAmountMaxLast = ref(-1)
const oneAmountMinLast = ref(-1)

const orderNumber2 = ref(0)
const orderNumberNext2 = ref(0)
const twoMaxLast = ref(-1)
const twoMinLast = ref(-1)
const twoAmountMaxLast = ref(-1)
const twoAmountMinLast = ref(-1)

const orderNumber3 = ref(0)
const orderNumberNext3 = ref(0)
const threeMaxLast = ref(-1)
const threeMinLast = ref(-1)
const threeAmountMaxLast = ref(-1)
const threeAmountMinLast = ref(-1)

const orderNumber4 = ref(0)
const orderNumberNext4 = ref(0)
const fourMaxLast = ref(-1)
const fourMinLast = ref(-1)
const fourAmountMaxLast = ref(-1)
const fourAmountMinLast = ref(-1)

const orderNumber5 = ref(0)
const orderNumberNext5 = ref(0)
const fiveMaxLast = ref(-1)
const fiveMinLast = ref(-1)
const fiveAmountMaxLast = ref(-1)
const fiveAmountMinLast = ref(-1)

const orderNumber6 = ref(0)
const orderNumberNext6 = ref(0)
const sixMaxLast = ref(-1)
const sixMinLast = ref(-1)
const sixAmountMaxLast = ref(-1)
const sixAmountMinLast = ref(-1)

const orderNumber7 = ref(0)
const orderNumberNext7 = ref(0)
const sevenMaxLast = ref(-1)
const sevenMinLast = ref(-1)
const sevenAmountMaxLast = ref(-1)
const sevenAmountMinLast = ref(-1)

const orderNumber8 = ref(0)
const orderNumberNext8 = ref(0)
const eightMaxLast = ref(-1)
const eightMinLast = ref(-1)
const eightAmountMaxLast = ref(-1)
const eightAmountMinLast = ref(-1)

const orderNumber9 = ref(0)
const orderNumberNext9 = ref(0)
const nightMaxLast = ref(-1)
const nightMinLast = ref(-1)
const nightAmountMaxLast = ref(-1)
const nightAmountMinLast = ref(-1)

const orderNumber10 = ref(0)
const orderNumberNext10 = ref(0)
const tenMaxLast = ref(-1)
const tenMinLast = ref(-1)
const tenAmountMaxLast = ref(-1)
const tenAmountMinLast = ref(-1)

/* 生命周期函数 */
onLoad(() => {
	getData()
	setTimeout(() => {
		findHandle(0)
	}, 0)
	setTimeout(() => {
		findHandle(1)
	}, 100)
	setTimeout(() => {
		findHandle(2)
	}, 200)
	setTimeout(() => {
		findHandle(3)
	}, 300)
	setTimeout(() => {
		findHandle(4)
	}, 400)
	setTimeout(() => {
		findHandle(5)
	}, 500)
	setTimeout(() => {
		findHandle(6)
	}, 600)
	setTimeout(() => {
		findHandle(7)
	}, 700)
	setTimeout(() => {
		findHandle(8)
	}, 800)
	setTimeout(() => {
		findHandle(9)
	}, 900)
	setTimeout(() => {
		findHandle(10)
	}, 1000)
	// nextTick(() => {
	//   if (oneAmountMin.value == twoAmountMin.value) {
	//   	twoAmountMin.value = twoAmountMax.value
	//   }
	// })
})

/* methods */
function rnd(n, m){
	return parseInt(Math.random() * ( m - n + 1 ) + n);
}

function getRnd() {
	let arr = []
	for (let i = 0; i < 10; i++) {
		let nb = rnd(0, 1)
		arr.push(nb)
	}
	num.value = arr.join('')
}

function setValueHandle() {
	if (typeof num.value[0] != 'undefined' && typeof num.value[1] != 'undefined' && typeof num.value[2] != 'undefined' && typeof num.value[3] != 'undefined' && typeof num.value[4] != 'undefined' && typeof num.value[5] != 'undefined' && typeof num.value[6] != 'undefined' && typeof num.value[7] != 'undefined' && typeof num.value[8] != 'undefined' && typeof num.value[9] != 'undefined' && typeof num.value[10] != 'undefined') {
		arr1.value.unshift(num.value[0]);
		arr2.value.unshift(num.value[1]);
		arr3.value.unshift(num.value[2]);
		arr4.value.unshift(num.value[3]);
		arr5.value.unshift(num.value[4]);
		arr6.value.unshift(num.value[5]);
		arr7.value.unshift(num.value[6]);
		arr8.value.unshift(num.value[7]);
		arr9.value.unshift(num.value[8]);
		arr10.value.unshift(num.value[9]);
		arr11.value.unshift(num.value[10]);
		if (arr1.value.length > 20) {
			arr1.value.pop()
		}
		if (arr2.value.length > 20) {
			arr2.value.pop()
		}
		if (arr3.value.length > 20) {
			arr3.value.pop()
		}
		if (arr4.value.length > 20) {
			arr4.value.pop()
		}
		if (arr5.value.length > 20) {
			arr5.value.pop()
		}
		if (arr6.value.length > 20) {
			arr6.value.pop()
		}
		if (arr7.value.length > 20) {
			arr7.value.pop()
		}
		if (arr8.value.length > 20) {
			arr8.value.pop()
		}
		if (arr9.value.length > 20) {
			arr9.value.pop()
		}
		if (arr10.value.length > 20) {
			arr10.value.pop()
		}
		if (arr11.value.length > 20) {
			arr11.value.pop()
		}
		num.value = ''
		setStorage()
		setTimeout(() => {
			findHandle(0)
		}, 0)
		setTimeout(() => {
			findHandle(1)
		}, 100)
		setTimeout(() => {
			findHandle(2)
		}, 200)
		setTimeout(() => {
			findHandle(3)
		}, 300)
		setTimeout(() => {
			findHandle(4)
		}, 400)
		setTimeout(() => {
			findHandle(5)
		}, 500)
		setTimeout(() => {
			findHandle(6)
		}, 600)
		setTimeout(() => {
			findHandle(7)
		}, 700)
		setTimeout(() => {
			findHandle(8)
		}, 800)
		setTimeout(() => {
			findHandle(9)
		}, 900)
		setTimeout(() => {
			findHandle(10)
		}, 1000)
	}
}
function clearValueHandle() {
	arr1.value.shift()
	arr2.value.shift()
	arr3.value.shift()
	arr4.value.shift()
	arr5.value.shift()
	arr6.value.shift()
	arr7.value.shift()
	arr8.value.shift()
	arr9.value.shift()
	arr10.value.shift()
	arr11.value.shift()
	setStorage()
	setTimeout(() => {
		findHandle(0)
	}, 0)
	setTimeout(() => {
		findHandle(1)
	}, 100)
	setTimeout(() => {
		findHandle(2)
	}, 200)
	setTimeout(() => {
		findHandle(3)
	}, 300)
	setTimeout(() => {
		findHandle(4)
	}, 400)
	setTimeout(() => {
		findHandle(5)
	}, 500)
	setTimeout(() => {
		findHandle(6)
	}, 600)
	setTimeout(() => {
		findHandle(7)
	}, 700)
	setTimeout(() => {
		findHandle(8)
	}, 800)
	setTimeout(() => {
		findHandle(9)
	}, 900)
	setTimeout(() => {
		findHandle(10)
	}, 1000)
}
function setStorage() {
	uni.setStorageSync('arr1', JSON.stringify(arr1.value))
	uni.setStorageSync('arr2', JSON.stringify(arr2.value))
	uni.setStorageSync('arr3', JSON.stringify(arr3.value))
	uni.setStorageSync('arr4', JSON.stringify(arr4.value))
	uni.setStorageSync('arr5', JSON.stringify(arr5.value))
	uni.setStorageSync('arr6', JSON.stringify(arr6.value))
	uni.setStorageSync('arr7', JSON.stringify(arr7.value))
	uni.setStorageSync('arr8', JSON.stringify(arr8.value))
	uni.setStorageSync('arr9', JSON.stringify(arr9.value))
	uni.setStorageSync('arr10', JSON.stringify(arr10.value))
	uni.setStorageSync('arr11', JSON.stringify(arr11.value))
}
function getData() {
	if(uni.getStorageSync('arr1')){
		arr1.value = JSON.parse(uni.getStorageSync('arr1'))
		arr2.value = JSON.parse(uni.getStorageSync('arr2'))
		arr3.value = JSON.parse(uni.getStorageSync('arr3'))
		arr4.value = JSON.parse(uni.getStorageSync('arr4'))
		arr5.value = JSON.parse(uni.getStorageSync('arr5'))
		arr6.value = JSON.parse(uni.getStorageSync('arr6'))
		arr7.value = JSON.parse(uni.getStorageSync('arr7'))
		arr8.value = JSON.parse(uni.getStorageSync('arr8'))
		arr9.value = JSON.parse(uni.getStorageSync('arr9'))
		arr10.value = JSON.parse(uni.getStorageSync('arr10'))
		arr11.value = JSON.parse(uni.getStorageSync('arr11'))
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
		arr = JSON.parse(JSON.stringify(arr1.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum1.value = 0
		wrongNum1.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum1.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum1.value ++
					} else {
						rightNum1.value = 1
					}
				} else {
					rightNum1.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum1.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum1.value = 1
					} else {
						wrongNum1.value ++
					}
				} else {
					wrongNum1.value ++
				}
			}
		})
	} else if(index == 1) {
		arr = JSON.parse(JSON.stringify(arr2.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum2.value = 0
		wrongNum2.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum2.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum2.value ++
					} else {
						rightNum2.value = 1
					}
				} else {
					rightNum2.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum2.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum2.value = 1
					} else {
						wrongNum2.value ++
					}
				} else {
					wrongNum2.value ++
				}
			}
		})
	} else if (index == 2) {
		arr = JSON.parse(JSON.stringify(arr3.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum3.value = 0
		wrongNum3.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum3.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum3.value ++
					} else {
						rightNum3.value = 1
					}
				} else {
					rightNum3.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum3.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum3.value = 1
					} else {
						wrongNum3.value ++
					}
				} else {
					wrongNum3.value ++
				}
			}
		})
	} else if (index == 3) {
		arr = JSON.parse(JSON.stringify(arr4.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum4.value = 0
		wrongNum4.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum4.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum4.value ++
					} else {
						rightNum4.value = 1
					}
				} else {
					rightNum4.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum4.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum4.value = 1
					} else {
						wrongNum4.value ++
					}
				} else {
					wrongNum4.value ++
				}
			}
		})
	} else if (index == 4) {
		arr = JSON.parse(JSON.stringify(arr5.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum5.value = 0
		wrongNum5.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum5.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum5.value ++
					} else {
						rightNum5.value = 1
					}
				} else {
					rightNum5.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum5.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum5.value = 1
					} else {
						wrongNum5.value ++
					}
				} else {
					wrongNum5.value ++
				}
			}
		})
	} else if (index == 5) {
		arr = JSON.parse(JSON.stringify(arr6.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum6.value = 0
		wrongNum6.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum6.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum6.value ++
					} else {
						rightNum6.value = 1
					}
				} else {
					rightNum6.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum6.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum6.value = 1
					} else {
						wrongNum6.value ++
					}
				} else {
					wrongNum6.value ++
				}
			}
		})
	} else if (index == 6) {
		arr = JSON.parse(JSON.stringify(arr7.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum7.value = 0
		wrongNum7.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum7.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum7.value ++
					} else {
						rightNum7.value = 1
					}
				} else {
					rightNum7.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum7.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum7.value = 1
					} else {
						wrongNum7.value ++
					}
				} else {
					wrongNum7.value ++
				}
			}
		})
	} else if (index == 7) {
		arr = JSON.parse(JSON.stringify(arr8.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum8.value = 0
		wrongNum8.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum8.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum8.value ++
					} else {
						rightNum8.value = 1
					}
				} else {
					rightNum8.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum8.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum8.value = 1
					} else {
						wrongNum8.value ++
					}
				} else {
					wrongNum8.value ++
				}
			}
		})
	} else if (index == 8) {
		arr = JSON.parse(JSON.stringify(arr9.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum9.value = 0
		wrongNum9.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum9.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum9.value ++
					} else {
						rightNum9.value = 1
					}
				} else {
					rightNum9.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum9.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum9.value = 1
					} else {
						wrongNum9.value ++
					}
				} else {
					wrongNum9.value ++
				}
			}
		})
	} else if (index == 9) {
		arr = JSON.parse(JSON.stringify(arr10.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr11.value)).reverse()
		rightNum10.value = 0
		wrongNum10.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum10.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum10.value ++
					} else {
						rightNum10.value = 1
					}
				} else {
					rightNum10.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum10.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum10.value = 1
					} else {
						wrongNum10.value ++
					}
				} else {
					wrongNum10.value ++
				}
			}
		})
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
				letter-spacing: 20px;
			}
			.order {
				display: flex;
				position: absolute;
				left: 12px;
				top: 0;
				.order-item {
					padding: 0 2px;
				}
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
				width: 35%;
				background-color: #ff0000;
			}
			.btn2 {
				height: 54rpx;
				line-height: 54rpx;
				width: 28%;
				font-size: 24rpx;
			}
			.btn3 {
				width: 35%;
				background-color: #ff0000;
			}
		}
	}
	.data-box {
		padding: 10rpx;
		display: flex;
		.left {
			width: 55%;
			box-sizing: border-box;
			position: relative;
			.data {
				display: flex;
				box-sizing: border-box;
				width: 100%;
				padding-left: 10rpx;
				.item {
					width: 12px;
					height: 20px;
					text-align: center;
					line-height: 20px;
					min-width: 4px;
					font-size: 24rpx;
					border: 1px solid #3a73d9;
					border-bottom: none;
					margin-right: 4px;
					&.end {
						border-bottom: 1px solid #3a73d9;;
					}
					&.data-end {
						background-color: #ccc;
					}
				}
			}
			.line {
				width: 1rpx;
				height: 600rpx;
				background-color: #ccc;
				position: absolute;
				right: 20rpx;
				top: 0rpx;
				border-radius: 1rpx;
			}
		}
		.right {
			padding: 10rpx;
			width: 45%;
			position: relative;
			top: -26rpx;
			left: -5px;
			box-sizing: border-box;
			.order {
				display: flex;
				justify-content: space-around;
				.item {
					padding: 8rpx 8rpx 5rpx;
					text-align: center;
				}
			}
			.times {
				display: flex;
				justify-content: space-around;
				.item {
					padding: 8rpx 8rpx 5rpx;
					text-align: center;
					width: 23%;
					color: blue;
				}
				&.red {
					.item {
						color: #f00;
					}
				}
			}
			.result {
				display: flex;
				justify-content: space-around;
				.item {
					padding: 15rpx 10rpx;
					text-align: center;
					&.active {
						background-color: #f00;
					}
				}
			}
			.result1, .result2, .result3, .result4, .result5, .result6, .result7, .result8, .result9, .result10 {
				width: 10%;
			}
		}
	}
}
</style>
