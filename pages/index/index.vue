<template>
	<view class="content">
		<view class="operate">
			<view class="input">
				<input type="number" v-model="num"/>
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
					<view class="data-item">
						<view :class="index == arr31.length - 1 ? 'item end data-end' : 'item data-end'" v-for="(item, index) in arr31" :key="index">{{ item == 1 ? '大' : '小' }}</view>
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
				<div style="height: 10px;"></div>
				<div class="times">
					<div class="item">{{ rightNum11 }}</div>
					<div class="item">{{ rightNum12 }}</div>
					<div class="item">{{ rightNum13 }}</div>
					<div class="item">{{ rightNum14 }}</div>
					<div class="item">{{ rightNum15 }}</div>
					<div class="item">{{ rightNum16 }}</div>
					<div class="item">{{ rightNum17 }}</div>
					<div class="item">{{ rightNum18 }}</div>
					<div class="item">{{ rightNum19 }}</div>
					<div class="item">{{ rightNum20 }}</div>
				</div>
				<div class="times red">
					<div class="item">{{ wrongNum11 }}</div>
					<div class="item">{{ wrongNum12 }}</div>
					<div class="item">{{ wrongNum13 }}</div>
					<div class="item">{{ wrongNum14 }}</div>
					<div class="item">{{ wrongNum15 }}</div>
					<div class="item">{{ wrongNum16 }}</div>
					<div class="item">{{ wrongNum17 }}</div>
					<div class="item">{{ wrongNum18 }}</div>
					<div class="item">{{ wrongNum19 }}</div>
					<div class="item">{{ wrongNum20 }}</div>
				</div>
				<div style="height: 10px;"></div>
				<div class="times">
					<div class="item">{{ rightNum21 }}</div>
					<div class="item">{{ rightNum22 }}</div>
					<div class="item">{{ rightNum23 }}</div>
					<div class="item">{{ rightNum24 }}</div>
					<div class="item">{{ rightNum25 }}</div>
					<div class="item">{{ rightNum26 }}</div>
					<div class="item">{{ rightNum27 }}</div>
					<div class="item">{{ rightNum28 }}</div>
					<div class="item">{{ rightNum29 }}</div>
					<div class="item">{{ rightNum30 }}</div>
				</div>
				<div class="times red">
					<div class="item">{{ wrongNum21 }}</div>
					<div class="item">{{ wrongNum22 }}</div>
					<div class="item">{{ wrongNum23 }}</div>
					<div class="item">{{ wrongNum24 }}</div>
					<div class="item">{{ wrongNum25 }}</div>
					<div class="item">{{ wrongNum26 }}</div>
					<div class="item">{{ wrongNum27 }}</div>
					<div class="item">{{ wrongNum28 }}</div>
					<div class="item">{{ wrongNum29 }}</div>
					<div class="item">{{ wrongNum30 }}</div>
				</div>
				<div style="height: 20px;"></div>
				<div class="data" v-if="num">
					<div class="item">{{ num[0] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[1] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[2] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[3] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[4] == '1' ? '大' : '小'}}</div>
					<div class="item line">-</div>
					<div class="item">{{ num[5] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[6] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[7] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[8] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[9] == '1' ? '大' : '小'}}</div>
				</div>
				<div class="data" v-if="num">
					<div class="item">{{ num[10] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[11] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[12] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[13] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[14] == '1' ? '大' : '小'}}</div>
					<div class="item line">-</div>
					<div class="item">{{ num[15] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[16] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[17] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[18] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[19] == '1' ? '大' : '小'}}</div>
				</div>
				<div class="data" v-if="num">
					<div class="item">{{ num[20] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[21] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[22] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[23] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[24] == '1' ? '大' : '小'}}</div>
					<div class="item line">-</div>
					<div class="item">{{ num[25] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[26] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[27] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[28] == '1' ? '大' : '小'}}</div>
					<div class="item">{{ num[29] == '1' ? '大' : '小'}}</div>
				</div>
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
const arr12 = ref([])
const arr13 = ref([])
const arr14 = ref([])
const arr15 = ref([])
const arr16 = ref([])
const arr17 = ref([])
const arr18 = ref([])
const arr19 = ref([])
const arr20 = ref([])
const arr21 = ref([])
const arr22 = ref([])
const arr23 = ref([])
const arr24 = ref([])
const arr25 = ref([])
const arr26 = ref([])
const arr27 = ref([])
const arr28 = ref([])
const arr29 = ref([])
const arr30 = ref([])
const arr31 = ref([])

