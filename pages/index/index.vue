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
					<view class="data4">
						<view :class="index == arr4.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr4" :key="index">{{ item }}</view>
					</view>
					<view class="data5">
						<view :class="index == arr5.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr5" :key="index">{{ item }}</view>
					</view>
					<view class="data6">
						<view :class="index == arr6.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr6" :key="index">{{ item }}</view>
					</view>
					<view class="data7">
						<view :class="index == arr7.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr7" :key="index">{{ item }}</view>
					</view>
					<view class="data8">
						<view :class="index == arr8.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr8" :key="index">{{ item }}</view>
					</view>
					<view class="data9">
						<view :class="index == arr9.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr9" :key="index">{{ item }}</view>
					</view>
					<view class="data10">
						<view :class="index == arr10.length - 1 ? 'item end' : 'item'" v-for="(item, index) in arr10" :key="index">{{ item }}</view>
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
					<div class="item">{{ orderNumber1 }}</div>
					<div class="item">{{ orderNumber2 }}</div>
					<div class="item">{{ orderNumber3 }}</div>
					<div class="item">{{ orderNumber4 }}</div>
					<div class="item">{{ orderNumber5 }}</div>
					<div class="item">{{ orderNumber6 }}</div>
					<div class="item">{{ orderNumber7 }}</div>
					<div class="item">{{ orderNumber8 }}</div>
					<div class="item">{{ orderNumber9 }}</div>
					<div class="item">{{ orderNumber10 }}</div>
				</div>
				<div class="times red">
					<div class="item">{{ orderNumberNext1 }}</div>
					<div class="item">{{ orderNumberNext2 }}</div>
					<div class="item">{{ orderNumberNext3 }}</div>
					<div class="item">{{ orderNumberNext4 }}</div>
					<div class="item">{{ orderNumberNext5 }}</div>
					<div class="item">{{ orderNumberNext6 }}</div>
					<div class="item">{{ orderNumberNext7 }}</div>
					<div class="item">{{ orderNumberNext8 }}</div>
					<div class="item">{{ orderNumberNext9 }}</div>
					<div class="item">{{ orderNumberNext10 }}</div>
				</div>
				<view class="result">
					<view class="result1">
						<view :class="(index == oneMax || index == oneAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result2">
						<view :class="(index == twoMax || index == twoAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result3">
						<view :class="(index == threeMax || index == threeAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result4">
						<view :class="(index == fourMax || index == fourAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result5">
						<view :class="(index == fiveMax || index == fiveAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result6">
						<view :class="(index == sixMax || index == sixAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result7">
						<view :class="(index == sevenMax || index == sevenAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result8">
						<view :class="(index == eightMax || index == eightAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result9">
						<view :class="(index == nightMax || index == nightAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
					</view>
					<view class="result10">
						<view :class="(index == tenMax || index == tenAmountMax) ? 'item active' : 'item'" v-for="(item, index) in numArr" :key="index">{{ index }}</view>
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
const arr4 = ref([])
const arr5 = ref([])
const arr6 = ref([])
const arr7 = ref([])
const arr8 = ref([])
const arr9 = ref([])
const arr10 = ref([])
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
function setValueHandle() {
	if (typeof num.value[0] != 'undefined' && typeof num.value[1] != 'undefined' && typeof num.value[2] != 'undefined' && typeof num.value[3] != 'undefined' && typeof num.value[4] != 'undefined' && typeof num.value[5] != 'undefined' && typeof num.value[6] != 'undefined' && typeof num.value[7] != 'undefined' && typeof num.value[8] != 'undefined' && typeof num.value[9] != 'undefined') {
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
	arr4.value.shift()
	arr5.value.shift()
	arr6.value.shift()
	arr7.value.shift()
	arr8.value.shift()
	arr9.value.shift()
	arr10.value.shift()
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
		arr = JSON.parse(JSON.stringify(arr1.value))
	} else if(index == 1) {
		arr = JSON.parse(JSON.stringify(arr2.value))
	} else if (index == 2) {
		arr = JSON.parse(JSON.stringify(arr3.value))
	} else if (index == 3) {
		arr = JSON.parse(JSON.stringify(arr4.value))
	} else if (index == 4) {
		arr = JSON.parse(JSON.stringify(arr5.value))
	} else if (index == 5) {
		arr = JSON.parse(JSON.stringify(arr6.value))
	} else if (index == 6) {
		arr = JSON.parse(JSON.stringify(arr7.value))
	} else if (index == 7) {
		arr = JSON.parse(JSON.stringify(arr8.value))
	} else if (index == 8) {
		arr = JSON.parse(JSON.stringify(arr9.value))
	} else if (index == 9) {
		arr = JSON.parse(JSON.stringify(arr10.value))
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
	if (index1 == index4) {
		index1 = index2
	}
	// if (index4 == objMaxMin.max || index4 == objMaxMin.min) {
	// 	index4 = index5
	// }
	if (index == 0) {
		if (arr[0] == oneMaxLast.value || arr[0] == oneMin.value) {
			orderNumber1.value ++
			orderNumberNext1.value = 0
		} else {
			orderNumber1.value = 0
			orderNumberNext1.value ++
		}
		// setTimeout(() => {
			oneMax.value = index1
			oneMax2.value = index2
			oneMax3.value = index3
			oneMin.value = index4
			oneMin2.value = index5
			oneAmountMax.value = objMaxMin.max
			oneAmountMin.value = objMaxMin.min
			oneMaxLast.value = oneMax.value
			oneMinLast.value = oneMin.value
			oneAmountMaxLast.value = oneAmountMax.value
			oneAmountMinLast.value = oneAmountMin.value
			console.log(orderNumber1.value)
		// }, 500)
		return
	}
	if (index == 1) {
		if (arr[0] == twoMaxLast.value || arr[0] == twoMin.value) {
			orderNumber2.value ++
			orderNumberNext2.value = 0
		} else {
			orderNumber2.value = 0
			orderNumberNext2.value ++
		}
		// setTimeout(()=> {
			twoMax.value = index1
			twoMax2.value = index2
			twoMax3.value = index3
			twoMin.value = index4
			twoMin2.value = index5
			twoAmountMax.value = objMaxMin.max
			twoAmountMin.value = objMaxMin.min
			twoMaxLast.value = twoMax.value
			twoMinLast.value = twoMin.value
			twoAmountMaxLast.value = twoAmountMax.value
			twoAmountMinLast.value = twoAmountMin.value
			console.log(orderNumber2.value)
		// }, 500)
	} else if (index == 2) {
		if (arr[0] == threeMaxLast.value || arr[0] == threeMin.value) {
			orderNumber3.value ++
			orderNumberNext3.value = 0
		} else {
			orderNumber3.value = 0
			orderNumberNext3.value ++
		}
		// setTimeout(() => {
			threeMax.value = index1
			threeMax2.value = index2
			threeMax3.value = index3
			threeMin.value = index4
			threeMin2.value = index5
			threeAmountMax.value = objMaxMin.max
			threeAmountMin.value = objMaxMin.min
			threeMaxLast.value = threeMax.value
			threeMinLast.value = threeMin.value
			threeAmountMaxLast.value = threeAmountMax.value
			threeAmountMinLast.value = threeAmountMin.value
			console.log(orderNumber3.value)
		// }, 500)
		return
	}
	if (index == 3) {
		if (arr[0] == fourMaxLast.value || arr[0] == fourMin.value) {
			orderNumber4.value ++
			orderNumberNext4.value = 0
		} else {
			orderNumber4.value = 0
			orderNumberNext4.value ++
		}
		// setTimeout(() => {
			fourMax.value = index1
			fourMax2.value = index2
			fourMax3.value = index3
			fourMin.value = index4
			fourMin2.value = index5
			fourAmountMax.value = objMaxMin.max
			fourAmountMin.value = objMaxMin.min
			fourMaxLast.value = fourMax.value
			fourMinLast.value = fourMin.value
			fourAmountMaxLast.value = fourAmountMax.value
			fourAmountMinLast.value = fourAmountMin.value
			console.log(orderNumber4.value)
		// }, 500)
	} else if (index == 4) {
		if (arr[0] == fiveMaxLast.value || arr[0] == fiveMin.value) {
			orderNumber5.value ++
			orderNumberNext5.value = 0
		} else {
			orderNumber5.value = 0
			orderNumberNext5.value ++
		}
		// setTimeout(() => {
			fiveMax.value = index1
			fiveMax2.value = index2
			fiveMax3.value = index3
			fiveMin.value = index4
			fiveMin2.value = index5
			fiveAmountMax.value = objMaxMin.max
			fiveAmountMin.value = objMaxMin.min
			fiveMaxLast.value = fiveMax.value
			fiveMinLast.value = fiveMin.value
			fiveAmountMaxLast.value = fiveAmountMax.value
			fiveAmountMinLast.value = fiveAmountMin.value
			console.log(orderNumber5.value)
		// }, 500)
		return
	}
	if (index == 5) {
		if (arr[0] == sixMaxLast.value || arr[0] == sixMin.value) {
			orderNumber6.value ++
			orderNumberNext6.value = 0
		} else {
			orderNumber6.value = 0
			orderNumberNext6.value ++
		}
		// setTimeout(() => {
			sixMax.value = index1
			sixMax2.value = index2
			sixMax3.value = index3
			sixMin.value = index4
			sixMin2.value = index5
			sixAmountMax.value = objMaxMin.max
			sixAmountMin.value = objMaxMin.min
			sixMaxLast.value = sixMax.value
			sixMinLast.value = sixMin.value
			sixAmountMaxLast.value = sixAmountMax.value
			sixAmountMinLast.value = sixAmountMin.value
			console.log(orderNumber6.value)
		// }, 500)
	} else if (index == 6) {
		if (arr[0] == sevenMaxLast.value || arr[0] == sevenMin.value) {
			orderNumber7.value ++
			orderNumberNext7.value = 0
		} else {
			orderNumber7.value = 0
			orderNumberNext7.value ++
		}
		// setTimeout(() => {
			sevenMax.value = index1
			sevenMax2.value = index2
			sevenMax3.value = index3
			sevenMin.value = index4
			sevenMin2.value = index5
			sevenAmountMax.value = objMaxMin.max
			sevenAmountMin.value = objMaxMin.min
			sevenMaxLast.value = sevenMax.value
			sevenMinLast.value = sevenMin.value
			sevenAmountMaxLast.value = sevenAmountMax.value
			sevenAmountMinLast.value = sevenAmountMin.value
			console.log(orderNumber7.value)
		// }, 500)
		return
	}
	if (index == 7) {
		if (arr[0] == eightMaxLast.value || arr[0] == eightMin.value) {
			orderNumber8.value ++
			orderNumberNext8.value = 0
		} else {
			orderNumber8.value = 0
			orderNumberNext8.value ++
		}
		// setTimeout(() => {
			eightMax.value = index1
			eightMax2.value = index2
			eightMax3.value = index3
			eightMin.value = index4
			eightMin2.value = index5
			eightAmountMax.value = objMaxMin.max
			eightAmountMin.value = objMaxMin.min
			eightMaxLast.value = eightMax.value
			eightMinLast.value = eightMin.value
			eightAmountMaxLast.value = eightAmountMax.value
			eightAmountMinLast.value = eightAmountMin.value
			console.log(orderNumber8.value)
		// }, 500)
		return
	}
	if (index == 8) {
		if (arr[0] == nightMaxLast.value || arr[0] == nightMin.value) {
			orderNumber9.value ++
			orderNumberNext9.value = 0
		} else {
			orderNumber9.value = 0
			orderNumberNext9.value ++
		}
		// setTimeout(() => {
			nightMax.value = index1
			nightMax2.value = index2
			nightMax3.value = index3
			nightMin.value = index4
			nightMin2.value = index5
			nightAmountMax.value = objMaxMin.max
			nightAmountMin.value = objMaxMin.min
			nightMaxLast.value = nightMax.value
			nightMinLast.value = nightMin.value
			nightAmountMaxLast.value = nightAmountMax.value
			nightAmountMinLast.value = nightAmountMin.value
			console.log(orderNumber9.value)
		// }, 500)
		return
	}
	if (index == 9) {
		if (arr[0] == tenMaxLast.value || arr[0] == tenMin.value) {
			orderNumber10.value ++
			orderNumberNext10.value = 0
		} else {
			orderNumber10.value = 0
			orderNumberNext10.value ++
		}
		// setTimeout(() => {
			tenMax.value = index1
			tenMax2.value = index2
			tenMax3.value = index3
			tenMin.value = index4
			tenMin2.value = index5
			tenAmountMax.value = objMaxMin.max
			tenAmountMin.value = objMaxMin.min
			tenMaxLast.value = tenMax.value
			tenMinLast.value = tenMin.value
			tenAmountMaxLast.value = tenAmountMax.value
			tenAmountMinLast.value = tenAmountMin.value
			console.log(orderNumber10.value)
		// }, 500)
		return
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
					padding: 4rpx 2rpx;
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
			position: relative;
			top: -60rpx;
			box-sizing: border-box;
			.order {
				display: flex;
				justify-content: space-around;
				.item {
					padding: 10rpx 10rpx 0;
					text-align: center;
					width: 23%;
				}
			}
			.times {
				display: flex;
				justify-content: space-around;
				.item {
					padding: 10rpx 10rpx 5px;
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