let rightNum1 = ref(0)
let wrongNum1 = ref(0)

let rightNum2 = ref(0)
let wrongNum2 = ref(0)

let rightNum3 = ref(0)
let wrongNum3 = ref(0)

let rightNum4 = ref(0)
let wrongNum4 = ref(0)

let rightNum5 = ref(0)
let wrongNum5 = ref(0)

let rightNum6 = ref(0)
let wrongNum6 = ref(0)

let rightNum7 = ref(0)
let wrongNum7 = ref(0)

let rightNum8 = ref(0)
let wrongNum8 = ref(0)

let rightNum9 = ref(0)
let wrongNum9 = ref(0)

let rightNum10 = ref(0)
let wrongNum10 = ref(0)

let rightNum11 = ref(0)
let wrongNum11 = ref(0)

let rightNum12 = ref(0)
let wrongNum12 = ref(0)

let rightNum13 = ref(0)
let wrongNum13 = ref(0)

let rightNum14 = ref(0)
let wrongNum14 = ref(0)

let rightNum15 = ref(0)
let wrongNum15 = ref(0)

let rightNum16 = ref(0)
let wrongNum16 = ref(0)

let rightNum17 = ref(0)
let wrongNum17 = ref(0)

let rightNum18 = ref(0)
let wrongNum18 = ref(0)

let rightNum19 = ref(0)
let wrongNum19 = ref(0)

let rightNum20 = ref(0)
let wrongNum20 = ref(0)

let rightNum21 = ref(0)
let wrongNum21 = ref(0)

let rightNum22 = ref(0)
let wrongNum22 = ref(0)

let rightNum23 = ref(0)
let wrongNum23 = ref(0)

let rightNum24 = ref(0)
let wrongNum24 = ref(0)

let rightNum25 = ref(0)
let wrongNum25 = ref(0)

let rightNum26 = ref(0)
let wrongNum26 = ref(0)

let rightNum27 = ref(0)
let wrongNum27 = ref(0)

let rightNum28 = ref(0)
let wrongNum28 = ref(0)

let rightNum29 = ref(0)
let wrongNum29 = ref(0)

let rightNum30 = ref(0)
let wrongNum30 = ref(0)

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
	setTimeout(() => {
		findHandle(11)
	}, 1100)
	setTimeout(() => {
		findHandle(12)
	}, 1200)
	setTimeout(() => {
		findHandle(13)
	}, 1300)
	setTimeout(() => {
		findHandle(14)
	}, 1400)
	setTimeout(() => {
		findHandle(15)
	}, 1500)
	setTimeout(() => {
		findHandle(16)
	}, 1600)
	setTimeout(() => {
		findHandle(17)
	}, 1700)
	setTimeout(() => {
		findHandle(18)
	}, 1800)
	setTimeout(() => {
		findHandle(19)
	}, 1900)
	setTimeout(() => {
		findHandle(20)
	}, 2000)
	setTimeout(() => {
		findHandle(21)
	}, 2100)
	setTimeout(() => {
		findHandle(22)
	}, 2200)
	setTimeout(() => {
		findHandle(23)
	}, 2300)
	setTimeout(() => {
		findHandle(24)
	}, 2400)
	setTimeout(() => {
		findHandle(25)
	}, 2500)
	setTimeout(() => {
		findHandle(26)
	}, 2600)
	setTimeout(() => {
		findHandle(27)
	}, 2700)
	setTimeout(() => {
		findHandle(28)
	}, 2800)
	setTimeout(() => {
		findHandle(29)
	}, 2900)
})

/* methods */
function rnd(n, m){
	return parseInt(Math.random() * ( m - n + 1 ) + n);
}

function getRnd() {
	let arr = []
	for (let i = 0; i < 30; i++) {
		let nb = rnd(0, 1)
		arr.push(nb)
	}
	num.value = arr.join('')
}

function setValueHandle() {
	if (
		typeof num.value[0] != 'undefined' && typeof num.value[1] != 'undefined' && typeof num.value[2] != 'undefined' && typeof num.value[3] != 'undefined' && typeof num.value[4] != 'undefined' && typeof num.value[5] != 'undefined' && typeof num.value[6] != 'undefined' && typeof num.value[7] != 'undefined' && typeof num.value[8] != 'undefined' && typeof num.value[9] != 'undefined' && typeof num.value[10] != 'undefined' &&
		typeof num.value[10] != 'undefined' && typeof num.value[11] != 'undefined' && typeof num.value[12] != 'undefined' && typeof num.value[13] != 'undefined' && typeof num.value[14] != 'undefined' && typeof num.value[15] != 'undefined' && typeof num.value[16] != 'undefined' && typeof num.value[17] != 'undefined' && typeof num.value[18] != 'undefined' && typeof num.value[19] != 'undefined' && typeof num.value[20] != 'undefined' &&
		typeof num.value[20] != 'undefined' && typeof num.value[21] != 'undefined' && typeof num.value[22] != 'undefined' && typeof num.value[23] != 'undefined' && typeof num.value[24] != 'undefined' && typeof num.value[25] != 'undefined' && typeof num.value[26] != 'undefined' && typeof num.value[27] != 'undefined' && typeof num.value[28] != 'undefined' && typeof num.value[29] != 'undefined' && typeof num.value[30] != 'undefined'
	) {
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
		arr12.value.unshift(num.value[11]);
		arr13.value.unshift(num.value[12]);
		arr14.value.unshift(num.value[13]);
		arr15.value.unshift(num.value[14]);
		arr16.value.unshift(num.value[15]);
		arr17.value.unshift(num.value[16]);
		arr18.value.unshift(num.value[17]);
		arr19.value.unshift(num.value[18]);
		arr20.value.unshift(num.value[19]);
		arr21.value.unshift(num.value[20]);
		arr22.value.unshift(num.value[21]);
		arr23.value.unshift(num.value[22]);
		arr24.value.unshift(num.value[23]);
		arr25.value.unshift(num.value[24]);
		arr26.value.unshift(num.value[25]);
		arr27.value.unshift(num.value[26]);
		arr28.value.unshift(num.value[27]);
		arr29.value.unshift(num.value[28]);
		arr30.value.unshift(num.value[29]);
		arr31.value.unshift(num.value[30]);

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
		if (arr12.value.length > 20) {
			arr12.value.pop()
		}
		if (arr13.value.length > 20) {
			arr13.value.pop()
		}
		if (arr14.value.length > 20) {
			arr14.value.pop()
		}
		if (arr15.value.length > 20) {
			arr15.value.pop()
		}
		if (arr16.value.length > 20) {
			arr16.value.pop()
		}
		if (arr17.value.length > 20) {
			arr17.value.pop()
		}
		if (arr18.value.length > 20) {
			arr18.value.pop()
		}
		if (arr19.value.length > 20) {
			arr19.value.pop()
		}
		if (arr20.value.length > 20) {
			arr20.value.pop()
		}
		if (arr21.value.length > 20) {
			arr21.value.pop()
		}
		if (arr22.value.length > 20) {
			arr22.value.pop()
		}
		if (arr23.value.length > 20) {
			arr23.value.pop()
		}
		if (arr24.value.length > 20) {
			arr24.value.pop()
		}
		if (arr25.value.length > 20) {
			arr25.value.pop()
		}
		if (arr26.value.length > 20) {
			arr26.value.pop()
		}
		if (arr27.value.length > 20) {
			arr27.value.pop()
		}
		if (arr28.value.length > 20) {
			arr28.value.pop()
		}
		if (arr29.value.length > 20) {
			arr29.value.pop()
		}
		if (arr30.value.length > 20) {
			arr30.value.pop()
		}
		if (arr31.value.length > 20) {
			arr31.value.pop()
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
		setTimeout(() => {
			findHandle(11)
		}, 1100)
		setTimeout(() => {
			findHandle(12)
		}, 1200)
		setTimeout(() => {
			findHandle(13)
		}, 1300)
		setTimeout(() => {
			findHandle(14)
		}, 1400)
		setTimeout(() => {
			findHandle(15)
		}, 1500)
		setTimeout(() => {
			findHandle(16)
		}, 1600)
		setTimeout(() => {
			findHandle(17)
		}, 1700)
		setTimeout(() => {
			findHandle(18)
		}, 1800)
		setTimeout(() => {
			findHandle(19)
		}, 1900)
		setTimeout(() => {
			findHandle(20)
		}, 2000)
		setTimeout(() => {
			findHandle(21)
		}, 2100)
		setTimeout(() => {
			findHandle(22)
		}, 2200)
		setTimeout(() => {
			findHandle(23)
		}, 2300)
		setTimeout(() => {
			findHandle(24)
		}, 2400)
		setTimeout(() => {
			findHandle(25)
		}, 2500)
		setTimeout(() => {
			findHandle(26)
		}, 2600)
		setTimeout(() => {
			findHandle(27)
		}, 2700)
		setTimeout(() => {
			findHandle(28)
		}, 2800)
		setTimeout(() => {
			findHandle(29)
		}, 2900)
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
	arr12.value.shift()
	arr13.value.shift()
	arr14.value.shift()
	arr15.value.shift()
	arr16.value.shift()
	arr17.value.shift()
	arr18.value.shift()
	arr19.value.shift()
	arr20.value.shift()
	arr21.value.shift()
	arr22.value.shift()
	arr23.value.shift()
	arr24.value.shift()
	arr25.value.shift()
	arr26.value.shift()
	arr27.value.shift()
	arr28.value.shift()
	arr29.value.shift()
	arr30.value.shift()
	arr31.value.shift()
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
	setTimeout(() => {
		findHandle(11)
	}, 1100)
	setTimeout(() => {
		findHandle(12)
	}, 1200)
	setTimeout(() => {
		findHandle(13)
	}, 1300)
	setTimeout(() => {
		findHandle(14)
	}, 1400)
	setTimeout(() => {
		findHandle(15)
	}, 1500)
	setTimeout(() => {
		findHandle(16)
	}, 1600)
	setTimeout(() => {
		findHandle(17)
	}, 1700)
	setTimeout(() => {
		findHandle(18)
	}, 1800)
	setTimeout(() => {
		findHandle(19)
	}, 1900)
	setTimeout(() => {
		findHandle(20)
	}, 2000)
	setTimeout(() => {
		findHandle(21)
	}, 2100)
	setTimeout(() => {
		findHandle(22)
	}, 2200)
	setTimeout(() => {
		findHandle(23)
	}, 2300)
	setTimeout(() => {
		findHandle(24)
	}, 2400)
	setTimeout(() => {
		findHandle(25)
	}, 2500)
	setTimeout(() => {
		findHandle(26)
	}, 2600)
	setTimeout(() => {
		findHandle(27)
	}, 2700)
	setTimeout(() => {
		findHandle(28)
	}, 2800)
	setTimeout(() => {
		findHandle(29)
	}, 2900)
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
	uni.setStorageSync('arr12', JSON.stringify(arr12.value))
	uni.setStorageSync('arr13', JSON.stringify(arr13.value))
	uni.setStorageSync('arr14', JSON.stringify(arr14.value))
	uni.setStorageSync('arr15', JSON.stringify(arr15.value))
	uni.setStorageSync('arr16', JSON.stringify(arr16.value))
	uni.setStorageSync('arr17', JSON.stringify(arr17.value))
	uni.setStorageSync('arr18', JSON.stringify(arr18.value))
	uni.setStorageSync('arr19', JSON.stringify(arr19.value))
	uni.setStorageSync('arr20', JSON.stringify(arr20.value))
	uni.setStorageSync('arr21', JSON.stringify(arr21.value))
	uni.setStorageSync('arr22', JSON.stringify(arr22.value))
	uni.setStorageSync('arr23', JSON.stringify(arr23.value))
	uni.setStorageSync('arr24', JSON.stringify(arr24.value))
	uni.setStorageSync('arr25', JSON.stringify(arr25.value))
	uni.setStorageSync('arr26', JSON.stringify(arr26.value))
	uni.setStorageSync('arr27', JSON.stringify(arr27.value))
	uni.setStorageSync('arr28', JSON.stringify(arr28.value))
	uni.setStorageSync('arr29', JSON.stringify(arr29.value))
	uni.setStorageSync('arr30', JSON.stringify(arr30.value))
	uni.setStorageSync('arr31', JSON.stringify(arr31.value))
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
		arr12.value = JSON.parse(uni.getStorageSync('arr12'))
		arr13.value = JSON.parse(uni.getStorageSync('arr13'))
		arr14.value = JSON.parse(uni.getStorageSync('arr14'))
		arr15.value = JSON.parse(uni.getStorageSync('arr15'))
		arr16.value = JSON.parse(uni.getStorageSync('arr16'))
		arr17.value = JSON.parse(uni.getStorageSync('arr17'))
		arr18.value = JSON.parse(uni.getStorageSync('arr18'))
		arr19.value = JSON.parse(uni.getStorageSync('arr19'))
		arr20.value = JSON.parse(uni.getStorageSync('arr20'))
		arr21.value = JSON.parse(uni.getStorageSync('arr21'))
		arr22.value = JSON.parse(uni.getStorageSync('arr22'))
		arr23.value = JSON.parse(uni.getStorageSync('arr23'))
		arr24.value = JSON.parse(uni.getStorageSync('arr24'))
		arr25.value = JSON.parse(uni.getStorageSync('arr25'))
		arr26.value = JSON.parse(uni.getStorageSync('arr26'))
		arr27.value = JSON.parse(uni.getStorageSync('arr27'))
		arr28.value = JSON.parse(uni.getStorageSync('arr28'))
		arr29.value = JSON.parse(uni.getStorageSync('arr29'))
		arr30.value = JSON.parse(uni.getStorageSync('arr30'))
		arr31.value = JSON.parse(uni.getStorageSync('arr31'))
	}
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
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
	} else if (index == 10) {
		arr = JSON.parse(JSON.stringify(arr11.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum11.value = 0
		wrongNum11.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum11.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum11.value ++
					} else {
						rightNum11.value = 1
					}
				} else {
					rightNum11.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum11.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum11.value = 1
					} else {
						wrongNum11.value ++
					}
				} else {
					wrongNum11.value ++
				}
			}
		})
	} else if (index == 11) {
		arr = JSON.parse(JSON.stringify(arr12.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum12.value = 0
		wrongNum12.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum12.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum12.value ++
					} else {
						rightNum12.value = 1
					}
				} else {
					rightNum12.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum12.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum12.value = 1
					} else {
						wrongNum12.value ++
					}
				} else {
					wrongNum12.value ++
				}
			}
		})
	} else if (index == 12) {
		arr = JSON.parse(JSON.stringify(arr13.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum13.value = 0
		wrongNum13.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum13.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum13.value ++
					} else {
						rightNum13.value = 1
					}
				} else {
					rightNum13.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum13.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum13.value = 1
					} else {
						wrongNum13.value ++
					}
				} else {
					wrongNum13.value ++
				}
			}
		})
	} else if (index == 13) {
		arr = JSON.parse(JSON.stringify(arr14.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum14.value = 0
		wrongNum14.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum14.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum14.value ++
					} else {
						rightNum14.value = 1
					}
				} else {
					rightNum14.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum14.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum14.value = 1
					} else {
						wrongNum14.value ++
					}
				} else {
					wrongNum14.value ++
				}
			}
		})
	} else if (index == 14) {
		arr = JSON.parse(JSON.stringify(arr15.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum15.value = 0
		wrongNum15.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum15.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum15.value ++
					} else {
						rightNum15.value = 1
					}
				} else {
					rightNum15.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum15.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum15.value = 1
					} else {
						wrongNum15.value ++
					}
				} else {
					wrongNum15.value ++
				}
			}
		})
	} else if (index == 15) {
		arr = JSON.parse(JSON.stringify(arr16.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum16.value = 0
		wrongNum16.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum16.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum16.value ++
					} else {
						rightNum16.value = 1
					}
				} else {
					rightNum16.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum16.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum16.value = 1
					} else {
						wrongNum16.value ++
					}
				} else {
					wrongNum16.value ++
				}
			}
		})
	} else if (index == 16) {
		arr = JSON.parse(JSON.stringify(arr17.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum17.value = 0
		wrongNum17.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum17.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum17.value ++
					} else {
						rightNum17.value = 1
					}
				} else {
					rightNum17.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum17.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum17.value = 1
					} else {
						wrongNum17.value ++
					}
				} else {
					wrongNum17.value ++
				}
			}
		})
	} else if (index == 17) {
		arr = JSON.parse(JSON.stringify(arr18.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum18.value = 0
		wrongNum18.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum18.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum18.value ++
					} else {
						rightNum18.value = 1
					}
				} else {
					rightNum18.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum18.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum18.value = 1
					} else {
						wrongNum18.value ++
					}
				} else {
					wrongNum18.value ++
				}
			}
		})
	} else if (index == 18) {
		arr = JSON.parse(JSON.stringify(arr19.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum19.value = 0
		wrongNum19.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum19.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum19.value ++
					} else {
						rightNum19.value = 1
					}
				} else {
					rightNum19.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum19.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum19.value = 1
					} else {
						wrongNum19.value ++
					}
				} else {
					wrongNum19.value ++
				}
			}
		})
	} else if (index == 19) {
		arr = JSON.parse(JSON.stringify(arr20.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum20.value = 0
		wrongNum20.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum20.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum20.value ++
					} else {
						rightNum20.value = 1
					}
				} else {
					rightNum20.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum20.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum20.value = 1
					} else {
						wrongNum20.value ++
					}
				} else {
					wrongNum20.value ++
				}
			}
		})
	} else if (index == 20) {
		arr = JSON.parse(JSON.stringify(arr21.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum21.value = 0
		wrongNum21.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum21.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum21.value ++
					} else {
						rightNum21.value = 1
					}
				} else {
					rightNum21.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum21.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum21.value = 1
					} else {
						wrongNum21.value ++
					}
				} else {
					wrongNum21.value ++
				}
			}
		})
	} else if (index == 21) {
		arr = JSON.parse(JSON.stringify(arr22.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum22.value = 0
		wrongNum22.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum22.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum22.value ++
					} else {
						rightNum22.value = 1
					}
				} else {
					rightNum22.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum22.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum22.value = 1
					} else {
						wrongNum22.value ++
					}
				} else {
					wrongNum22.value ++
				}
			}
		})
	} else if (index == 22) {
		arr = JSON.parse(JSON.stringify(arr23.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum23.value = 0
		wrongNum23.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum23.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum23.value ++
					} else {
						rightNum23.value = 1
					}
				} else {
					rightNum23.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum23.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum23.value = 1
					} else {
						wrongNum23.value ++
					}
				} else {
					wrongNum23.value ++
				}
			}
		})
	} else if (index == 23) {
		arr = JSON.parse(JSON.stringify(arr24.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum24.value = 0
		wrongNum24.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum24.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum24.value ++
					} else {
						rightNum24.value = 1
					}
				} else {
					rightNum24.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum24.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum24.value = 1
					} else {
						wrongNum24.value ++
					}
				} else {
					wrongNum24.value ++
				}
			}
		})
	} else if (index == 24) {
		arr = JSON.parse(JSON.stringify(arr25.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum25.value = 0
		wrongNum25.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum25.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum25.value ++
					} else {
						rightNum25.value = 1
					}
				} else {
					rightNum25.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum25.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum25.value = 1
					} else {
						wrongNum25.value ++
					}
				} else {
					wrongNum25.value ++
				}
			}
		})
	} else if (index == 25) {
		arr = JSON.parse(JSON.stringify(arr26.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum26.value = 0
		wrongNum26.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum26.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum26.value ++
					} else {
						rightNum26.value = 1
					}
				} else {
					rightNum26.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum26.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum26.value = 1
					} else {
						wrongNum26.value ++
					}
				} else {
					wrongNum26.value ++
				}
			}
		})
	} else if (index == 26) {
		arr = JSON.parse(JSON.stringify(arr27.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum27.value = 0
		wrongNum27.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum27.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum27.value ++
					} else {
						rightNum27.value = 1
					}
				} else {
					rightNum27.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum27.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum27.value = 1
					} else {
						wrongNum27.value ++
					}
				} else {
					wrongNum27.value ++
				}
			}
		})
	} else if (index == 27) {
		arr = JSON.parse(JSON.stringify(arr28.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum28.value = 0
		wrongNum28.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum28.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum28.value ++
					} else {
						rightNum28.value = 1
					}
				} else {
					rightNum28.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum28.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum28.value = 1
					} else {
						wrongNum28.value ++
					}
				} else {
					wrongNum28.value ++
				}
			}
		})
	} else if (index == 28) {
		arr = JSON.parse(JSON.stringify(arr29.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum29.value = 0
		wrongNum29.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum29.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum29.value ++
					} else {
						rightNum29.value = 1
					}
				} else {
					rightNum29.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum29.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum29.value = 1
					} else {
						wrongNum29.value ++
					}
				} else {
					wrongNum29.value ++
				}
			}
		})
	} else if (index == 29) {
		arr = JSON.parse(JSON.stringify(arr30.value)).reverse().map(item => {
			return {
				num: item,
				isRightPrev: true
			}
		})
		let arrData = JSON.parse(JSON.stringify(arr31.value)).reverse()
		rightNum30.value = 0
		wrongNum30.value = 0
		arr.forEach((item, ind) => {
			if (item['num'] == arrData[ind]) {
				item['isRightPrev'] = true
				wrongNum30.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						rightNum30.value ++
					} else {
						rightNum30.value = 1
					}
				} else {
					rightNum30.value = 1
				}
			} else {
				item['isRightPrev'] = false
				rightNum30.value = 0
				if (ind > 0) {
					if (arr[ind - 1]['isRightPrev']) {
						wrongNum30.value = 1
					} else {
						wrongNum30.value ++
					}
				} else {
					wrongNum30.value ++
				}
			}
		})
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
				font-size: 32rpx;
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
			width: 25%;
			box-sizing: border-box;
			position: relative;
			.data {
				display: flex;
				justify-content: center;
				box-sizing: border-box;
				width: 100%;
				padding-left: 10rpx;
				.item {
					width: 30px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					min-width: 4px;
					font-size: 24rpx;
					border: 1px solid #999;
					border-bottom: none;
					margin-right: 4px;
					&.end {
						border-bottom: 1px solid #999;;
					}
					&.data-end {
						background-color: #ccc;
					}
				}
			}
			.line {
				width: 1rpx;
				height: 850rpx;
				background-color: #ccc;
				position: absolute;
				right: 20rpx;
				top: 0rpx;
				border-radius: 1rpx;
			}
		}
		.right {
			padding: 10rpx;
			width: 75%;
			position: relative;
			top: -26rpx;
			left: -5px;
			box-sizing: border-box;
			.order {
				display: flex;
				justify-content: space-around;
				margin-bottom: 10px;
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
					color: #0e78c7;
					background-color: #e6e3e3;
					border: 1px solid #ccc;
					border-radius: 2px;
					margin-right: 2px;
					margin-bottom: 2px;
				}
				&.red {
					.item {
						color: #f3514a;
					}
				}
			}
			.data {
				display: flex;
				box-sizing: border-box;
				width: 100%;
				padding-left: 10rpx;
				margin-bottom: 10px;
				.item {
					width: 22px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					min-width: 4px;
					font-size: 24rpx;
					border: 1px solid #999;
					background-color: #ccc;
					margin-right: 4px;
					border-radius: 2px;
				}
				.line {
					background-color: #fff;
					border: none;
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
