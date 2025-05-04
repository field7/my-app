<template>
	<view class="content">
		<view class="operate">
			<view class="input">
				<input type="number" v-model="numType" />
			</view>
			<view class="num">{{ num }}</view>
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
						<view :class="index == arrComparison.length - 1 ? 'item end data-end' : 'item data-end'"
							v-for="(item, index) in arrComparison" :key="index">{{ item == 1 ? '大' : '小' }}</view>
					</view>
				</view>
			</view>
			<view class="right">
				<view class="order">
					<view class="item">1</view>
					<view class="item">2</view>
					<view class="item">3</view>
					<view class="item">4</view>
					<view class="item">5</view>
					<view class="item">6</view>
					<view class="item">7</view>
					<view class="item">8</view>
					<view class="item">9</view>
					<view class="item">0</view>
				</view>
				<view class="times">
					<view :class="rightNum1 > 5 ? 'item active' : 'item'">{{ rightNum1 }}</view>
					<view :class="rightNum2 > 5 ? 'item active' : 'item'">{{ rightNum2 }}</view>
					<view :class="rightNum3 > 5 ? 'item active' : 'item'">{{ rightNum3 }}</view>
					<view :class="rightNum4 > 5 ? 'item active' : 'item'">{{ rightNum4 }}</view>
					<view :class="rightNum5 > 5 ? 'item active' : 'item'">{{ rightNum5 }}</view>
					<view :class="rightNum6 > 5 ? 'item active' : 'item'">{{ rightNum6 }}</view>
					<view :class="rightNum7 > 5 ? 'item active' : 'item'">{{ rightNum7 }}</view>
					<view :class="rightNum8 > 5 ? 'item active' : 'item'">{{ rightNum8 }}</view>
					<view :class="rightNum9 > 5 ? 'item active' : 'item'">{{ rightNum9 }}</view>
					<view :class="rightNum10 > 5 ? 'item active' : 'item'">{{ rightNum10 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum1 > 5 ? 'item active' : 'item'">{{ wrongNum1 }}</view>
					<view :class="wrongNum2 > 5 ? 'item active' : 'item'">{{ wrongNum2 }}</view>
					<view :class="wrongNum3 > 5 ? 'item active' : 'item'">{{ wrongNum3 }}</view>
					<view :class="wrongNum4 > 5 ? 'item active' : 'item'">{{ wrongNum4 }}</view>
					<view :class="wrongNum5 > 5 ? 'item active' : 'item'">{{ wrongNum5 }}</view>
					<view :class="wrongNum6 > 5 ? 'item active' : 'item'">{{ wrongNum6 }}</view>
					<view :class="wrongNum7 > 5 ? 'item active' : 'item'">{{ wrongNum7 }}</view>
					<view :class="wrongNum8 > 5 ? 'item active' : 'item'">{{ wrongNum8 }}</view>
					<view :class="wrongNum9 > 5 ? 'item active' : 'item'">{{ wrongNum9 }}</view>
					<view :class="wrongNum10 > 5 ? 'item active' : 'item'">{{ wrongNum10 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum1 > 5 || wrongNum1 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum2 > 5 || wrongNum2 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum3 > 5 || wrongNum3 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum4 > 5 || wrongNum4 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum5 > 5 || wrongNum5 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum6 > 5 || wrongNum6 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum7 > 5 || wrongNum7 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum8 > 5 || wrongNum8 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum9 > 5 || wrongNum9 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum10 > 5 || wrongNum10 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum11 > 5 ? 'item active' : 'item'">{{ rightNum11 }}</view>
					<view :class="rightNum12 > 5 ? 'item active' : 'item'">{{ rightNum12 }}</view>
					<view :class="rightNum13 > 5 ? 'item active' : 'item'">{{ rightNum13 }}</view>
					<view :class="rightNum14 > 5 ? 'item active' : 'item'">{{ rightNum14 }}</view>
					<view :class="rightNum15 > 5 ? 'item active' : 'item'">{{ rightNum15 }}</view>
					<view :class="rightNum16 > 5 ? 'item active' : 'item'">{{ rightNum16 }}</view>
					<view :class="rightNum17 > 5 ? 'item active' : 'item'">{{ rightNum17 }}</view>
					<view :class="rightNum18 > 5 ? 'item active' : 'item'">{{ rightNum18 }}</view>
					<view :class="rightNum19 > 5 ? 'item active' : 'item'">{{ rightNum19 }}</view>
					<view :class="rightNum20 > 5 ? 'item active' : 'item'">{{ rightNum20 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum11 > 5 ? 'item active' : 'item'">{{ wrongNum11 }}</view>
					<view :class="wrongNum12 > 5 ? 'item active' : 'item'">{{ wrongNum12 }}</view>
					<view :class="wrongNum13 > 5 ? 'item active' : 'item'">{{ wrongNum13 }}</view>
					<view :class="wrongNum14 > 5 ? 'item active' : 'item'">{{ wrongNum14 }}</view>
					<view :class="wrongNum15 > 5 ? 'item active' : 'item'">{{ wrongNum15 }}</view>
					<view :class="wrongNum16 > 5 ? 'item active' : 'item'">{{ wrongNum16 }}</view>
					<view :class="wrongNum17 > 5 ? 'item active' : 'item'">{{ wrongNum17 }}</view>
					<view :class="wrongNum18 > 5 ? 'item active' : 'item'">{{ wrongNum18 }}</view>
					<view :class="wrongNum19 > 5 ? 'item active' : 'item'">{{ wrongNum19 }}</view>
					<view :class="wrongNum20 > 5 ? 'item active' : 'item'">{{ wrongNum20 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum11 > 5 || wrongNum11 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum12 > 5 || wrongNum12 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum13 > 5 || wrongNum13 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum14 > 5 || wrongNum14 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum15 > 5 || wrongNum15 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum16 > 5 || wrongNum16 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum17 > 5 || wrongNum17 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum18 > 5 || wrongNum18 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum19 > 5 || wrongNum19 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum20 > 5 || wrongNum20 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum21 > 5 ? 'item active' : 'item'">{{ rightNum21 }}</view>
					<view :class="rightNum22 > 5 ? 'item active' : 'item'">{{ rightNum22 }}</view>
					<view :class="rightNum23 > 5 ? 'item active' : 'item'">{{ rightNum23 }}</view>
					<view :class="rightNum24 > 5 ? 'item active' : 'item'">{{ rightNum24 }}</view>
					<view :class="rightNum25 > 5 ? 'item active' : 'item'">{{ rightNum25 }}</view>
					<view :class="rightNum26 > 5 ? 'item active' : 'item'">{{ rightNum26 }}</view>
					<view :class="rightNum27 > 5 ? 'item active' : 'item'">{{ rightNum27 }}</view>
					<view :class="rightNum28 > 5 ? 'item active' : 'item'">{{ rightNum28 }}</view>
					<view :class="rightNum29 > 5 ? 'item active' : 'item'">{{ rightNum29 }}</view>
					<view :class="rightNum30 > 5 ? 'item active' : 'item'">{{ rightNum30 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum21 > 5 ? 'item active' : 'item'">{{ wrongNum21 }}</view>
					<view :class="wrongNum22 > 5 ? 'item active' : 'item'">{{ wrongNum22 }}</view>
					<view :class="wrongNum23 > 5 ? 'item active' : 'item'">{{ wrongNum23 }}</view>
					<view :class="wrongNum24 > 5 ? 'item active' : 'item'">{{ wrongNum24 }}</view>
					<view :class="wrongNum25 > 5 ? 'item active' : 'item'">{{ wrongNum25 }}</view>
					<view :class="wrongNum26 > 5 ? 'item active' : 'item'">{{ wrongNum26 }}</view>
					<view :class="wrongNum27 > 5 ? 'item active' : 'item'">{{ wrongNum27 }}</view>
					<view :class="wrongNum28 > 5 ? 'item active' : 'item'">{{ wrongNum28 }}</view>
					<view :class="wrongNum29 > 5 ? 'item active' : 'item'">{{ wrongNum29 }}</view>
					<view :class="wrongNum30 > 5 ? 'item active' : 'item'">{{ wrongNum30 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum21 > 5 || wrongNum21 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum22 > 5 || wrongNum22 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum23 > 5 || wrongNum23 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum24 > 5 || wrongNum24 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum25 > 5 || wrongNum25 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum26 > 5 || wrongNum26 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum27 > 5 || wrongNum27 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum28 > 5 || wrongNum28 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum29 > 5 || wrongNum29 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum30 > 5 || wrongNum30 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum31 > 5 ? 'item active' : 'item'">{{ rightNum31 }}</view>
					<view :class="rightNum32 > 5 ? 'item active' : 'item'">{{ rightNum32 }}</view>
					<view :class="rightNum33 > 5 ? 'item active' : 'item'">{{ rightNum33 }}</view>
					<view :class="rightNum34 > 5 ? 'item active' : 'item'">{{ rightNum34 }}</view>
					<view :class="rightNum35 > 5 ? 'item active' : 'item'">{{ rightNum35 }}</view>
					<view :class="rightNum36 > 5 ? 'item active' : 'item'">{{ rightNum36 }}</view>
					<view :class="rightNum37 > 5 ? 'item active' : 'item'">{{ rightNum37 }}</view>
					<view :class="rightNum38 > 5 ? 'item active' : 'item'">{{ rightNum38 }}</view>
					<view :class="rightNum39 > 5 ? 'item active' : 'item'">{{ rightNum39 }}</view>
					<view :class="rightNum40 > 5 ? 'item active' : 'item'">{{ rightNum40 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum31 > 5 ? 'item active' : 'item'">{{ wrongNum31 }}</view>
					<view :class="wrongNum32 > 5 ? 'item active' : 'item'">{{ wrongNum32 }}</view>
					<view :class="wrongNum33 > 5 ? 'item active' : 'item'">{{ wrongNum33 }}</view>
					<view :class="wrongNum34 > 5 ? 'item active' : 'item'">{{ wrongNum34 }}</view>
					<view :class="wrongNum35 > 5 ? 'item active' : 'item'">{{ wrongNum35 }}</view>
					<view :class="wrongNum36 > 5 ? 'item active' : 'item'">{{ wrongNum36 }}</view>
					<view :class="wrongNum37 > 5 ? 'item active' : 'item'">{{ wrongNum37 }}</view>
					<view :class="wrongNum38 > 5 ? 'item active' : 'item'">{{ wrongNum38 }}</view>
					<view :class="wrongNum39 > 5 ? 'item active' : 'item'">{{ wrongNum39 }}</view>
					<view :class="wrongNum40 > 5 ? 'item active' : 'item'">{{ wrongNum40 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum31 > 5 || wrongNum31 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum32 > 5 || wrongNum32 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum33 > 5 || wrongNum33 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum34 > 5 || wrongNum34 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum35 > 5 || wrongNum35 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum36 > 5 || wrongNum36 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum37 > 5 || wrongNum37 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum38 > 5 || wrongNum38 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum39 > 5 || wrongNum39 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum40 > 5 || wrongNum40 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum41 > 5 ? 'item active' : 'item'">{{ rightNum41 }}</view>
					<view :class="rightNum42 > 5 ? 'item active' : 'item'">{{ rightNum42 }}</view>
					<view :class="rightNum43 > 5 ? 'item active' : 'item'">{{ rightNum43 }}</view>
					<view :class="rightNum44 > 5 ? 'item active' : 'item'">{{ rightNum44 }}</view>
					<view :class="rightNum45 > 5 ? 'item active' : 'item'">{{ rightNum45 }}</view>
					<view :class="rightNum46 > 5 ? 'item active' : 'item'">{{ rightNum46 }}</view>
					<view :class="rightNum47 > 5 ? 'item active' : 'item'">{{ rightNum47 }}</view>
					<view :class="rightNum48 > 5 ? 'item active' : 'item'">{{ rightNum48 }}</view>
					<view :class="rightNum49 > 5 ? 'item active' : 'item'">{{ rightNum49 }}</view>
					<view :class="rightNum50 > 5 ? 'item active' : 'item'">{{ rightNum50 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum41 > 5 ? 'item active' : 'item'">{{ wrongNum41 }}</view>
					<view :class="wrongNum42 > 5 ? 'item active' : 'item'">{{ wrongNum42 }}</view>
					<view :class="wrongNum43 > 5 ? 'item active' : 'item'">{{ wrongNum43 }}</view>
					<view :class="wrongNum44 > 5 ? 'item active' : 'item'">{{ wrongNum44 }}</view>
					<view :class="wrongNum45 > 5 ? 'item active' : 'item'">{{ wrongNum45 }}</view>
					<view :class="wrongNum46 > 5 ? 'item active' : 'item'">{{ wrongNum46 }}</view>
					<view :class="wrongNum47 > 5 ? 'item active' : 'item'">{{ wrongNum47 }}</view>
					<view :class="wrongNum48 > 5 ? 'item active' : 'item'">{{ wrongNum48 }}</view>
					<view :class="wrongNum49 > 5 ? 'item active' : 'item'">{{ wrongNum49 }}</view>
					<view :class="wrongNum50 > 5 ? 'item active' : 'item'">{{ wrongNum50 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum41 > 5 || wrongNum41 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum42 > 5 || wrongNum42 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum43 > 5 || wrongNum43 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum44 > 5 || wrongNum44 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum45 > 5 || wrongNum45 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum46 > 5 || wrongNum46 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum47 > 5 || wrongNum47 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum48 > 5 || wrongNum48 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum49 > 5 || wrongNum49 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum50 > 5 || wrongNum50 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum51 > 5 ? 'item active' : 'item'">{{ rightNum51 }}</view>
					<view :class="rightNum52 > 5 ? 'item active' : 'item'">{{ rightNum52 }}</view>
					<view :class="rightNum53 > 5 ? 'item active' : 'item'">{{ rightNum53 }}</view>
					<view :class="rightNum54 > 5 ? 'item active' : 'item'">{{ rightNum54 }}</view>
					<view :class="rightNum55 > 5 ? 'item active' : 'item'">{{ rightNum55 }}</view>
					<view :class="rightNum56 > 5 ? 'item active' : 'item'">{{ rightNum56 }}</view>
					<view :class="rightNum57 > 5 ? 'item active' : 'item'">{{ rightNum57 }}</view>
					<view :class="rightNum58 > 5 ? 'item active' : 'item'">{{ rightNum58 }}</view>
					<view :class="rightNum59 > 5 ? 'item active' : 'item'">{{ rightNum59 }}</view>
					<view :class="rightNum60 > 5 ? 'item active' : 'item'">{{ rightNum60 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum51 > 5 ? 'item active' : 'item'">{{ wrongNum51 }}</view>
					<view :class="wrongNum52 > 5 ? 'item active' : 'item'">{{ wrongNum52 }}</view>
					<view :class="wrongNum53 > 5 ? 'item active' : 'item'">{{ wrongNum53 }}</view>
					<view :class="wrongNum54 > 5 ? 'item active' : 'item'">{{ wrongNum54 }}</view>
					<view :class="wrongNum55 > 5 ? 'item active' : 'item'">{{ wrongNum55 }}</view>
					<view :class="wrongNum56 > 5 ? 'item active' : 'item'">{{ wrongNum56 }}</view>
					<view :class="wrongNum57 > 5 ? 'item active' : 'item'">{{ wrongNum57 }}</view>
					<view :class="wrongNum58 > 5 ? 'item active' : 'item'">{{ wrongNum58 }}</view>
					<view :class="wrongNum59 > 5 ? 'item active' : 'item'">{{ wrongNum59 }}</view>
					<view :class="wrongNum60 > 5 ? 'item active' : 'item'">{{ wrongNum60 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum51 > 5 || wrongNum51 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum52 > 5 || wrongNum52 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum53 > 5 || wrongNum53 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum54 > 5 || wrongNum54 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum55 > 5 || wrongNum55 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum56 > 5 || wrongNum56 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum57 > 5 || wrongNum57 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum58 > 5 || wrongNum58 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum59 > 5 || wrongNum59 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum60 > 5 || wrongNum60 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum61 > 5 ? 'item active' : 'item'">{{ rightNum61 }}</view>
					<view :class="rightNum62 > 5 ? 'item active' : 'item'">{{ rightNum62 }}</view>
					<view :class="rightNum63 > 5 ? 'item active' : 'item'">{{ rightNum63 }}</view>
					<view :class="rightNum64 > 5 ? 'item active' : 'item'">{{ rightNum64 }}</view>
					<view :class="rightNum65 > 5 ? 'item active' : 'item'">{{ rightNum65 }}</view>
					<view :class="rightNum66 > 5 ? 'item active' : 'item'">{{ rightNum66 }}</view>
					<view :class="rightNum67 > 5 ? 'item active' : 'item'">{{ rightNum67 }}</view>
					<view :class="rightNum68 > 5 ? 'item active' : 'item'">{{ rightNum68 }}</view>
					<view :class="rightNum69 > 5 ? 'item active' : 'item'">{{ rightNum69 }}</view>
					<view :class="rightNum70 > 5 ? 'item active' : 'item'">{{ rightNum70 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum61 > 5 ? 'item active' : 'item'">{{ wrongNum61 }}</view>
					<view :class="wrongNum62 > 5 ? 'item active' : 'item'">{{ wrongNum62 }}</view>
					<view :class="wrongNum63 > 5 ? 'item active' : 'item'">{{ wrongNum63 }}</view>
					<view :class="wrongNum64 > 5 ? 'item active' : 'item'">{{ wrongNum64 }}</view>
					<view :class="wrongNum65 > 5 ? 'item active' : 'item'">{{ wrongNum65 }}</view>
					<view :class="wrongNum66 > 5 ? 'item active' : 'item'">{{ wrongNum66 }}</view>
					<view :class="wrongNum67 > 5 ? 'item active' : 'item'">{{ wrongNum67 }}</view>
					<view :class="wrongNum68 > 5 ? 'item active' : 'item'">{{ wrongNum68 }}</view>
					<view :class="wrongNum69 > 5 ? 'item active' : 'item'">{{ wrongNum69 }}</view>
					<view :class="wrongNum70 > 5 ? 'item active' : 'item'">{{ wrongNum70 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum61 > 5 || wrongNum61 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum62 > 5 || wrongNum62 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum63 > 5 || wrongNum63 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum64 > 5 || wrongNum64 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum65 > 5 || wrongNum65 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum66 > 5 || wrongNum66 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum67 > 5 || wrongNum67 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum68 > 5 || wrongNum68 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum69 > 5 || wrongNum69 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum70 > 5 || wrongNum70 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum71 > 5 ? 'item active' : 'item'">{{ rightNum71 }}</view>
					<view :class="rightNum72 > 5 ? 'item active' : 'item'">{{ rightNum72 }}</view>
					<view :class="rightNum73 > 5 ? 'item active' : 'item'">{{ rightNum73 }}</view>
					<view :class="rightNum74 > 5 ? 'item active' : 'item'">{{ rightNum74 }}</view>
					<view :class="rightNum75 > 5 ? 'item active' : 'item'">{{ rightNum75 }}</view>
					<view :class="rightNum76 > 5 ? 'item active' : 'item'">{{ rightNum76 }}</view>
					<view :class="rightNum77 > 5 ? 'item active' : 'item'">{{ rightNum77 }}</view>
					<view :class="rightNum78 > 5 ? 'item active' : 'item'">{{ rightNum78 }}</view>
					<view :class="rightNum79 > 5 ? 'item active' : 'item'">{{ rightNum79 }}</view>
					<view :class="rightNum80 > 5 ? 'item active' : 'item'">{{ rightNum80 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum71 > 5 ? 'item active' : 'item'">{{ wrongNum71 }}</view>
					<view :class="wrongNum72 > 5 ? 'item active' : 'item'">{{ wrongNum72 }}</view>
					<view :class="wrongNum73 > 5 ? 'item active' : 'item'">{{ wrongNum73 }}</view>
					<view :class="wrongNum74 > 5 ? 'item active' : 'item'">{{ wrongNum74 }}</view>
					<view :class="wrongNum75 > 5 ? 'item active' : 'item'">{{ wrongNum75 }}</view>
					<view :class="wrongNum76 > 5 ? 'item active' : 'item'">{{ wrongNum76 }}</view>
					<view :class="wrongNum77 > 5 ? 'item active' : 'item'">{{ wrongNum77 }}</view>
					<view :class="wrongNum78 > 5 ? 'item active' : 'item'">{{ wrongNum78 }}</view>
					<view :class="wrongNum79 > 5 ? 'item active' : 'item'">{{ wrongNum79 }}</view>
					<view :class="wrongNum80 > 5 ? 'item active' : 'item'">{{ wrongNum80 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum71 > 5 || wrongNum71 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum72 > 5 || wrongNum72 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum73 > 5 || wrongNum73 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum74 > 5 || wrongNum74 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum75 > 5 || wrongNum75 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum76 > 5 || wrongNum76 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum77 > 5 || wrongNum77 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum78 > 5 || wrongNum78 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum79 > 5 || wrongNum79 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum80 > 5 || wrongNum80 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum81 > 5 ? 'item active' : 'item'">{{ rightNum81 }}</view>
					<view :class="rightNum82 > 5 ? 'item active' : 'item'">{{ rightNum82 }}</view>
					<view :class="rightNum83 > 5 ? 'item active' : 'item'">{{ rightNum83 }}</view>
					<view :class="rightNum84 > 5 ? 'item active' : 'item'">{{ rightNum84 }}</view>
					<view :class="rightNum85 > 5 ? 'item active' : 'item'">{{ rightNum85 }}</view>
					<view :class="rightNum86 > 5 ? 'item active' : 'item'">{{ rightNum86 }}</view>
					<view :class="rightNum87 > 5 ? 'item active' : 'item'">{{ rightNum87 }}</view>
					<view :class="rightNum88 > 5 ? 'item active' : 'item'">{{ rightNum88 }}</view>
					<view :class="rightNum89 > 5 ? 'item active' : 'item'">{{ rightNum89 }}</view>
					<view :class="rightNum90 > 5 ? 'item active' : 'item'">{{ rightNum90 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum81 > 5 ? 'item active' : 'item'">{{ wrongNum81 }}</view>
					<view :class="wrongNum82 > 5 ? 'item active' : 'item'">{{ wrongNum82 }}</view>
					<view :class="wrongNum83 > 5 ? 'item active' : 'item'">{{ wrongNum83 }}</view>
					<view :class="wrongNum84 > 5 ? 'item active' : 'item'">{{ wrongNum84 }}</view>
					<view :class="wrongNum85 > 5 ? 'item active' : 'item'">{{ wrongNum85 }}</view>
					<view :class="wrongNum86 > 5 ? 'item active' : 'item'">{{ wrongNum86 }}</view>
					<view :class="wrongNum87 > 5 ? 'item active' : 'item'">{{ wrongNum87 }}</view>
					<view :class="wrongNum88 > 5 ? 'item active' : 'item'">{{ wrongNum88 }}</view>
					<view :class="wrongNum89 > 5 ? 'item active' : 'item'">{{ wrongNum89 }}</view>
					<view :class="wrongNum90 > 5 ? 'item active' : 'item'">{{ wrongNum90 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum81 > 5 || wrongNum81 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum82 > 5 || wrongNum82 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum83 > 5 || wrongNum83 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum84 > 5 || wrongNum84 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum85 > 5 || wrongNum85 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum86 > 5 || wrongNum86 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum87 > 5 || wrongNum87 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum88 > 5 || wrongNum88 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum89 > 5 || wrongNum89 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum90 > 5 || wrongNum90 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum91 > 5 ? 'item active' : 'item'">{{ rightNum91 }}</view>
					<view :class="rightNum92 > 5 ? 'item active' : 'item'">{{ rightNum92 }}</view>
					<view :class="rightNum93 > 5 ? 'item active' : 'item'">{{ rightNum93 }}</view>
					<view :class="rightNum94 > 5 ? 'item active' : 'item'">{{ rightNum94 }}</view>
					<view :class="rightNum95 > 5 ? 'item active' : 'item'">{{ rightNum95 }}</view>
					<view :class="rightNum96 > 5 ? 'item active' : 'item'">{{ rightNum96 }}</view>
					<view :class="rightNum97 > 5 ? 'item active' : 'item'">{{ rightNum97 }}</view>
					<view :class="rightNum98 > 5 ? 'item active' : 'item'">{{ rightNum98 }}</view>
					<view :class="rightNum99 > 5 ? 'item active' : 'item'">{{ rightNum99 }}</view>
					<view :class="rightNum100 > 5 ? 'item active' : 'item'">{{ rightNum100 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum91 > 5 ? 'item active' : 'item'">{{ wrongNum91 }}</view>
					<view :class="wrongNum92 > 5 ? 'item active' : 'item'">{{ wrongNum92 }}</view>
					<view :class="wrongNum93 > 5 ? 'item active' : 'item'">{{ wrongNum93 }}</view>
					<view :class="wrongNum94 > 5 ? 'item active' : 'item'">{{ wrongNum94 }}</view>
					<view :class="wrongNum95 > 5 ? 'item active' : 'item'">{{ wrongNum95 }}</view>
					<view :class="wrongNum96 > 5 ? 'item active' : 'item'">{{ wrongNum96 }}</view>
					<view :class="wrongNum97 > 5 ? 'item active' : 'item'">{{ wrongNum97 }}</view>
					<view :class="wrongNum98 > 5 ? 'item active' : 'item'">{{ wrongNum98 }}</view>
					<view :class="wrongNum99 > 5 ? 'item active' : 'item'">{{ wrongNum99 }}</view>
					<view :class="wrongNum100 > 5 ? 'item active' : 'item'">{{ wrongNum100 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum91 > 5 || wrongNum91 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum92 > 5 || wrongNum92 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum93 > 5 || wrongNum93 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum94 > 5 || wrongNum94 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum95 > 5 || wrongNum95 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum96 > 5 || wrongNum96 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum97 > 5 || wrongNum97 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum98 > 5 || wrongNum98 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum99 > 5 || wrongNum99 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum100 > 5 || wrongNum100 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
			</view>
			<view class="right">
				<view class="order">
					<view class="item">1</view>
					<view class="item">2</view>
					<view class="item">3</view>
					<view class="item">4</view>
					<view class="item">5</view>
					<view class="item">6</view>
					<view class="item">7</view>
					<view class="item">8</view>
					<view class="item">9</view>
					<view class="item">0</view>
				</view>
				<view class="times">
					<view :class="rightNum1 > 5 ? 'item active' : 'item'">{{ rightNum1 }}</view>
					<view :class="rightNum2 > 5 ? 'item active' : 'item'">{{ rightNum2 }}</view>
					<view :class="rightNum3 > 5 ? 'item active' : 'item'">{{ rightNum3 }}</view>
					<view :class="rightNum4 > 5 ? 'item active' : 'item'">{{ rightNum4 }}</view>
					<view :class="rightNum5 > 5 ? 'item active' : 'item'">{{ rightNum5 }}</view>
					<view :class="rightNum6 > 5 ? 'item active' : 'item'">{{ rightNum6 }}</view>
					<view :class="rightNum7 > 5 ? 'item active' : 'item'">{{ rightNum7 }}</view>
					<view :class="rightNum8 > 5 ? 'item active' : 'item'">{{ rightNum8 }}</view>
					<view :class="rightNum9 > 5 ? 'item active' : 'item'">{{ rightNum9 }}</view>
					<view :class="rightNum10 > 5 ? 'item active' : 'item'">{{ rightNum10 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum1 > 5 ? 'item active' : 'item'">{{ wrongNum1 }}</view>
					<view :class="wrongNum2 > 5 ? 'item active' : 'item'">{{ wrongNum2 }}</view>
					<view :class="wrongNum3 > 5 ? 'item active' : 'item'">{{ wrongNum3 }}</view>
					<view :class="wrongNum4 > 5 ? 'item active' : 'item'">{{ wrongNum4 }}</view>
					<view :class="wrongNum5 > 5 ? 'item active' : 'item'">{{ wrongNum5 }}</view>
					<view :class="wrongNum6 > 5 ? 'item active' : 'item'">{{ wrongNum6 }}</view>
					<view :class="wrongNum7 > 5 ? 'item active' : 'item'">{{ wrongNum7 }}</view>
					<view :class="wrongNum8 > 5 ? 'item active' : 'item'">{{ wrongNum8 }}</view>
					<view :class="wrongNum9 > 5 ? 'item active' : 'item'">{{ wrongNum9 }}</view>
					<view :class="wrongNum10 > 5 ? 'item active' : 'item'">{{ wrongNum10 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum1 > 5 || wrongNum1 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum2 > 5 || wrongNum2 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum3 > 5 || wrongNum3 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum4 > 5 || wrongNum4 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum5 > 5 || wrongNum5 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum6 > 5 || wrongNum6 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum7 > 5 || wrongNum7 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum8 > 5 || wrongNum8 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum9 > 5 || wrongNum9 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum10 > 5 || wrongNum10 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum11 > 5 ? 'item active' : 'item'">{{ rightNum11 }}</view>
					<view :class="rightNum12 > 5 ? 'item active' : 'item'">{{ rightNum12 }}</view>
					<view :class="rightNum13 > 5 ? 'item active' : 'item'">{{ rightNum13 }}</view>
					<view :class="rightNum14 > 5 ? 'item active' : 'item'">{{ rightNum14 }}</view>
					<view :class="rightNum15 > 5 ? 'item active' : 'item'">{{ rightNum15 }}</view>
					<view :class="rightNum16 > 5 ? 'item active' : 'item'">{{ rightNum16 }}</view>
					<view :class="rightNum17 > 5 ? 'item active' : 'item'">{{ rightNum17 }}</view>
					<view :class="rightNum18 > 5 ? 'item active' : 'item'">{{ rightNum18 }}</view>
					<view :class="rightNum19 > 5 ? 'item active' : 'item'">{{ rightNum19 }}</view>
					<view :class="rightNum20 > 5 ? 'item active' : 'item'">{{ rightNum20 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum11 > 5 ? 'item active' : 'item'">{{ wrongNum11 }}</view>
					<view :class="wrongNum12 > 5 ? 'item active' : 'item'">{{ wrongNum12 }}</view>
					<view :class="wrongNum13 > 5 ? 'item active' : 'item'">{{ wrongNum13 }}</view>
					<view :class="wrongNum14 > 5 ? 'item active' : 'item'">{{ wrongNum14 }}</view>
					<view :class="wrongNum15 > 5 ? 'item active' : 'item'">{{ wrongNum15 }}</view>
					<view :class="wrongNum16 > 5 ? 'item active' : 'item'">{{ wrongNum16 }}</view>
					<view :class="wrongNum17 > 5 ? 'item active' : 'item'">{{ wrongNum17 }}</view>
					<view :class="wrongNum18 > 5 ? 'item active' : 'item'">{{ wrongNum18 }}</view>
					<view :class="wrongNum19 > 5 ? 'item active' : 'item'">{{ wrongNum19 }}</view>
					<view :class="wrongNum20 > 5 ? 'item active' : 'item'">{{ wrongNum20 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum11 > 5 || wrongNum11 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum12 > 5 || wrongNum12 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum13 > 5 || wrongNum13 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum14 > 5 || wrongNum14 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum15 > 5 || wrongNum15 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum16 > 5 || wrongNum16 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum17 > 5 || wrongNum17 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum18 > 5 || wrongNum18 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum19 > 5 || wrongNum19 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum20 > 5 || wrongNum20 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum21 > 5 ? 'item active' : 'item'">{{ rightNum21 }}</view>
					<view :class="rightNum22 > 5 ? 'item active' : 'item'">{{ rightNum22 }}</view>
					<view :class="rightNum23 > 5 ? 'item active' : 'item'">{{ rightNum23 }}</view>
					<view :class="rightNum24 > 5 ? 'item active' : 'item'">{{ rightNum24 }}</view>
					<view :class="rightNum25 > 5 ? 'item active' : 'item'">{{ rightNum25 }}</view>
					<view :class="rightNum26 > 5 ? 'item active' : 'item'">{{ rightNum26 }}</view>
					<view :class="rightNum27 > 5 ? 'item active' : 'item'">{{ rightNum27 }}</view>
					<view :class="rightNum28 > 5 ? 'item active' : 'item'">{{ rightNum28 }}</view>
					<view :class="rightNum29 > 5 ? 'item active' : 'item'">{{ rightNum29 }}</view>
					<view :class="rightNum30 > 5 ? 'item active' : 'item'">{{ rightNum30 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum21 > 5 ? 'item active' : 'item'">{{ wrongNum21 }}</view>
					<view :class="wrongNum22 > 5 ? 'item active' : 'item'">{{ wrongNum22 }}</view>
					<view :class="wrongNum23 > 5 ? 'item active' : 'item'">{{ wrongNum23 }}</view>
					<view :class="wrongNum24 > 5 ? 'item active' : 'item'">{{ wrongNum24 }}</view>
					<view :class="wrongNum25 > 5 ? 'item active' : 'item'">{{ wrongNum25 }}</view>
					<view :class="wrongNum26 > 5 ? 'item active' : 'item'">{{ wrongNum26 }}</view>
					<view :class="wrongNum27 > 5 ? 'item active' : 'item'">{{ wrongNum27 }}</view>
					<view :class="wrongNum28 > 5 ? 'item active' : 'item'">{{ wrongNum28 }}</view>
					<view :class="wrongNum29 > 5 ? 'item active' : 'item'">{{ wrongNum29 }}</view>
					<view :class="wrongNum30 > 5 ? 'item active' : 'item'">{{ wrongNum30 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum21 > 5 || wrongNum21 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum22 > 5 || wrongNum22 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum23 > 5 || wrongNum23 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum24 > 5 || wrongNum24 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum25 > 5 || wrongNum25 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum26 > 5 || wrongNum26 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum27 > 5 || wrongNum27 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum28 > 5 || wrongNum28 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum29 > 5 || wrongNum29 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum30 > 5 || wrongNum30 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum31 > 5 ? 'item active' : 'item'">{{ rightNum31 }}</view>
					<view :class="rightNum32 > 5 ? 'item active' : 'item'">{{ rightNum32 }}</view>
					<view :class="rightNum33 > 5 ? 'item active' : 'item'">{{ rightNum33 }}</view>
					<view :class="rightNum34 > 5 ? 'item active' : 'item'">{{ rightNum34 }}</view>
					<view :class="rightNum35 > 5 ? 'item active' : 'item'">{{ rightNum35 }}</view>
					<view :class="rightNum36 > 5 ? 'item active' : 'item'">{{ rightNum36 }}</view>
					<view :class="rightNum37 > 5 ? 'item active' : 'item'">{{ rightNum37 }}</view>
					<view :class="rightNum38 > 5 ? 'item active' : 'item'">{{ rightNum38 }}</view>
					<view :class="rightNum39 > 5 ? 'item active' : 'item'">{{ rightNum39 }}</view>
					<view :class="rightNum40 > 5 ? 'item active' : 'item'">{{ rightNum40 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum31 > 5 ? 'item active' : 'item'">{{ wrongNum31 }}</view>
					<view :class="wrongNum32 > 5 ? 'item active' : 'item'">{{ wrongNum32 }}</view>
					<view :class="wrongNum33 > 5 ? 'item active' : 'item'">{{ wrongNum33 }}</view>
					<view :class="wrongNum34 > 5 ? 'item active' : 'item'">{{ wrongNum34 }}</view>
					<view :class="wrongNum35 > 5 ? 'item active' : 'item'">{{ wrongNum35 }}</view>
					<view :class="wrongNum36 > 5 ? 'item active' : 'item'">{{ wrongNum36 }}</view>
					<view :class="wrongNum37 > 5 ? 'item active' : 'item'">{{ wrongNum37 }}</view>
					<view :class="wrongNum38 > 5 ? 'item active' : 'item'">{{ wrongNum38 }}</view>
					<view :class="wrongNum39 > 5 ? 'item active' : 'item'">{{ wrongNum39 }}</view>
					<view :class="wrongNum40 > 5 ? 'item active' : 'item'">{{ wrongNum40 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum31 > 5 || wrongNum31 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum32 > 5 || wrongNum32 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum33 > 5 || wrongNum33 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum34 > 5 || wrongNum34 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum35 > 5 || wrongNum35 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum36 > 5 || wrongNum36 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum37 > 5 || wrongNum37 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum38 > 5 || wrongNum38 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum39 > 5 || wrongNum39 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum40 > 5 || wrongNum40 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum41 > 5 ? 'item active' : 'item'">{{ rightNum41 }}</view>
					<view :class="rightNum42 > 5 ? 'item active' : 'item'">{{ rightNum42 }}</view>
					<view :class="rightNum43 > 5 ? 'item active' : 'item'">{{ rightNum43 }}</view>
					<view :class="rightNum44 > 5 ? 'item active' : 'item'">{{ rightNum44 }}</view>
					<view :class="rightNum45 > 5 ? 'item active' : 'item'">{{ rightNum45 }}</view>
					<view :class="rightNum46 > 5 ? 'item active' : 'item'">{{ rightNum46 }}</view>
					<view :class="rightNum47 > 5 ? 'item active' : 'item'">{{ rightNum47 }}</view>
					<view :class="rightNum48 > 5 ? 'item active' : 'item'">{{ rightNum48 }}</view>
					<view :class="rightNum49 > 5 ? 'item active' : 'item'">{{ rightNum49 }}</view>
					<view :class="rightNum50 > 5 ? 'item active' : 'item'">{{ rightNum50 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum41 > 5 ? 'item active' : 'item'">{{ wrongNum41 }}</view>
					<view :class="wrongNum42 > 5 ? 'item active' : 'item'">{{ wrongNum42 }}</view>
					<view :class="wrongNum43 > 5 ? 'item active' : 'item'">{{ wrongNum43 }}</view>
					<view :class="wrongNum44 > 5 ? 'item active' : 'item'">{{ wrongNum44 }}</view>
					<view :class="wrongNum45 > 5 ? 'item active' : 'item'">{{ wrongNum45 }}</view>
					<view :class="wrongNum46 > 5 ? 'item active' : 'item'">{{ wrongNum46 }}</view>
					<view :class="wrongNum47 > 5 ? 'item active' : 'item'">{{ wrongNum47 }}</view>
					<view :class="wrongNum48 > 5 ? 'item active' : 'item'">{{ wrongNum48 }}</view>
					<view :class="wrongNum49 > 5 ? 'item active' : 'item'">{{ wrongNum49 }}</view>
					<view :class="wrongNum50 > 5 ? 'item active' : 'item'">{{ wrongNum50 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum41 > 5 || wrongNum41 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum42 > 5 || wrongNum42 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum43 > 5 || wrongNum43 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum44 > 5 || wrongNum44 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum45 > 5 || wrongNum45 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum46 > 5 || wrongNum46 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum47 > 5 || wrongNum47 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum48 > 5 || wrongNum48 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum49 > 5 || wrongNum49 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum50 > 5 || wrongNum50 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum51 > 5 ? 'item active' : 'item'">{{ rightNum51 }}</view>
					<view :class="rightNum52 > 5 ? 'item active' : 'item'">{{ rightNum52 }}</view>
					<view :class="rightNum53 > 5 ? 'item active' : 'item'">{{ rightNum53 }}</view>
					<view :class="rightNum54 > 5 ? 'item active' : 'item'">{{ rightNum54 }}</view>
					<view :class="rightNum55 > 5 ? 'item active' : 'item'">{{ rightNum55 }}</view>
					<view :class="rightNum56 > 5 ? 'item active' : 'item'">{{ rightNum56 }}</view>
					<view :class="rightNum57 > 5 ? 'item active' : 'item'">{{ rightNum57 }}</view>
					<view :class="rightNum58 > 5 ? 'item active' : 'item'">{{ rightNum58 }}</view>
					<view :class="rightNum59 > 5 ? 'item active' : 'item'">{{ rightNum59 }}</view>
					<view :class="rightNum60 > 5 ? 'item active' : 'item'">{{ rightNum60 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum51 > 5 ? 'item active' : 'item'">{{ wrongNum51 }}</view>
					<view :class="wrongNum52 > 5 ? 'item active' : 'item'">{{ wrongNum52 }}</view>
					<view :class="wrongNum53 > 5 ? 'item active' : 'item'">{{ wrongNum53 }}</view>
					<view :class="wrongNum54 > 5 ? 'item active' : 'item'">{{ wrongNum54 }}</view>
					<view :class="wrongNum55 > 5 ? 'item active' : 'item'">{{ wrongNum55 }}</view>
					<view :class="wrongNum56 > 5 ? 'item active' : 'item'">{{ wrongNum56 }}</view>
					<view :class="wrongNum57 > 5 ? 'item active' : 'item'">{{ wrongNum57 }}</view>
					<view :class="wrongNum58 > 5 ? 'item active' : 'item'">{{ wrongNum58 }}</view>
					<view :class="wrongNum59 > 5 ? 'item active' : 'item'">{{ wrongNum59 }}</view>
					<view :class="wrongNum60 > 5 ? 'item active' : 'item'">{{ wrongNum60 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum51 > 5 || wrongNum51 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum52 > 5 || wrongNum52 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum53 > 5 || wrongNum53 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum54 > 5 || wrongNum54 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum55 > 5 || wrongNum55 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum56 > 5 || wrongNum56 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum57 > 5 || wrongNum57 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum58 > 5 || wrongNum58 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum59 > 5 || wrongNum59 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum60 > 5 || wrongNum60 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum61 > 5 ? 'item active' : 'item'">{{ rightNum61 }}</view>
					<view :class="rightNum62 > 5 ? 'item active' : 'item'">{{ rightNum62 }}</view>
					<view :class="rightNum63 > 5 ? 'item active' : 'item'">{{ rightNum63 }}</view>
					<view :class="rightNum64 > 5 ? 'item active' : 'item'">{{ rightNum64 }}</view>
					<view :class="rightNum65 > 5 ? 'item active' : 'item'">{{ rightNum65 }}</view>
					<view :class="rightNum66 > 5 ? 'item active' : 'item'">{{ rightNum66 }}</view>
					<view :class="rightNum67 > 5 ? 'item active' : 'item'">{{ rightNum67 }}</view>
					<view :class="rightNum68 > 5 ? 'item active' : 'item'">{{ rightNum68 }}</view>
					<view :class="rightNum69 > 5 ? 'item active' : 'item'">{{ rightNum69 }}</view>
					<view :class="rightNum70 > 5 ? 'item active' : 'item'">{{ rightNum70 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum61 > 5 ? 'item active' : 'item'">{{ wrongNum61 }}</view>
					<view :class="wrongNum62 > 5 ? 'item active' : 'item'">{{ wrongNum62 }}</view>
					<view :class="wrongNum63 > 5 ? 'item active' : 'item'">{{ wrongNum63 }}</view>
					<view :class="wrongNum64 > 5 ? 'item active' : 'item'">{{ wrongNum64 }}</view>
					<view :class="wrongNum65 > 5 ? 'item active' : 'item'">{{ wrongNum65 }}</view>
					<view :class="wrongNum66 > 5 ? 'item active' : 'item'">{{ wrongNum66 }}</view>
					<view :class="wrongNum67 > 5 ? 'item active' : 'item'">{{ wrongNum67 }}</view>
					<view :class="wrongNum68 > 5 ? 'item active' : 'item'">{{ wrongNum68 }}</view>
					<view :class="wrongNum69 > 5 ? 'item active' : 'item'">{{ wrongNum69 }}</view>
					<view :class="wrongNum70 > 5 ? 'item active' : 'item'">{{ wrongNum70 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum61 > 5 || wrongNum61 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum62 > 5 || wrongNum62 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum63 > 5 || wrongNum63 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum64 > 5 || wrongNum64 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum65 > 5 || wrongNum65 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum66 > 5 || wrongNum66 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum67 > 5 || wrongNum67 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum68 > 5 || wrongNum68 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum69 > 5 || wrongNum69 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum70 > 5 || wrongNum70 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum71 > 5 ? 'item active' : 'item'">{{ rightNum71 }}</view>
					<view :class="rightNum72 > 5 ? 'item active' : 'item'">{{ rightNum72 }}</view>
					<view :class="rightNum73 > 5 ? 'item active' : 'item'">{{ rightNum73 }}</view>
					<view :class="rightNum74 > 5 ? 'item active' : 'item'">{{ rightNum74 }}</view>
					<view :class="rightNum75 > 5 ? 'item active' : 'item'">{{ rightNum75 }}</view>
					<view :class="rightNum76 > 5 ? 'item active' : 'item'">{{ rightNum76 }}</view>
					<view :class="rightNum77 > 5 ? 'item active' : 'item'">{{ rightNum77 }}</view>
					<view :class="rightNum78 > 5 ? 'item active' : 'item'">{{ rightNum78 }}</view>
					<view :class="rightNum79 > 5 ? 'item active' : 'item'">{{ rightNum79 }}</view>
					<view :class="rightNum80 > 5 ? 'item active' : 'item'">{{ rightNum80 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum71 > 5 ? 'item active' : 'item'">{{ wrongNum71 }}</view>
					<view :class="wrongNum72 > 5 ? 'item active' : 'item'">{{ wrongNum72 }}</view>
					<view :class="wrongNum73 > 5 ? 'item active' : 'item'">{{ wrongNum73 }}</view>
					<view :class="wrongNum74 > 5 ? 'item active' : 'item'">{{ wrongNum74 }}</view>
					<view :class="wrongNum75 > 5 ? 'item active' : 'item'">{{ wrongNum75 }}</view>
					<view :class="wrongNum76 > 5 ? 'item active' : 'item'">{{ wrongNum76 }}</view>
					<view :class="wrongNum77 > 5 ? 'item active' : 'item'">{{ wrongNum77 }}</view>
					<view :class="wrongNum78 > 5 ? 'item active' : 'item'">{{ wrongNum78 }}</view>
					<view :class="wrongNum79 > 5 ? 'item active' : 'item'">{{ wrongNum79 }}</view>
					<view :class="wrongNum80 > 5 ? 'item active' : 'item'">{{ wrongNum80 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum71 > 5 || wrongNum71 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum72 > 5 || wrongNum72 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum73 > 5 || wrongNum73 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum74 > 5 || wrongNum74 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum75 > 5 || wrongNum75 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum76 > 5 || wrongNum76 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum77 > 5 || wrongNum77 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum78 > 5 || wrongNum78 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum79 > 5 || wrongNum79 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum80 > 5 || wrongNum80 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum81 > 5 ? 'item active' : 'item'">{{ rightNum81 }}</view>
					<view :class="rightNum82 > 5 ? 'item active' : 'item'">{{ rightNum82 }}</view>
					<view :class="rightNum83 > 5 ? 'item active' : 'item'">{{ rightNum83 }}</view>
					<view :class="rightNum84 > 5 ? 'item active' : 'item'">{{ rightNum84 }}</view>
					<view :class="rightNum85 > 5 ? 'item active' : 'item'">{{ rightNum85 }}</view>
					<view :class="rightNum86 > 5 ? 'item active' : 'item'">{{ rightNum86 }}</view>
					<view :class="rightNum87 > 5 ? 'item active' : 'item'">{{ rightNum87 }}</view>
					<view :class="rightNum88 > 5 ? 'item active' : 'item'">{{ rightNum88 }}</view>
					<view :class="rightNum89 > 5 ? 'item active' : 'item'">{{ rightNum89 }}</view>
					<view :class="rightNum90 > 5 ? 'item active' : 'item'">{{ rightNum90 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum81 > 5 ? 'item active' : 'item'">{{ wrongNum81 }}</view>
					<view :class="wrongNum82 > 5 ? 'item active' : 'item'">{{ wrongNum82 }}</view>
					<view :class="wrongNum83 > 5 ? 'item active' : 'item'">{{ wrongNum83 }}</view>
					<view :class="wrongNum84 > 5 ? 'item active' : 'item'">{{ wrongNum84 }}</view>
					<view :class="wrongNum85 > 5 ? 'item active' : 'item'">{{ wrongNum85 }}</view>
					<view :class="wrongNum86 > 5 ? 'item active' : 'item'">{{ wrongNum86 }}</view>
					<view :class="wrongNum87 > 5 ? 'item active' : 'item'">{{ wrongNum87 }}</view>
					<view :class="wrongNum88 > 5 ? 'item active' : 'item'">{{ wrongNum88 }}</view>
					<view :class="wrongNum89 > 5 ? 'item active' : 'item'">{{ wrongNum89 }}</view>
					<view :class="wrongNum90 > 5 ? 'item active' : 'item'">{{ wrongNum90 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum81 > 5 || wrongNum81 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum82 > 5 || wrongNum82 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum83 > 5 || wrongNum83 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum84 > 5 || wrongNum84 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum85 > 5 || wrongNum85 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum86 > 5 || wrongNum86 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum87 > 5 || wrongNum87 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum88 > 5 || wrongNum88 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum89 > 5 || wrongNum89 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum90 > 5 || wrongNum90 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum91 > 5 ? 'item active' : 'item'">{{ rightNum91 }}</view>
					<view :class="rightNum92 > 5 ? 'item active' : 'item'">{{ rightNum92 }}</view>
					<view :class="rightNum93 > 5 ? 'item active' : 'item'">{{ rightNum93 }}</view>
					<view :class="rightNum94 > 5 ? 'item active' : 'item'">{{ rightNum94 }}</view>
					<view :class="rightNum95 > 5 ? 'item active' : 'item'">{{ rightNum95 }}</view>
					<view :class="rightNum96 > 5 ? 'item active' : 'item'">{{ rightNum96 }}</view>
					<view :class="rightNum97 > 5 ? 'item active' : 'item'">{{ rightNum97 }}</view>
					<view :class="rightNum98 > 5 ? 'item active' : 'item'">{{ rightNum98 }}</view>
					<view :class="rightNum99 > 5 ? 'item active' : 'item'">{{ rightNum99 }}</view>
					<view :class="rightNum100 > 5 ? 'item active' : 'item'">{{ rightNum100 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum91 > 5 ? 'item active' : 'item'">{{ wrongNum91 }}</view>
					<view :class="wrongNum92 > 5 ? 'item active' : 'item'">{{ wrongNum92 }}</view>
					<view :class="wrongNum93 > 5 ? 'item active' : 'item'">{{ wrongNum93 }}</view>
					<view :class="wrongNum94 > 5 ? 'item active' : 'item'">{{ wrongNum94 }}</view>
					<view :class="wrongNum95 > 5 ? 'item active' : 'item'">{{ wrongNum95 }}</view>
					<view :class="wrongNum96 > 5 ? 'item active' : 'item'">{{ wrongNum96 }}</view>
					<view :class="wrongNum97 > 5 ? 'item active' : 'item'">{{ wrongNum97 }}</view>
					<view :class="wrongNum98 > 5 ? 'item active' : 'item'">{{ wrongNum98 }}</view>
					<view :class="wrongNum99 > 5 ? 'item active' : 'item'">{{ wrongNum99 }}</view>
					<view :class="wrongNum100 > 5 ? 'item active' : 'item'">{{ wrongNum100 }}</view>
				</view>
				<view style="height: 4px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view :class="rightNum91 > 5 || wrongNum91 > 5 ? 'item active' : 'item'">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum92 > 5 || wrongNum92 > 5 ? 'item active' : 'item'">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum93 > 5 || wrongNum93 > 5 ? 'item active' : 'item'">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum94 > 5 || wrongNum94 > 5 ? 'item active' : 'item'">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum95 > 5 || wrongNum95 > 5 ? 'item active' : 'item'">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum96 > 5 || wrongNum96 > 5 ? 'item active' : 'item'">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum97 > 5 || wrongNum97 > 5 ? 'item active' : 'item'">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum98 > 5 || wrongNum98 > 5 ? 'item active' : 'item'">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum99 > 5 || wrongNum99 > 5 ? 'item active' : 'item'">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view :class="rightNum100 > 5 || wrongNum100 > 5 ? 'item active' : 'item'">{{ num[9] == '1' ? '大' : '小' }}</view>
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
const numType = ref('')
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
const arr32 = ref([])
const arr33 = ref([])
const arr34 = ref([])
const arr35 = ref([])
const arr36 = ref([])
const arr37 = ref([])
const arr38 = ref([])
const arr39 = ref([])
const arr40 = ref([])
const arr41 = ref([])
const arr42 = ref([])
const arr43 = ref([])
const arr44 = ref([])
const arr45 = ref([])
const arr46 = ref([])
const arr47 = ref([])
const arr48 = ref([])
const arr49 = ref([])
const arr50 = ref([])
const arr51 = ref([])
const arr52 = ref([])
const arr53 = ref([])
const arr54 = ref([])
const arr55 = ref([])
const arr56 = ref([])
const arr57 = ref([])
const arr58 = ref([])
const arr59 = ref([])
const arr60 = ref([])
const arr61 = ref([])
const arr62 = ref([])
const arr63 = ref([])
const arr64 = ref([])
const arr65 = ref([])
const arr66 = ref([])
const arr67 = ref([])
const arr68 = ref([])
const arr69 = ref([])
const arr70 = ref([])
const arr71 = ref([])
const arr72 = ref([])
const arr73 = ref([])
const arr74 = ref([])
const arr75 = ref([])
const arr76 = ref([])
const arr77 = ref([])
const arr78 = ref([])
const arr79 = ref([])
const arr80 = ref([])
const arr81 = ref([])
const arr82 = ref([])
const arr83 = ref([])
const arr84 = ref([])
const arr85 = ref([])
const arr86 = ref([])
const arr87 = ref([])
const arr88 = ref([])
const arr89 = ref([])
const arr90 = ref([])
const arr91 = ref([])
const arr92 = ref([])
const arr93 = ref([])
const arr94 = ref([])
const arr95 = ref([])
const arr96 = ref([])
const arr97 = ref([])
const arr98 = ref([])
const arr99 = ref([])
const arr100 = ref([])
const arr101 = ref([])
const arr102 = ref([])
const arr103 = ref([])
const arr104 = ref([])
const arr105 = ref([])
const arr106 = ref([])
const arr107 = ref([])
const arr108 = ref([])
const arr109 = ref([])
const arr110 = ref([])
const arr111 = ref([])
const arr112 = ref([])
const arr113 = ref([])
const arr114 = ref([])
const arr115 = ref([])
const arr116 = ref([])
const arr117 = ref([])
const arr118 = ref([])
const arr119 = ref([])
const arr120 = ref([])
const arr121 = ref([])
const arr122 = ref([])
const arr123 = ref([])
const arr124 = ref([])
const arr125 = ref([])
const arr126 = ref([])
const arr127 = ref([])
const arr128 = ref([])
const arr129 = ref([])
const arr130 = ref([])
const arr131 = ref([])
const arr132 = ref([])
const arr133 = ref([])
const arr134 = ref([])
const arr135 = ref([])
const arr136 = ref([])
const arr137 = ref([])
const arr138 = ref([])
const arr139 = ref([])
const arr140 = ref([])
const arr141 = ref([])
const arr142 = ref([])
const arr143 = ref([])
const arr144 = ref([])
const arr145 = ref([])
const arr146 = ref([])
const arr147 = ref([])
const arr148 = ref([])
const arr149 = ref([])
const arr150 = ref([])
const arr151 = ref([])
const arr152 = ref([])
const arr153 = ref([])
const arr154 = ref([])
const arr155 = ref([])
const arr156 = ref([])
const arr157 = ref([])
const arr158 = ref([])
const arr159 = ref([])
const arr160 = ref([])
const arr161 = ref([])
const arr162 = ref([])
const arr163 = ref([])
const arr164 = ref([])
const arr165 = ref([])
const arr166 = ref([])
const arr167 = ref([])
const arr168 = ref([])
const arr169 = ref([])
const arr170 = ref([])
const arr171 = ref([])
const arr172 = ref([])
const arr173 = ref([])
const arr174 = ref([])
const arr175 = ref([])
const arr176 = ref([])
const arr177 = ref([])
const arr178 = ref([])
const arr179 = ref([])
const arr180 = ref([])
const arr181 = ref([])
const arr182 = ref([])
const arr183 = ref([])
const arr184 = ref([])
const arr185 = ref([])
const arr186 = ref([])
const arr187 = ref([])
const arr188 = ref([])
const arr189 = ref([])
const arr190 = ref([])
const arr191 = ref([])
const arr192 = ref([])
const arr193 = ref([])
const arr194 = ref([])
const arr195 = ref([])
const arr196 = ref([])
const arr197 = ref([])
const arr198 = ref([])
const arr199 = ref([])
const arr200 = ref([])
const arrComparison = ref([])

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

let rightNum31 = ref(0)
let wrongNum31 = ref(0)

let rightNum32 = ref(0)
let wrongNum32 = ref(0)

let rightNum33 = ref(0)
let wrongNum33 = ref(0)

let rightNum34 = ref(0)
let wrongNum34 = ref(0)

let rightNum35 = ref(0)
let wrongNum35 = ref(0)

let rightNum36 = ref(0)
let wrongNum36 = ref(0)

let rightNum37 = ref(0)
let wrongNum37 = ref(0)

let rightNum38 = ref(0)
let wrongNum38 = ref(0)

let rightNum39 = ref(0)
let wrongNum39 = ref(0)

let rightNum40 = ref(0)
let wrongNum40 = ref(0)

let rightNum41 = ref(0)
let wrongNum41 = ref(0)

let rightNum42 = ref(0)
let wrongNum42 = ref(0)

let rightNum43 = ref(0)
let wrongNum43 = ref(0)

let rightNum44 = ref(0)
let wrongNum44 = ref(0)

let rightNum45 = ref(0)
let wrongNum45 = ref(0)

let rightNum46 = ref(0)
let wrongNum46 = ref(0)

let rightNum47 = ref(0)
let wrongNum47 = ref(0)

let rightNum48 = ref(0)
let wrongNum48 = ref(0)

let rightNum49 = ref(0)
let wrongNum49 = ref(0)

let rightNum50 = ref(0)
let wrongNum50 = ref(0)

let rightNum51 = ref(0)
let wrongNum51 = ref(0)

let rightNum52 = ref(0)
let wrongNum52 = ref(0)

let rightNum53 = ref(0)
let wrongNum53 = ref(0)

let rightNum54 = ref(0)
let wrongNum54 = ref(0)

let rightNum55 = ref(0)
let wrongNum55 = ref(0)

let rightNum56 = ref(0)
let wrongNum56 = ref(0)

let rightNum57 = ref(0)
let wrongNum57 = ref(0)

let rightNum58 = ref(0)
let wrongNum58 = ref(0)

let rightNum59 = ref(0)
let wrongNum59 = ref(0)

let rightNum60 = ref(0)
let wrongNum60 = ref(0)

let rightNum61 = ref(0)
let wrongNum61 = ref(0)

let rightNum62 = ref(0)
let wrongNum62 = ref(0)

let rightNum63 = ref(0)
let wrongNum63 = ref(0)

let rightNum64 = ref(0)
let wrongNum64 = ref(0)

let rightNum65 = ref(0)
let wrongNum65 = ref(0)

let rightNum66 = ref(0)
let wrongNum66 = ref(0)

let rightNum67 = ref(0)
let wrongNum67 = ref(0)

let rightNum68 = ref(0)
let wrongNum68 = ref(0)

let rightNum69 = ref(0)
let wrongNum69 = ref(0)

let rightNum70 = ref(0)
let wrongNum70 = ref(0)

let rightNum71 = ref(0)
let wrongNum71 = ref(0)

let rightNum72 = ref(0)
let wrongNum72 = ref(0)

let rightNum73 = ref(0)
let wrongNum73 = ref(0)

let rightNum74 = ref(0)
let wrongNum74 = ref(0)

let rightNum75 = ref(0)
let wrongNum75 = ref(0)

let rightNum76 = ref(0)
let wrongNum76 = ref(0)

let rightNum77 = ref(0)
let wrongNum77 = ref(0)

let rightNum78 = ref(0)
let wrongNum78 = ref(0)

let rightNum79 = ref(0)
let wrongNum79 = ref(0)

let rightNum80 = ref(0)
let wrongNum80 = ref(0)

let rightNum81 = ref(0)
let wrongNum81 = ref(0)

let rightNum82 = ref(0)
let wrongNum82 = ref(0)

let rightNum83 = ref(0)
let wrongNum83 = ref(0)

let rightNum84 = ref(0)
let wrongNum84 = ref(0)

let rightNum85 = ref(0)
let wrongNum85 = ref(0)

let rightNum86 = ref(0)
let wrongNum86 = ref(0)

let rightNum87 = ref(0)
let wrongNum87 = ref(0)

let rightNum88 = ref(0)
let wrongNum88 = ref(0)

let rightNum89 = ref(0)
let wrongNum89 = ref(0)

let rightNum90 = ref(0)
let wrongNum90 = ref(0)

let rightNum91 = ref(0)
let wrongNum91 = ref(0)

let rightNum92 = ref(0)
let wrongNum92 = ref(0)

let rightNum93 = ref(0)
let wrongNum93 = ref(0)

let rightNum94 = ref(0)
let wrongNum94 = ref(0)

let rightNum95 = ref(0)
let wrongNum95 = ref(0)

let rightNum96 = ref(0)
let wrongNum96 = ref(0)

let rightNum97 = ref(0)
let wrongNum97 = ref(0)

let rightNum98 = ref(0)
let wrongNum98 = ref(0)

let rightNum99 = ref(0)
let wrongNum99 = ref(0)

let rightNum100 = ref(0)
let wrongNum100 = ref(0)

let rightNum101 = ref(0)
let wrongNum101 = ref(0)

let rightNum102 = ref(0)
let wrongNum102 = ref(0)

let rightNum103 = ref(0)
let wrongNum103 = ref(0)

let rightNum104 = ref(0)
let wrongNum104 = ref(0)

let rightNum105 = ref(0)
let wrongNum105 = ref(0)

let rightNum106 = ref(0)
let wrongNum106 = ref(0)

let rightNum107 = ref(0)
let wrongNum107 = ref(0)

let rightNum108 = ref(0)
let wrongNum108 = ref(0)

let rightNum109 = ref(0)
let wrongNum109 = ref(0)

let rightNum110 = ref(0)
let wrongNum110 = ref(0)

let rightNum111 = ref(0)
let wrongNum111 = ref(0)

let rightNum112 = ref(0)
let wrongNum112 = ref(0)

let rightNum113 = ref(0)
let wrongNum113 = ref(0)

let rightNum114 = ref(0)
let wrongNum114 = ref(0)

let rightNum115 = ref(0)
let wrongNum115 = ref(0)

let rightNum116 = ref(0)
let wrongNum116 = ref(0)

let rightNum117 = ref(0)
let wrongNum117 = ref(0)

let rightNum118 = ref(0)
let wrongNum118 = ref(0)

let rightNum119 = ref(0)
let wrongNum119 = ref(0)

let rightNum120 = ref(0)
let wrongNum120 = ref(0)

let rightNum121 = ref(0)
let wrongNum121 = ref(0)

let rightNum122 = ref(0)
let wrongNum122 = ref(0)

let rightNum123 = ref(0)
let wrongNum123 = ref(0)

let rightNum124 = ref(0)
let wrongNum124 = ref(0)

let rightNum125 = ref(0)
let wrongNum125 = ref(0)

let rightNum126 = ref(0)
let wrongNum126 = ref(0)

let rightNum127 = ref(0)
let wrongNum127 = ref(0)

let rightNum128 = ref(0)
let wrongNum128 = ref(0)

let rightNum129 = ref(0)
let wrongNum129 = ref(0)

let rightNum130 = ref(0)
let wrongNum130 = ref(0)

let rightNum131 = ref(0)
let wrongNum131 = ref(0)

let rightNum132 = ref(0)
let wrongNum132 = ref(0)

let rightNum133 = ref(0)
let wrongNum133 = ref(0)

let rightNum134 = ref(0)
let wrongNum134 = ref(0)

let rightNum135 = ref(0)
let wrongNum135 = ref(0)

let rightNum136 = ref(0)
let wrongNum136 = ref(0)

let rightNum137 = ref(0)
let wrongNum137 = ref(0)

let rightNum138 = ref(0)
let wrongNum138 = ref(0)

let rightNum139 = ref(0)
let wrongNum139 = ref(0)

let rightNum140 = ref(0)
let wrongNum140 = ref(0)

let rightNum141 = ref(0)
let wrongNum141 = ref(0)

let rightNum142 = ref(0)
let wrongNum142 = ref(0)

let rightNum143 = ref(0)
let wrongNum143 = ref(0)

let rightNum144 = ref(0)
let wrongNum144 = ref(0)

let rightNum145 = ref(0)
let wrongNum145 = ref(0)

let rightNum146 = ref(0)
let wrongNum146 = ref(0)

let rightNum147 = ref(0)
let wrongNum147 = ref(0)

let rightNum148 = ref(0)
let wrongNum148 = ref(0)

let rightNum149 = ref(0)
let wrongNum149 = ref(0)

let rightNum150 = ref(0)
let wrongNum150 = ref(0)

let rightNum151 = ref(0)
let wrongNum151 = ref(0)

let rightNum152 = ref(0)
let wrongNum152 = ref(0)

let rightNum153 = ref(0)
let wrongNum153 = ref(0)

let rightNum154 = ref(0)
let wrongNum154 = ref(0)

let rightNum155 = ref(0)
let wrongNum155 = ref(0)

let rightNum156 = ref(0)
let wrongNum156 = ref(0)

let rightNum157 = ref(0)
let wrongNum157 = ref(0)

let rightNum158 = ref(0)
let wrongNum158 = ref(0)

let rightNum159 = ref(0)
let wrongNum159 = ref(0)

let rightNum160 = ref(0)
let wrongNum160 = ref(0)

let rightNum161 = ref(0)
let wrongNum161 = ref(0)

let rightNum162 = ref(0)
let wrongNum162 = ref(0)

let rightNum163 = ref(0)
let wrongNum163 = ref(0)

let rightNum164 = ref(0)
let wrongNum164 = ref(0)

let rightNum165 = ref(0)
let wrongNum165 = ref(0)

let rightNum166 = ref(0)
let wrongNum166 = ref(0)

let rightNum167 = ref(0)
let wrongNum167 = ref(0)

let rightNum168 = ref(0)
let wrongNum168 = ref(0)

let rightNum169 = ref(0)
let wrongNum169 = ref(0)

let rightNum170 = ref(0)
let wrongNum170 = ref(0)

let rightNum171 = ref(0)
let wrongNum171 = ref(0)

let rightNum172 = ref(0)
let wrongNum172 = ref(0)

let rightNum173 = ref(0)
let wrongNum173 = ref(0)

let rightNum174 = ref(0)
let wrongNum174 = ref(0)

let rightNum175 = ref(0)
let wrongNum175 = ref(0)

let rightNum176 = ref(0)
let wrongNum176 = ref(0)

let rightNum177 = ref(0)
let wrongNum177 = ref(0)

let rightNum178 = ref(0)
let wrongNum178 = ref(0)

let rightNum179 = ref(0)
let wrongNum179 = ref(0)

let rightNum180 = ref(0)
let wrongNum180 = ref(0)

let rightNum181 = ref(0)
let wrongNum181 = ref(0)

let rightNum182 = ref(0)
let wrongNum182 = ref(0)

let rightNum183 = ref(0)
let wrongNum183 = ref(0)

let rightNum184 = ref(0)
let wrongNum184 = ref(0)

let rightNum185 = ref(0)
let wrongNum185 = ref(0)

let rightNum186 = ref(0)
let wrongNum186 = ref(0)

let rightNum187 = ref(0)
let wrongNum187 = ref(0)

let rightNum188 = ref(0)
let wrongNum188 = ref(0)

let rightNum189 = ref(0)
let wrongNum189 = ref(0)

let rightNum190 = ref(0)
let wrongNum190 = ref(0)

let rightNum191 = ref(0)
let wrongNum191 = ref(0)

let rightNum192 = ref(0)
let wrongNum192 = ref(0)

let rightNum193 = ref(0)
let wrongNum193 = ref(0)

let rightNum194 = ref(0)
let wrongNum194 = ref(0)

let rightNum195 = ref(0)
let wrongNum195 = ref(0)

let rightNum196 = ref(0)
let wrongNum196 = ref(0)

let rightNum197 = ref(0)
let wrongNum197 = ref(0)

let rightNum198 = ref(0)
let wrongNum198 = ref(0)

let rightNum199 = ref(0)
let wrongNum199 = ref(0)

let rightNum200 = ref(0)
let wrongNum200 = ref(0)

/* 生命周期函数 */
onLoad(() => {
	getData()
	for(let i = 0; i < 100; i++) {
		findHandle(i)
	}
})

/* methods */
function rnd(n, m){
	return parseInt(Math.random() * ( m - n + 1 ) + n);
}

function getRnd() {
	if (num.value) return
	let arr = []
	for (let i = 0; i < 200; i++) {
		let nb = rnd(0, 1)
		arr.push(nb)
	}
	num.value = arr.join('')
}

function setValueHandle() {
	if (num.value && numType.value) {
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
		arr32.value.unshift(num.value[31]);
		arr33.value.unshift(num.value[32]);
		arr34.value.unshift(num.value[33]);
		arr35.value.unshift(num.value[34]);
		arr36.value.unshift(num.value[35]);
		arr37.value.unshift(num.value[36]);
		arr38.value.unshift(num.value[37]);
		arr39.value.unshift(num.value[38]);
		arr40.value.unshift(num.value[39]);
		arr41.value.unshift(num.value[40]);
		arr42.value.unshift(num.value[41]);
		arr43.value.unshift(num.value[42]);
		arr44.value.unshift(num.value[43]);
		arr45.value.unshift(num.value[44]);
		arr46.value.unshift(num.value[45]);
		arr47.value.unshift(num.value[46]);
		arr48.value.unshift(num.value[47]);
		arr49.value.unshift(num.value[48]);
		arr50.value.unshift(num.value[49]);
		arr51.value.unshift(num.value[50]);
		arr52.value.unshift(num.value[51]);
		arr53.value.unshift(num.value[52]);
		arr54.value.unshift(num.value[53]);
		arr55.value.unshift(num.value[54]);
		arr56.value.unshift(num.value[55]);
		arr57.value.unshift(num.value[56]);
		arr58.value.unshift(num.value[57]);
		arr59.value.unshift(num.value[58]);
		arr60.value.unshift(num.value[59]);
		arr61.value.unshift(num.value[60]);
		arr62.value.unshift(num.value[61]);
		arr63.value.unshift(num.value[62]);
		arr64.value.unshift(num.value[63]);
		arr65.value.unshift(num.value[64]);
		arr66.value.unshift(num.value[65]);
		arr67.value.unshift(num.value[66]);
		arr68.value.unshift(num.value[67]);
		arr69.value.unshift(num.value[68]);
		arr70.value.unshift(num.value[69]);
		arr71.value.unshift(num.value[70]);
		arr72.value.unshift(num.value[71]);
		arr73.value.unshift(num.value[72]);
		arr74.value.unshift(num.value[73]);
		arr75.value.unshift(num.value[74]);
		arr76.value.unshift(num.value[75]);
		arr77.value.unshift(num.value[76]);
		arr78.value.unshift(num.value[77]);
		arr79.value.unshift(num.value[78]);
		arr80.value.unshift(num.value[79]);
		arr81.value.unshift(num.value[80]);
		arr82.value.unshift(num.value[81]);
		arr83.value.unshift(num.value[82]);
		arr84.value.unshift(num.value[83]);
		arr85.value.unshift(num.value[84]);
		arr86.value.unshift(num.value[85]);
		arr87.value.unshift(num.value[86]);
		arr88.value.unshift(num.value[87]);
		arr89.value.unshift(num.value[88]);
		arr90.value.unshift(num.value[89]);
		arr91.value.unshift(num.value[90]);
		arr92.value.unshift(num.value[91]);
		arr93.value.unshift(num.value[92]);
		arr94.value.unshift(num.value[93]);
		arr95.value.unshift(num.value[94]);
		arr96.value.unshift(num.value[95]);
		arr97.value.unshift(num.value[96]);
		arr98.value.unshift(num.value[97]);
		arr99.value.unshift(num.value[98]);
		arr100.value.unshift(num.value[99]);

		arr101.value.unshift(num.value[100]);
		arr102.value.unshift(num.value[101]);
		arr103.value.unshift(num.value[102]);
		arr104.value.unshift(num.value[103]);
		arr105.value.unshift(num.value[104]);
		arr106.value.unshift(num.value[105]);
		arr107.value.unshift(num.value[106]);
		arr108.value.unshift(num.value[107]);
		arr109.value.unshift(num.value[108]);
		arr110.value.unshift(num.value[109]);
		arr111.value.unshift(num.value[110]);
		arr112.value.unshift(num.value[111]);
		arr113.value.unshift(num.value[112]);
		arr114.value.unshift(num.value[113]);
		arr115.value.unshift(num.value[114]);
		arr116.value.unshift(num.value[115]);
		arr117.value.unshift(num.value[116]);
		arr118.value.unshift(num.value[117]);
		arr119.value.unshift(num.value[118]);
		arr120.value.unshift(num.value[119]);
		arr121.value.unshift(num.value[120]);
		arr122.value.unshift(num.value[121]);
		arr123.value.unshift(num.value[122]);
		arr124.value.unshift(num.value[123]);
		arr125.value.unshift(num.value[124]);
		arr126.value.unshift(num.value[125]);
		arr127.value.unshift(num.value[126]);
		arr128.value.unshift(num.value[127]);
		arr129.value.unshift(num.value[128]);
		arr130.value.unshift(num.value[129]);
		arr131.value.unshift(num.value[130]);
		arr132.value.unshift(num.value[131]);
		arr133.value.unshift(num.value[132]);
		arr134.value.unshift(num.value[133]);
		arr135.value.unshift(num.value[134]);
		arr136.value.unshift(num.value[135]);
		arr137.value.unshift(num.value[136]);
		arr138.value.unshift(num.value[137]);
		arr139.value.unshift(num.value[138]);
		arr140.value.unshift(num.value[139]);
		arr141.value.unshift(num.value[140]);
		arr142.value.unshift(num.value[141]);
		arr143.value.unshift(num.value[142]);
		arr144.value.unshift(num.value[143]);
		arr145.value.unshift(num.value[144]);
		arr146.value.unshift(num.value[145]);
		arr147.value.unshift(num.value[146]);
		arr148.value.unshift(num.value[147]);
		arr149.value.unshift(num.value[148]);
		arr150.value.unshift(num.value[149]);
		arr151.value.unshift(num.value[150]);
		arr152.value.unshift(num.value[151]);
		arr153.value.unshift(num.value[152]);
		arr154.value.unshift(num.value[153]);
		arr155.value.unshift(num.value[154]);
		arr156.value.unshift(num.value[155]);
		arr157.value.unshift(num.value[156]);
		arr158.value.unshift(num.value[157]);
		arr159.value.unshift(num.value[158]);
		arr160.value.unshift(num.value[159]);
		arr161.value.unshift(num.value[160]);
		arr162.value.unshift(num.value[161]);
		arr163.value.unshift(num.value[162]);
		arr164.value.unshift(num.value[163]);
		arr165.value.unshift(num.value[164]);
		arr166.value.unshift(num.value[165]);
		arr167.value.unshift(num.value[166]);
		arr168.value.unshift(num.value[167]);
		arr169.value.unshift(num.value[168]);
		arr170.value.unshift(num.value[169]);
		arr171.value.unshift(num.value[170]);
		arr172.value.unshift(num.value[171]);
		arr173.value.unshift(num.value[172]);
		arr174.value.unshift(num.value[173]);
		arr175.value.unshift(num.value[174]);
		arr176.value.unshift(num.value[175]);
		arr177.value.unshift(num.value[176]);
		arr178.value.unshift(num.value[177]);
		arr179.value.unshift(num.value[178]);
		arr180.value.unshift(num.value[179]);
		arr181.value.unshift(num.value[180]);
		arr182.value.unshift(num.value[181]);
		arr183.value.unshift(num.value[182]);
		arr184.value.unshift(num.value[183]);
		arr185.value.unshift(num.value[184]);
		arr186.value.unshift(num.value[185]);
		arr187.value.unshift(num.value[186]);
		arr188.value.unshift(num.value[187]);
		arr189.value.unshift(num.value[188]);
		arr190.value.unshift(num.value[189]);
		arr191.value.unshift(num.value[190]);
		arr192.value.unshift(num.value[191]);
		arr193.value.unshift(num.value[192]);
		arr194.value.unshift(num.value[193]);
		arr195.value.unshift(num.value[194]);
		arr196.value.unshift(num.value[195]);
		arr197.value.unshift(num.value[196]);
		arr198.value.unshift(num.value[197]);
		arr199.value.unshift(num.value[198]);
		arr200.value.unshift(num.value[199]);
		arrComparison.value.unshift(numType.value[0]);

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
		if (arr32.value.length > 20) {
			arr32.value.pop()
		}
		if (arr33.value.length > 20) {
			arr33.value.pop()
		}
		if (arr34.value.length > 20) {
			arr34.value.pop()
		}
		if (arr35.value.length > 20) {
			arr35.value.pop()
		}
		if (arr36.value.length > 20) {
			arr36.value.pop()
		}
		if (arr37.value.length > 20) {
			arr37.value.pop()
		}
		if (arr38.value.length > 20) {
			arr38.value.pop()
		}
		if (arr39.value.length > 20) {
			arr39.value.pop()
		}
		if (arr40.value.length > 20) {
			arr40.value.pop()
		}
		if (arr41.value.length > 20) {
			arr41.value.pop()
		}
		if (arr42.value.length > 20) {
			arr42.value.pop()
		}
		if (arr43.value.length > 20) {
			arr43.value.pop()
		}
		if (arr44.value.length > 20) {
			arr44.value.pop()
		}
		if (arr45.value.length > 20) {
			arr45.value.pop()
		}
		if (arr46.value.length > 20) {
			arr46.value.pop()
		}
		if (arr47.value.length > 20) {
			arr47.value.pop()
		}
		if (arr48.value.length > 20) {
			arr48.value.pop()
		}
		if (arr49.value.length > 20) {
			arr49.value.pop()
		}
		if (arr50.value.length > 20) {
			arr50.value.pop()
		}
		if (arr51.value.length > 20) {
			arr51.value.pop()
		}
		if (arr52.value.length > 20) {
			arr52.value.pop()
		}
		if (arr53.value.length > 20) {
			arr53.value.pop()
		}
		if (arr54.value.length > 20) {
			arr54.value.pop()
		}
		if (arr55.value.length > 20) {
			arr55.value.pop()
		}
		if (arr56.value.length > 20) {
			arr56.value.pop()
		}
		if (arr57.value.length > 20) {
			arr57.value.pop()
		}
		if (arr58.value.length > 20) {
			arr58.value.pop()
		}
		if (arr59.value.length > 20) {
			arr59.value.pop()
		}
		if (arr60.value.length > 20) {
			arr60.value.pop()
		}
		if (arr61.value.length > 20) {
			arr61.value.pop()
		}
		if (arr62.value.length > 20) {
			arr62.value.pop()
		}
		if (arr63.value.length > 20) {
			arr63.value.pop()
		}
		if (arr64.value.length > 20) {
			arr64.value.pop()
		}
		if (arr65.value.length > 20) {
			arr65.value.pop()
		}
		if (arr66.value.length > 20) {
			arr66.value.pop()
		}
		if (arr67.value.length > 20) {
			arr67.value.pop()
		}
		if (arr68.value.length > 20) {
			arr68.value.pop()
		}
		if (arr69.value.length > 20) {
			arr69.value.pop()
		}
		if (arr70.value.length > 20) {
			arr70.value.pop()
		}
		if (arr71.value.length > 20) {
			arr71.value.pop()
		}
		if (arr72.value.length > 20) {
			arr72.value.pop()
		}
		if (arr73.value.length > 20) {
			arr73.value.pop()
		}
		if (arr74.value.length > 20) {
			arr74.value.pop()
		}
		if (arr75.value.length > 20) {
			arr75.value.pop()
		}
		if (arr76.value.length > 20) {
			arr76.value.pop()
		}
		if (arr77.value.length > 20) {
			arr77.value.pop()
		}
		if (arr78.value.length > 20) {
			arr78.value.pop()
		}
		if (arr79.value.length > 20) {
			arr79.value.pop()
		}
		if (arr80.value.length > 20) {
			arr80.value.pop()
		}
		if (arr81.value.length > 20) {
			arr81.value.pop()
		}
		if (arr82.value.length > 20) {
			arr82.value.pop()
		}
		if (arr83.value.length > 20) {
			arr83.value.pop()
		}
		if (arr84.value.length > 20) {
			arr84.value.pop()
		}
		if (arr85.value.length > 20) {
			arr85.value.pop()
		}
		if (arr86.value.length > 20) {
			arr86.value.pop()
		}
		if (arr87.value.length > 20) {
			arr87.value.pop()
		}
		if (arr88.value.length > 20) {
			arr88.value.pop()
		}
		if (arr89.value.length > 20) {
			arr89.value.pop()
		}
		if (arr90.value.length > 20) {
			arr90.value.pop()
		}
		if (arr91.value.length > 20) {
			arr91.value.pop()
		}
		if (arr92.value.length > 20) {
			arr92.value.pop()
		}
		if (arr93.value.length > 20) {
			arr93.value.pop()
		}
		if (arr94.value.length > 20) {
			arr94.value.pop()
		}
		if (arr95.value.length > 20) {
			arr95.value.pop()
		}
		if (arr96.value.length > 20) {
			arr96.value.pop()
		}
		if (arr97.value.length > 20) {
			arr97.value.pop()
		}
		if (arr98.value.length > 20) {
			arr98.value.pop()
		}
		if (arr99.value.length > 20) {
			arr99.value.pop()
		}
		if (arr100.value.length > 20) {
			arr100.value.pop()
		}

		if (arr101.value.length > 20) {
			arr101.value.pop()
		}
		if (arr102.value.length > 20) {
			arr102.value.pop()
		}
		if (arr103.value.length > 20) {
			arr103.value.pop()
		}
		if (arr104.value.length > 20) {
			arr104.value.pop()
		}
		if (arr105.value.length > 20) {
			arr105.value.pop()
		}
		if (arr106.value.length > 20) {
			arr106.value.pop()
		}
		if (arr107.value.length > 20) {
			arr107.value.pop()
		}
		if (arr108.value.length > 20) {
			arr108.value.pop()
		}
		if (arr109.value.length > 20) {
			arr109.value.pop()
		}
		if (arr110.value.length > 20) {
			arr110.value.pop()
		}
		if (arr111.value.length > 20) {
			arr111.value.pop()
		}
		if (arr112.value.length > 20) {
			arr112.value.pop()
		}
		if (arr113.value.length > 20) {
			arr113.value.pop()
		}
		if (arr114.value.length > 20) {
			arr114.value.pop()
		}
		if (arr115.value.length > 20) {
			arr115.value.pop()
		}
		if (arr116.value.length > 20) {
			arr116.value.pop()
		}
		if (arr117.value.length > 20) {
			arr117.value.pop()
		}
		if (arr118.value.length > 20) {
			arr118.value.pop()
		}
		if (arr119.value.length > 20) {
			arr119.value.pop()
		}
		if (arr120.value.length > 20) {
			arr120.value.pop()
		}
		if (arr121.value.length > 20) {
			arr121.value.pop()
		}
		if (arr122.value.length > 20) {
			arr122.value.pop()
		}
		if (arr123.value.length > 20) {
			arr123.value.pop()
		}
		if (arr124.value.length > 20) {
			arr124.value.pop()
		}
		if (arr125.value.length > 20) {
			arr125.value.pop()
		}
		if (arr126.value.length > 20) {
			arr126.value.pop()
		}
		if (arr127.value.length > 20) {
			arr127.value.pop()
		}
		if (arr128.value.length > 20) {
			arr128.value.pop()
		}
		if (arr129.value.length > 20) {
			arr129.value.pop()
		}
		if (arr130.value.length > 20) {
			arr130.value.pop()
		}
		if (arr131.value.length > 20) {
			arr131.value.pop()
		}
		if (arr132.value.length > 20) {
			arr132.value.pop()
		}
		if (arr133.value.length > 20) {
			arr133.value.pop()
		}
		if (arr134.value.length > 20) {
			arr134.value.pop()
		}
		if (arr135.value.length > 20) {
			arr135.value.pop()
		}
		if (arr136.value.length > 20) {
			arr136.value.pop()
		}
		if (arr137.value.length > 20) {
			arr137.value.pop()
		}
		if (arr138.value.length > 20) {
			arr138.value.pop()
		}
		if (arr139.value.length > 20) {
			arr139.value.pop()
		}
		if (arr140.value.length > 20) {
			arr140.value.pop()
		}
		if (arr141.value.length > 20) {
			arr141.value.pop()
		}
		if (arr142.value.length > 20) {
			arr142.value.pop()
		}
		if (arr143.value.length > 20) {
			arr143.value.pop()
		}
		if (arr144.value.length > 20) {
			arr144.value.pop()
		}
		if (arr145.value.length > 20) {
			arr145.value.pop()
		}
		if (arr146.value.length > 20) {
			arr146.value.pop()
		}
		if (arr147.value.length > 20) {
			arr147.value.pop()
		}
		if (arr148.value.length > 20) {
			arr148.value.pop()
		}
		if (arr149.value.length > 20) {
			arr149.value.pop()
		}
		if (arr150.value.length > 20) {
			arr150.value.pop()
		}
		if (arr151.value.length > 20) {
			arr151.value.pop()
		}
		if (arr152.value.length > 20) {
			arr152.value.pop()
		}
		if (arr153.value.length > 20) {
			arr153.value.pop()
		}
		if (arr154.value.length > 20) {
			arr154.value.pop()
		}
		if (arr155.value.length > 20) {
			arr155.value.pop()
		}
		if (arr156.value.length > 20) {
			arr156.value.pop()
		}
		if (arr157.value.length > 20) {
			arr157.value.pop()
		}
		if (arr158.value.length > 20) {
			arr158.value.pop()
		}
		if (arr159.value.length > 20) {
			arr159.value.pop()
		}
		if (arr160.value.length > 20) {
			arr160.value.pop()
		}
		if (arr161.value.length > 20) {
			arr161.value.pop()
		}
		if (arr162.value.length > 20) {
			arr162.value.pop()
		}
		if (arr163.value.length > 20) {
			arr163.value.pop()
		}
		if (arr164.value.length > 20) {
			arr164.value.pop()
		}
		if (arr165.value.length > 20) {
			arr165.value.pop()
		}
		if (arr166.value.length > 20) {
			arr166.value.pop()
		}
		if (arr167.value.length > 20) {
			arr167.value.pop()
		}
		if (arr168.value.length > 20) {
			arr168.value.pop()
		}
		if (arr169.value.length > 20) {
			arr169.value.pop()
		}
		if (arr170.value.length > 20) {
			arr170.value.pop()
		}
		if (arr171.value.length > 20) {
			arr171.value.pop()
		}
		if (arr172.value.length > 20) {
			arr172.value.pop()
		}
		if (arr173.value.length > 20) {
			arr173.value.pop()
		}
		if (arr174.value.length > 20) {
			arr174.value.pop()
		}
		if (arr175.value.length > 20) {
			arr175.value.pop()
		}
		if (arr176.value.length > 20) {
			arr176.value.pop()
		}
		if (arr177.value.length > 20) {
			arr177.value.pop()
		}
		if (arr178.value.length > 20) {
			arr178.value.pop()
		}
		if (arr179.value.length > 20) {
			arr179.value.pop()
		}
		if (arr180.value.length > 20) {
			arr180.value.pop()
		}
		if (arr181.value.length > 20) {
			arr181.value.pop()
		}
		if (arr182.value.length > 20) {
			arr182.value.pop()
		}
		if (arr183.value.length > 20) {
			arr183.value.pop()
		}
		if (arr184.value.length > 20) {
			arr184.value.pop()
		}
		if (arr185.value.length > 20) {
			arr185.value.pop()
		}
		if (arr186.value.length > 20) {
			arr186.value.pop()
		}
		if (arr187.value.length > 20) {
			arr187.value.pop()
		}
		if (arr188.value.length > 20) {
			arr188.value.pop()
		}
		if (arr189.value.length > 20) {
			arr189.value.pop()
		}
		if (arr190.value.length > 20) {
			arr190.value.pop()
		}
		if (arr191.value.length > 20) {
			arr191.value.pop()
		}
		if (arr192.value.length > 20) {
			arr192.value.pop()
		}
		if (arr193.value.length > 20) {
			arr193.value.pop()
		}
		if (arr194.value.length > 20) {
			arr194.value.pop()
		}
		if (arr195.value.length > 20) {
			arr195.value.pop()
		}
		if (arr196.value.length > 20) {
			arr196.value.pop()
		}
		if (arr197.value.length > 20) {
			arr197.value.pop()
		}
		if (arr198.value.length > 20) {
			arr198.value.pop()
		}
		if (arr199.value.length > 20) {
			arr199.value.pop()
		}
		if (arr200.value.length > 20) {
			arr200.value.pop()
		}

		if (arrComparison.value.length > 20) {
			arrComparison.value.pop()
		}
		num.value = ''
		numType.value = ''
		setStorage()
		for(let i = 0; i < 200; i++) {
			findHandle(i)
		}
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
	arr32.value.shift()
	arr33.value.shift()
	arr34.value.shift()
	arr35.value.shift()
	arr36.value.shift()
	arr37.value.shift()
	arr38.value.shift()
	arr39.value.shift()
	arr40.value.shift()
	arr41.value.shift()
	arr42.value.shift()
	arr43.value.shift()
	arr44.value.shift()
	arr45.value.shift()
	arr46.value.shift()
	arr47.value.shift()
	arr48.value.shift()
	arr49.value.shift()
	arr50.value.shift()
	arr51.value.shift()
	arr52.value.shift()
	arr53.value.shift()
	arr54.value.shift()
	arr55.value.shift()
	arr56.value.shift()
	arr57.value.shift()
	arr58.value.shift()
	arr59.value.shift()
	arr60.value.shift()
	arr61.value.shift()
	arr62.value.shift()
	arr63.value.shift()
	arr64.value.shift()
	arr65.value.shift()
	arr66.value.shift()
	arr67.value.shift()
	arr68.value.shift()
	arr69.value.shift()
	arr70.value.shift()
	arr71.value.shift()
	arr72.value.shift()
	arr73.value.shift()
	arr74.value.shift()
	arr75.value.shift()
	arr76.value.shift()
	arr77.value.shift()
	arr78.value.shift()
	arr79.value.shift()
	arr80.value.shift()
	arr81.value.shift()
	arr82.value.shift()
	arr83.value.shift()
	arr84.value.shift()
	arr85.value.shift()
	arr86.value.shift()
	arr87.value.shift()
	arr88.value.shift()
	arr89.value.shift()
	arr90.value.shift()
	arr91.value.shift()
	arr92.value.shift()
	arr93.value.shift()
	arr94.value.shift()
	arr95.value.shift()
	arr96.value.shift()
	arr97.value.shift()
	arr98.value.shift()
	arr99.value.shift()
	arr100.value.shift()

	arr101.value.shift()
	arr102.value.shift()
	arr103.value.shift()
	arr104.value.shift()
	arr105.value.shift()
	arr106.value.shift()
	arr107.value.shift()
	arr108.value.shift()
	arr109.value.shift()
	arr110.value.shift()
	arr111.value.shift()
	arr112.value.shift()
	arr113.value.shift()
	arr114.value.shift()
	arr115.value.shift()
	arr116.value.shift()
	arr117.value.shift()
	arr118.value.shift()
	arr119.value.shift()
	arr120.value.shift()
	arr121.value.shift()
	arr122.value.shift()
	arr123.value.shift()
	arr124.value.shift()
	arr125.value.shift()
	arr126.value.shift()
	arr127.value.shift()
	arr128.value.shift()
	arr129.value.shift()
	arr130.value.shift()
	arr131.value.shift()
	arr132.value.shift()
	arr133.value.shift()
	arr134.value.shift()
	arr135.value.shift()
	arr136.value.shift()
	arr137.value.shift()
	arr138.value.shift()
	arr139.value.shift()
	arr140.value.shift()
	arr141.value.shift()
	arr142.value.shift()
	arr143.value.shift()
	arr144.value.shift()
	arr145.value.shift()
	arr146.value.shift()
	arr147.value.shift()
	arr148.value.shift()
	arr149.value.shift()
	arr150.value.shift()
	arr151.value.shift()
	arr152.value.shift()
	arr153.value.shift()
	arr154.value.shift()
	arr155.value.shift()
	arr156.value.shift()
	arr157.value.shift()
	arr158.value.shift()
	arr159.value.shift()
	arr160.value.shift()
	arr161.value.shift()
	arr162.value.shift()
	arr163.value.shift()
	arr164.value.shift()
	arr165.value.shift()
	arr166.value.shift()
	arr167.value.shift()
	arr168.value.shift()
	arr169.value.shift()
	arr170.value.shift()
	arr171.value.shift()
	arr172.value.shift()
	arr173.value.shift()
	arr174.value.shift()
	arr175.value.shift()
	arr176.value.shift()
	arr177.value.shift()
	arr178.value.shift()
	arr179.value.shift()
	arr180.value.shift()
	arr181.value.shift()
	arr182.value.shift()
	arr183.value.shift()
	arr184.value.shift()
	arr185.value.shift()
	arr186.value.shift()
	arr187.value.shift()
	arr188.value.shift()
	arr189.value.shift()
	arr190.value.shift()
	arr191.value.shift()
	arr192.value.shift()
	arr193.value.shift()
	arr194.value.shift()
	arr195.value.shift()
	arr196.value.shift()
	arr197.value.shift()
	arr198.value.shift()
	arr199.value.shift()
	arr200.value.shift()
	arrComparison.value.shift()
	setStorage()
	for(let i = 0; i < 200; i++) {
		findHandle(i)
	}
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
	uni.setStorageSync('arr32', JSON.stringify(arr32.value))
	uni.setStorageSync('arr33', JSON.stringify(arr33.value))
	uni.setStorageSync('arr34', JSON.stringify(arr34.value))
	uni.setStorageSync('arr35', JSON.stringify(arr35.value))
	uni.setStorageSync('arr36', JSON.stringify(arr36.value))
	uni.setStorageSync('arr37', JSON.stringify(arr37.value))
	uni.setStorageSync('arr38', JSON.stringify(arr38.value))
	uni.setStorageSync('arr39', JSON.stringify(arr39.value))
	uni.setStorageSync('arr40', JSON.stringify(arr40.value))
	uni.setStorageSync('arr41', JSON.stringify(arr41.value))
	uni.setStorageSync('arr42', JSON.stringify(arr42.value))
	uni.setStorageSync('arr43', JSON.stringify(arr43.value))
	uni.setStorageSync('arr44', JSON.stringify(arr44.value))
	uni.setStorageSync('arr45', JSON.stringify(arr45.value))
	uni.setStorageSync('arr46', JSON.stringify(arr46.value))
	uni.setStorageSync('arr47', JSON.stringify(arr47.value))
	uni.setStorageSync('arr48', JSON.stringify(arr48.value))
	uni.setStorageSync('arr49', JSON.stringify(arr49.value))
	uni.setStorageSync('arr50', JSON.stringify(arr50.value))
	uni.setStorageSync('arr51', JSON.stringify(arr51.value))
	uni.setStorageSync('arr52', JSON.stringify(arr52.value))
	uni.setStorageSync('arr53', JSON.stringify(arr53.value))
	uni.setStorageSync('arr54', JSON.stringify(arr54.value))
	uni.setStorageSync('arr55', JSON.stringify(arr55.value))
	uni.setStorageSync('arr56', JSON.stringify(arr56.value))
	uni.setStorageSync('arr57', JSON.stringify(arr57.value))
	uni.setStorageSync('arr58', JSON.stringify(arr58.value))
	uni.setStorageSync('arr59', JSON.stringify(arr59.value))
	uni.setStorageSync('arr60', JSON.stringify(arr60.value))
	uni.setStorageSync('arr61', JSON.stringify(arr61.value))
	uni.setStorageSync('arr62', JSON.stringify(arr62.value))
	uni.setStorageSync('arr63', JSON.stringify(arr63.value))
	uni.setStorageSync('arr64', JSON.stringify(arr64.value))
	uni.setStorageSync('arr65', JSON.stringify(arr65.value))
	uni.setStorageSync('arr66', JSON.stringify(arr66.value))
	uni.setStorageSync('arr67', JSON.stringify(arr67.value))
	uni.setStorageSync('arr68', JSON.stringify(arr68.value))
	uni.setStorageSync('arr69', JSON.stringify(arr69.value))
	uni.setStorageSync('arr70', JSON.stringify(arr70.value))
	uni.setStorageSync('arr71', JSON.stringify(arr71.value))
	uni.setStorageSync('arr72', JSON.stringify(arr72.value))
	uni.setStorageSync('arr73', JSON.stringify(arr73.value))
	uni.setStorageSync('arr74', JSON.stringify(arr74.value))
	uni.setStorageSync('arr75', JSON.stringify(arr75.value))
	uni.setStorageSync('arr76', JSON.stringify(arr76.value))
	uni.setStorageSync('arr77', JSON.stringify(arr77.value))
	uni.setStorageSync('arr78', JSON.stringify(arr78.value))
	uni.setStorageSync('arr79', JSON.stringify(arr79.value))
	uni.setStorageSync('arr80', JSON.stringify(arr80.value))
	uni.setStorageSync('arr81', JSON.stringify(arr81.value))
	uni.setStorageSync('arr82', JSON.stringify(arr82.value))
	uni.setStorageSync('arr83', JSON.stringify(arr83.value))
	uni.setStorageSync('arr84', JSON.stringify(arr84.value))
	uni.setStorageSync('arr85', JSON.stringify(arr85.value))
	uni.setStorageSync('arr86', JSON.stringify(arr86.value))
	uni.setStorageSync('arr87', JSON.stringify(arr87.value))
	uni.setStorageSync('arr88', JSON.stringify(arr88.value))
	uni.setStorageSync('arr89', JSON.stringify(arr89.value))
	uni.setStorageSync('arr90', JSON.stringify(arr90.value))
	uni.setStorageSync('arr91', JSON.stringify(arr91.value))
	uni.setStorageSync('arr92', JSON.stringify(arr92.value))
	uni.setStorageSync('arr93', JSON.stringify(arr93.value))
	uni.setStorageSync('arr94', JSON.stringify(arr94.value))
	uni.setStorageSync('arr95', JSON.stringify(arr95.value))
	uni.setStorageSync('arr96', JSON.stringify(arr96.value))
	uni.setStorageSync('arr97', JSON.stringify(arr97.value))
	uni.setStorageSync('arr98', JSON.stringify(arr98.value))
	uni.setStorageSync('arr99', JSON.stringify(arr99.value))
	uni.setStorageSync('arr100', JSON.stringify(arr100.value))

	uni.setStorageSync('arr100', JSON.stringify(arr101.value))
	uni.setStorageSync('arr102', JSON.stringify(arr102.value))
	uni.setStorageSync('arr103', JSON.stringify(arr103.value))
	uni.setStorageSync('arr104', JSON.stringify(arr104.value))
	uni.setStorageSync('arr105', JSON.stringify(arr105.value))
	uni.setStorageSync('arr106', JSON.stringify(arr106.value))
	uni.setStorageSync('arr107', JSON.stringify(arr107.value))
	uni.setStorageSync('arr108', JSON.stringify(arr108.value))
	uni.setStorageSync('arr109', JSON.stringify(arr109.value))
	uni.setStorageSync('arr110', JSON.stringify(arr110.value))
	uni.setStorageSync('arr111', JSON.stringify(arr111.value))
	uni.setStorageSync('arr112', JSON.stringify(arr112.value))
	uni.setStorageSync('arr113', JSON.stringify(arr113.value))
	uni.setStorageSync('arr114', JSON.stringify(arr114.value))
	uni.setStorageSync('arr115', JSON.stringify(arr115.value))
	uni.setStorageSync('arr116', JSON.stringify(arr116.value))
	uni.setStorageSync('arr117', JSON.stringify(arr117.value))
	uni.setStorageSync('arr118', JSON.stringify(arr118.value))
	uni.setStorageSync('arr119', JSON.stringify(arr119.value))
	uni.setStorageSync('arr120', JSON.stringify(arr120.value))
	uni.setStorageSync('arr121', JSON.stringify(arr121.value))
	uni.setStorageSync('arr122', JSON.stringify(arr122.value))
	uni.setStorageSync('arr123', JSON.stringify(arr123.value))
	uni.setStorageSync('arr124', JSON.stringify(arr124.value))
	uni.setStorageSync('arr125', JSON.stringify(arr125.value))
	uni.setStorageSync('arr126', JSON.stringify(arr126.value))
	uni.setStorageSync('arr127', JSON.stringify(arr127.value))
	uni.setStorageSync('arr128', JSON.stringify(arr128.value))
	uni.setStorageSync('arr129', JSON.stringify(arr129.value))
	uni.setStorageSync('arr130', JSON.stringify(arr130.value))
	uni.setStorageSync('arr131', JSON.stringify(arr131.value))
	uni.setStorageSync('arr132', JSON.stringify(arr132.value))
	uni.setStorageSync('arr133', JSON.stringify(arr133.value))
	uni.setStorageSync('arr134', JSON.stringify(arr134.value))
	uni.setStorageSync('arr135', JSON.stringify(arr135.value))
	uni.setStorageSync('arr136', JSON.stringify(arr136.value))
	uni.setStorageSync('arr137', JSON.stringify(arr137.value))
	uni.setStorageSync('arr138', JSON.stringify(arr138.value))
	uni.setStorageSync('arr139', JSON.stringify(arr139.value))
	uni.setStorageSync('arr140', JSON.stringify(arr140.value))
	uni.setStorageSync('arr141', JSON.stringify(arr141.value))
	uni.setStorageSync('arr142', JSON.stringify(arr142.value))
	uni.setStorageSync('arr143', JSON.stringify(arr143.value))
	uni.setStorageSync('arr144', JSON.stringify(arr144.value))
	uni.setStorageSync('arr145', JSON.stringify(arr145.value))
	uni.setStorageSync('arr146', JSON.stringify(arr146.value))
	uni.setStorageSync('arr147', JSON.stringify(arr147.value))
	uni.setStorageSync('arr148', JSON.stringify(arr148.value))
	uni.setStorageSync('arr149', JSON.stringify(arr149.value))
	uni.setStorageSync('arr150', JSON.stringify(arr150.value))
	uni.setStorageSync('arr151', JSON.stringify(arr151.value))
	uni.setStorageSync('arr152', JSON.stringify(arr152.value))
	uni.setStorageSync('arr153', JSON.stringify(arr153.value))
	uni.setStorageSync('arr154', JSON.stringify(arr154.value))
	uni.setStorageSync('arr155', JSON.stringify(arr155.value))
	uni.setStorageSync('arr156', JSON.stringify(arr156.value))
	uni.setStorageSync('arr157', JSON.stringify(arr157.value))
	uni.setStorageSync('arr158', JSON.stringify(arr158.value))
	uni.setStorageSync('arr159', JSON.stringify(arr159.value))
	uni.setStorageSync('arr160', JSON.stringify(arr160.value))
	uni.setStorageSync('arr161', JSON.stringify(arr161.value))
	uni.setStorageSync('arr162', JSON.stringify(arr162.value))
	uni.setStorageSync('arr163', JSON.stringify(arr163.value))
	uni.setStorageSync('arr164', JSON.stringify(arr164.value))
	uni.setStorageSync('arr165', JSON.stringify(arr165.value))
	uni.setStorageSync('arr166', JSON.stringify(arr166.value))
	uni.setStorageSync('arr167', JSON.stringify(arr167.value))
	uni.setStorageSync('arr168', JSON.stringify(arr168.value))
	uni.setStorageSync('arr169', JSON.stringify(arr169.value))
	uni.setStorageSync('arr170', JSON.stringify(arr170.value))
	uni.setStorageSync('arr171', JSON.stringify(arr171.value))
	uni.setStorageSync('arr172', JSON.stringify(arr172.value))
	uni.setStorageSync('arr173', JSON.stringify(arr173.value))
	uni.setStorageSync('arr174', JSON.stringify(arr174.value))
	uni.setStorageSync('arr175', JSON.stringify(arr175.value))
	uni.setStorageSync('arr176', JSON.stringify(arr176.value))
	uni.setStorageSync('arr177', JSON.stringify(arr177.value))
	uni.setStorageSync('arr178', JSON.stringify(arr178.value))
	uni.setStorageSync('arr179', JSON.stringify(arr179.value))
	uni.setStorageSync('arr180', JSON.stringify(arr180.value))
	uni.setStorageSync('arr181', JSON.stringify(arr181.value))
	uni.setStorageSync('arr182', JSON.stringify(arr182.value))
	uni.setStorageSync('arr183', JSON.stringify(arr183.value))
	uni.setStorageSync('arr184', JSON.stringify(arr184.value))
	uni.setStorageSync('arr185', JSON.stringify(arr185.value))
	uni.setStorageSync('arr186', JSON.stringify(arr186.value))
	uni.setStorageSync('arr187', JSON.stringify(arr187.value))
	uni.setStorageSync('arr188', JSON.stringify(arr188.value))
	uni.setStorageSync('arr189', JSON.stringify(arr189.value))
	uni.setStorageSync('arr190', JSON.stringify(arr190.value))
	uni.setStorageSync('arr191', JSON.stringify(arr191.value))
	uni.setStorageSync('arr192', JSON.stringify(arr192.value))
	uni.setStorageSync('arr193', JSON.stringify(arr193.value))
	uni.setStorageSync('arr194', JSON.stringify(arr194.value))
	uni.setStorageSync('arr195', JSON.stringify(arr195.value))
	uni.setStorageSync('arr196', JSON.stringify(arr196.value))
	uni.setStorageSync('arr197', JSON.stringify(arr197.value))
	uni.setStorageSync('arr198', JSON.stringify(arr198.value))
	uni.setStorageSync('arr199', JSON.stringify(arr199.value))
	uni.setStorageSync('arr200', JSON.stringify(arr200.value))
	uni.setStorageSync('arrComparison', JSON.stringify(arrComparison.value))
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
		arr32.value = JSON.parse(uni.getStorageSync('arr32'))
		arr33.value = JSON.parse(uni.getStorageSync('arr33'))
		arr34.value = JSON.parse(uni.getStorageSync('arr34'))
		arr35.value = JSON.parse(uni.getStorageSync('arr35'))
		arr36.value = JSON.parse(uni.getStorageSync('arr36'))
		arr37.value = JSON.parse(uni.getStorageSync('arr37'))
		arr38.value = JSON.parse(uni.getStorageSync('arr38'))
		arr39.value = JSON.parse(uni.getStorageSync('arr39'))
		arr40.value = JSON.parse(uni.getStorageSync('arr40'))
		arr41.value = JSON.parse(uni.getStorageSync('arr41'))
		arr42.value = JSON.parse(uni.getStorageSync('arr42'))
		arr43.value = JSON.parse(uni.getStorageSync('arr43'))
		arr44.value = JSON.parse(uni.getStorageSync('arr44'))
		arr45.value = JSON.parse(uni.getStorageSync('arr45'))
		arr46.value = JSON.parse(uni.getStorageSync('arr46'))
		arr47.value = JSON.parse(uni.getStorageSync('arr47'))
		arr48.value = JSON.parse(uni.getStorageSync('arr48'))
		arr49.value = JSON.parse(uni.getStorageSync('arr49'))
		arr50.value = JSON.parse(uni.getStorageSync('arr50'))
		arr51.value = JSON.parse(uni.getStorageSync('arr51'))
		arr52.value = JSON.parse(uni.getStorageSync('arr52'))
		arr53.value = JSON.parse(uni.getStorageSync('arr53'))
		arr54.value = JSON.parse(uni.getStorageSync('arr54'))
		arr55.value = JSON.parse(uni.getStorageSync('arr55'))
		arr56.value = JSON.parse(uni.getStorageSync('arr56'))
		arr57.value = JSON.parse(uni.getStorageSync('arr57'))
		arr58.value = JSON.parse(uni.getStorageSync('arr58'))
		arr59.value = JSON.parse(uni.getStorageSync('arr59'))
		arr60.value = JSON.parse(uni.getStorageSync('arr60'))
		arr61.value = JSON.parse(uni.getStorageSync('arr61'))
		arr62.value = JSON.parse(uni.getStorageSync('arr62'))
		arr63.value = JSON.parse(uni.getStorageSync('arr63'))
		arr64.value = JSON.parse(uni.getStorageSync('arr64'))
		arr65.value = JSON.parse(uni.getStorageSync('arr65'))
		arr66.value = JSON.parse(uni.getStorageSync('arr66'))
		arr67.value = JSON.parse(uni.getStorageSync('arr67'))
		arr68.value = JSON.parse(uni.getStorageSync('arr68'))
		arr69.value = JSON.parse(uni.getStorageSync('arr69'))
		arr70.value = JSON.parse(uni.getStorageSync('arr70'))
		arr71.value = JSON.parse(uni.getStorageSync('arr71'))
		arr72.value = JSON.parse(uni.getStorageSync('arr72'))
		arr73.value = JSON.parse(uni.getStorageSync('arr73'))
		arr74.value = JSON.parse(uni.getStorageSync('arr74'))
		arr75.value = JSON.parse(uni.getStorageSync('arr75'))
		arr76.value = JSON.parse(uni.getStorageSync('arr76'))
		arr77.value = JSON.parse(uni.getStorageSync('arr77'))
		arr78.value = JSON.parse(uni.getStorageSync('arr78'))
		arr79.value = JSON.parse(uni.getStorageSync('arr79'))
		arr80.value = JSON.parse(uni.getStorageSync('arr80'))
		arr81.value = JSON.parse(uni.getStorageSync('arr81'))
		arr82.value = JSON.parse(uni.getStorageSync('arr82'))
		arr83.value = JSON.parse(uni.getStorageSync('arr83'))
		arr84.value = JSON.parse(uni.getStorageSync('arr84'))
		arr85.value = JSON.parse(uni.getStorageSync('arr85'))
		arr86.value = JSON.parse(uni.getStorageSync('arr86'))
		arr87.value = JSON.parse(uni.getStorageSync('arr87'))
		arr88.value = JSON.parse(uni.getStorageSync('arr88'))
		arr89.value = JSON.parse(uni.getStorageSync('arr89'))
		arr90.value = JSON.parse(uni.getStorageSync('arr90'))
		arr91.value = JSON.parse(uni.getStorageSync('arr91'))
		arr92.value = JSON.parse(uni.getStorageSync('arr92'))
		arr93.value = JSON.parse(uni.getStorageSync('arr93'))
		arr94.value = JSON.parse(uni.getStorageSync('arr94'))
		arr95.value = JSON.parse(uni.getStorageSync('arr95'))
		arr96.value = JSON.parse(uni.getStorageSync('arr96'))
		arr97.value = JSON.parse(uni.getStorageSync('arr97'))
		arr98.value = JSON.parse(uni.getStorageSync('arr98'))
		arr99.value = JSON.parse(uni.getStorageSync('arr99'))
		arr100.value = JSON.parse(uni.getStorageSync('arr100'))

		arr101.value = JSON.parse(uni.getStorageSync('arr101'))
		arr102.value = JSON.parse(uni.getStorageSync('arr102'))
		arr103.value = JSON.parse(uni.getStorageSync('arr103'))
		arr104.value = JSON.parse(uni.getStorageSync('arr104'))
		arr105.value = JSON.parse(uni.getStorageSync('arr105'))
		arr106.value = JSON.parse(uni.getStorageSync('arr106'))
		arr107.value = JSON.parse(uni.getStorageSync('arr107'))
		arr108.value = JSON.parse(uni.getStorageSync('arr108'))
		arr109.value = JSON.parse(uni.getStorageSync('arr109'))
		arr110.value = JSON.parse(uni.getStorageSync('arr110'))
		arr111.value = JSON.parse(uni.getStorageSync('arr111'))
		arr112.value = JSON.parse(uni.getStorageSync('arr112'))
		arr113.value = JSON.parse(uni.getStorageSync('arr113'))
		arr114.value = JSON.parse(uni.getStorageSync('arr114'))
		arr115.value = JSON.parse(uni.getStorageSync('arr115'))
		arr116.value = JSON.parse(uni.getStorageSync('arr116'))
		arr117.value = JSON.parse(uni.getStorageSync('arr117'))
		arr118.value = JSON.parse(uni.getStorageSync('arr118'))
		arr119.value = JSON.parse(uni.getStorageSync('arr119'))
		arr120.value = JSON.parse(uni.getStorageSync('arr120'))
		arr121.value = JSON.parse(uni.getStorageSync('arr121'))
		arr122.value = JSON.parse(uni.getStorageSync('arr122'))
		arr123.value = JSON.parse(uni.getStorageSync('arr123'))
		arr124.value = JSON.parse(uni.getStorageSync('arr124'))
		arr125.value = JSON.parse(uni.getStorageSync('arr125'))
		arr126.value = JSON.parse(uni.getStorageSync('arr126'))
		arr127.value = JSON.parse(uni.getStorageSync('arr127'))
		arr128.value = JSON.parse(uni.getStorageSync('arr128'))
		arr129.value = JSON.parse(uni.getStorageSync('arr129'))
		arr130.value = JSON.parse(uni.getStorageSync('arr130'))
		arr131.value = JSON.parse(uni.getStorageSync('arr131'))
		arr132.value = JSON.parse(uni.getStorageSync('arr132'))
		arr133.value = JSON.parse(uni.getStorageSync('arr133'))
		arr134.value = JSON.parse(uni.getStorageSync('arr134'))
		arr135.value = JSON.parse(uni.getStorageSync('arr135'))
		arr136.value = JSON.parse(uni.getStorageSync('arr136'))
		arr137.value = JSON.parse(uni.getStorageSync('arr137'))
		arr138.value = JSON.parse(uni.getStorageSync('arr138'))
		arr139.value = JSON.parse(uni.getStorageSync('arr139'))
		arr140.value = JSON.parse(uni.getStorageSync('arr140'))
		arr141.value = JSON.parse(uni.getStorageSync('arr141'))
		arr142.value = JSON.parse(uni.getStorageSync('arr142'))
		arr143.value = JSON.parse(uni.getStorageSync('arr143'))
		arr144.value = JSON.parse(uni.getStorageSync('arr144'))
		arr145.value = JSON.parse(uni.getStorageSync('arr145'))
		arr146.value = JSON.parse(uni.getStorageSync('arr146'))
		arr147.value = JSON.parse(uni.getStorageSync('arr147'))
		arr148.value = JSON.parse(uni.getStorageSync('arr148'))
		arr149.value = JSON.parse(uni.getStorageSync('arr149'))
		arr150.value = JSON.parse(uni.getStorageSync('arr150'))
		arr151.value = JSON.parse(uni.getStorageSync('arr151'))
		arr152.value = JSON.parse(uni.getStorageSync('arr152'))
		arr153.value = JSON.parse(uni.getStorageSync('arr153'))
		arr154.value = JSON.parse(uni.getStorageSync('arr154'))
		arr155.value = JSON.parse(uni.getStorageSync('arr155'))
		arr156.value = JSON.parse(uni.getStorageSync('arr156'))
		arr157.value = JSON.parse(uni.getStorageSync('arr157'))
		arr158.value = JSON.parse(uni.getStorageSync('arr158'))
		arr159.value = JSON.parse(uni.getStorageSync('arr159'))
		arr160.value = JSON.parse(uni.getStorageSync('arr160'))
		arr161.value = JSON.parse(uni.getStorageSync('arr161'))
		arr162.value = JSON.parse(uni.getStorageSync('arr162'))
		arr163.value = JSON.parse(uni.getStorageSync('arr163'))
		arr164.value = JSON.parse(uni.getStorageSync('arr164'))
		arr165.value = JSON.parse(uni.getStorageSync('arr165'))
		arr166.value = JSON.parse(uni.getStorageSync('arr166'))
		arr167.value = JSON.parse(uni.getStorageSync('arr167'))
		arr168.value = JSON.parse(uni.getStorageSync('arr168'))
		arr169.value = JSON.parse(uni.getStorageSync('arr169'))
		arr170.value = JSON.parse(uni.getStorageSync('arr170'))
		arr171.value = JSON.parse(uni.getStorageSync('arr171'))
		arr172.value = JSON.parse(uni.getStorageSync('arr172'))
		arr173.value = JSON.parse(uni.getStorageSync('arr173'))
		arr174.value = JSON.parse(uni.getStorageSync('arr174'))
		arr175.value = JSON.parse(uni.getStorageSync('arr175'))
		arr176.value = JSON.parse(uni.getStorageSync('arr176'))
		arr177.value = JSON.parse(uni.getStorageSync('arr177'))
		arr178.value = JSON.parse(uni.getStorageSync('arr178'))
		arr179.value = JSON.parse(uni.getStorageSync('arr179'))
		arr180.value = JSON.parse(uni.getStorageSync('arr180'))
		arr181.value = JSON.parse(uni.getStorageSync('arr181'))
		arr182.value = JSON.parse(uni.getStorageSync('arr182'))
		arr183.value = JSON.parse(uni.getStorageSync('arr183'))
		arr184.value = JSON.parse(uni.getStorageSync('arr184'))
		arr185.value = JSON.parse(uni.getStorageSync('arr185'))
		arr186.value = JSON.parse(uni.getStorageSync('arr186'))
		arr187.value = JSON.parse(uni.getStorageSync('arr187'))
		arr188.value = JSON.parse(uni.getStorageSync('arr188'))
		arr189.value = JSON.parse(uni.getStorageSync('arr189'))
		arr190.value = JSON.parse(uni.getStorageSync('arr190'))
		arr191.value = JSON.parse(uni.getStorageSync('arr191'))
		arr192.value = JSON.parse(uni.getStorageSync('arr192'))
		arr193.value = JSON.parse(uni.getStorageSync('arr193'))
		arr194.value = JSON.parse(uni.getStorageSync('arr194'))
		arr195.value = JSON.parse(uni.getStorageSync('arr195'))
		arr196.value = JSON.parse(uni.getStorageSync('arr196'))
		arr197.value = JSON.parse(uni.getStorageSync('arr197'))
		arr198.value = JSON.parse(uni.getStorageSync('arr198'))
		arr199.value = JSON.parse(uni.getStorageSync('arr199'))
		arr200.value = JSON.parse(uni.getStorageSync('arr200'))
		arrComparison.value = JSON.parse(uni.getStorageSync('arrComparison'))
	}
}

function setDataHandle(arrList, rightNum, wrongNum) {
	let arr = JSON.parse(JSON.stringify(arrList.value)).reverse().map(item => {
		return {
			num: item,
			isRightPrev: true
		}
	})
	let arrData = JSON.parse(JSON.stringify(arrComparison.value)).reverse()
	rightNum.value = 0
	wrongNum.value = 0
	arr.forEach((item, ind) => {
		if (item['num'] == arrData[ind]) {
			item['isRightPrev'] = true
			wrongNum.value = 0
			if (ind > 0) {
				if (arr[ind - 1]['isRightPrev']) {
					rightNum.value ++
				} else {
					rightNum.value = 1
				}
			} else {
				rightNum.value = 1
			}
		} else {
			item['isRightPrev'] = false
			rightNum.value = 0
			if (ind > 0) {
				if (arr[ind - 1]['isRightPrev']) {
					wrongNum.value = 1
				} else {
					wrongNum.value ++
				}
			} else {
				wrongNum.value ++
			}
		}
	})
}

function findHandle(index) {
	if (index == 0) {
		setDataHandle(arr1, rightNum1, wrongNum1)
	} else if(index == 1) {
		setDataHandle(arr2, rightNum2, wrongNum2)
	} else if (index == 2) {
		setDataHandle(arr3, rightNum3, wrongNum3)
	} else if (index == 3) {
		setDataHandle(arr4, rightNum4, wrongNum4)
	} else if (index == 4) {
		setDataHandle(arr5, rightNum5, wrongNum5)
	} else if (index == 5) {
		setDataHandle(arr6, rightNum6, wrongNum6)
	} else if (index == 6) {
		setDataHandle(arr7, rightNum7, wrongNum7)
	} else if (index == 7) {
		setDataHandle(arr8, rightNum8, wrongNum8)
	} else if (index == 8) {
		setDataHandle(arr9, rightNum9, wrongNum9)
	} else if (index == 9) {
		setDataHandle(arr10, rightNum10, wrongNum10)
	} else if (index == 10) {
		setDataHandle(arr11, rightNum11, wrongNum11)
	} else if (index == 11) {
		setDataHandle(arr12, rightNum12, wrongNum12)
	} else if (index == 12) {
		setDataHandle(arr13, rightNum13, wrongNum13)
	} else if (index == 13) {
		setDataHandle(arr14, rightNum14, wrongNum14)
	} else if (index == 14) {
		setDataHandle(arr15, rightNum15, wrongNum15)
	} else if (index == 15) {
		setDataHandle(arr16, rightNum16, wrongNum16)
	} else if (index == 16) {
		setDataHandle(arr17, rightNum17, wrongNum17)
	} else if (index == 17) {
		setDataHandle(arr18, rightNum18, wrongNum18)
	} else if (index == 18) {
		setDataHandle(arr19, rightNum19, wrongNum19)
	} else if (index == 19) {
		setDataHandle(arr20, rightNum20, wrongNum20)
	} else if (index == 20) {
		setDataHandle(arr21, rightNum21, wrongNum21)
	} else if (index == 21) {
		setDataHandle(arr22, rightNum22, wrongNum22)
	} else if (index == 22) {
		setDataHandle(arr23, rightNum23, wrongNum23)
	} else if (index == 23) {
		setDataHandle(arr24, rightNum24, wrongNum24)
	} else if (index == 24) {
		setDataHandle(arr25, rightNum25, wrongNum25)
	} else if (index == 25) {
		setDataHandle(arr26, rightNum26, wrongNum26)
	} else if (index == 26) {
		setDataHandle(arr27, rightNum27, wrongNum27)
	} else if (index == 27) {
		setDataHandle(arr28, rightNum28, wrongNum28)
	} else if (index == 28) {
		setDataHandle(arr29, rightNum29, wrongNum29)
	} else if (index == 29) {
		setDataHandle(arr30, rightNum30, wrongNum30)
	} else if (index == 30) {
		setDataHandle(arr31, rightNum31, wrongNum31)
	} else if (index == 31) {
		setDataHandle(arr32, rightNum32, wrongNum32)
	} else if (index == 32) {
		setDataHandle(arr33, rightNum33, wrongNum33)
	} else if (index == 33) {
		setDataHandle(arr34, rightNum34, wrongNum34)
	} else if (index == 34) {
		setDataHandle(arr35, rightNum35, wrongNum35)
	} else if (index == 35) {
		setDataHandle(arr36, rightNum36, wrongNum36)
	} else if (index == 36) {
		setDataHandle(arr37, rightNum37, wrongNum37)
	} else if (index == 37) {
		setDataHandle(arr38, rightNum38, wrongNum38)
	} else if (index == 38) {
		setDataHandle(arr39, rightNum39, wrongNum39)
	} else if (index == 39) {
		setDataHandle(arr40, rightNum40, wrongNum40)
	} else if (index == 40) {
		setDataHandle(arr41, rightNum41, wrongNum41)
	} else if (index == 41) {
		setDataHandle(arr42, rightNum42, wrongNum42)
	} else if (index == 42) {
		setDataHandle(arr43, rightNum43, wrongNum43)
	} else if (index == 43) {
		setDataHandle(arr44, rightNum44, wrongNum44)
	} else if (index == 44) {
		setDataHandle(arr45, rightNum45, wrongNum45)
	} else if (index == 45) {
		setDataHandle(arr46, rightNum46, wrongNum46)
	} else if (index == 46) {
		setDataHandle(arr47, rightNum47, wrongNum47)
	} else if (index == 47) {
		setDataHandle(arr48, rightNum48, wrongNum48)
	} else if (index == 48) {
		setDataHandle(arr49, rightNum49, wrongNum49)
	} else if (index == 49) {
		setDataHandle(arr50, rightNum50, wrongNum50)
	} else if (index == 50) {
		setDataHandle(arr51, rightNum51, wrongNum51)
	} else if (index == 51) {
		setDataHandle(arr52, rightNum52, wrongNum52)
	} else if (index == 52) {
		setDataHandle(arr53, rightNum53, wrongNum53)
	} else if (index == 53) {
		setDataHandle(arr54, rightNum54, wrongNum54)
	} else if (index == 54) {
		setDataHandle(arr55, rightNum55, wrongNum55)
	} else if (index == 55) {
		setDataHandle(arr56, rightNum56, wrongNum56)
	} else if (index == 56) {
		setDataHandle(arr57, rightNum57, wrongNum57)
	} else if (index == 57) {
		setDataHandle(arr58, rightNum58, wrongNum58)
	} else if (index == 58) {
		setDataHandle(arr59, rightNum59, wrongNum59)
	} else if (index == 59) {
		setDataHandle(arr60, rightNum60, wrongNum60)
	} else if (index == 60) {
		setDataHandle(arr61, rightNum61, wrongNum61)
	} else if (index == 61) {
		setDataHandle(arr62, rightNum62, wrongNum62)
	} else if (index == 62) {
		setDataHandle(arr63, rightNum63, wrongNum63)
	} else if (index == 63) {
		setDataHandle(arr64, rightNum64, wrongNum64)
	} else if (index == 64) {
		setDataHandle(arr65, rightNum65, wrongNum65)
	} else if (index == 65) {
		setDataHandle(arr66, rightNum66, wrongNum66)
	} else if (index == 66) {
		setDataHandle(arr67, rightNum67, wrongNum67)
	} else if (index == 67) {
		setDataHandle(arr68, rightNum68, wrongNum68)
	} else if (index == 68) {
		setDataHandle(arr69, rightNum69, wrongNum69)
	} else if (index == 69) {
		setDataHandle(arr70, rightNum70, wrongNum70)
	} else if (index == 70) {
		setDataHandle(arr71, rightNum71, wrongNum71)
	} else if (index == 71) {
		setDataHandle(arr72, rightNum72, wrongNum72)
	} else if (index == 72) {
		setDataHandle(arr73, rightNum73, wrongNum73)
	} else if (index == 73) {
		setDataHandle(arr74, rightNum74, wrongNum74)
	} else if (index == 74) {
		setDataHandle(arr75, rightNum75, wrongNum75)
	} else if (index == 75) {
		setDataHandle(arr76, rightNum76, wrongNum76)
	} else if (index == 76) {
		setDataHandle(arr77, rightNum77, wrongNum77)
	} else if (index == 77) {
		setDataHandle(arr78, rightNum78, wrongNum78)
	} else if (index == 78) {
		setDataHandle(arr79, rightNum79, wrongNum79)
	} else if (index == 79) {
		setDataHandle(arr80, rightNum80, wrongNum80)
	} else if (index == 80) {
		setDataHandle(arr81, rightNum81, wrongNum81)
	} else if (index == 81) {
		setDataHandle(arr82, rightNum82, wrongNum82)
	} else if (index == 82) {
		setDataHandle(arr83, rightNum83, wrongNum83)
	} else if (index == 83) {
		setDataHandle(arr84, rightNum84, wrongNum84)
	} else if (index == 84) {
		setDataHandle(arr85, rightNum85, wrongNum85)
	} else if (index == 85) {
		setDataHandle(arr86, rightNum86, wrongNum86)
	} else if (index == 86) {
		setDataHandle(arr87, rightNum87, wrongNum87)
	} else if (index == 87) {
		setDataHandle(arr88, rightNum88, wrongNum88)
	} else if (index == 88) {
		setDataHandle(arr89, rightNum89, wrongNum89)
	} else if (index == 89) {
		setDataHandle(arr90, rightNum90, wrongNum90)
	} else if (index == 90) {
		setDataHandle(arr91, rightNum91, wrongNum91)
	} else if (index == 91) {
		setDataHandle(arr92, rightNum92, wrongNum92)
	} else if (index == 92) {
		setDataHandle(arr93, rightNum93, wrongNum93)
	} else if (index == 93) {
		setDataHandle(arr94, rightNum94, wrongNum94)
	} else if (index == 94) {
		setDataHandle(arr95, rightNum95, wrongNum95)
	} else if (index == 95) {
		setDataHandle(arr96, rightNum96, wrongNum96)
	} else if (index == 96) {
		setDataHandle(arr97, rightNum97, wrongNum97)
	} else if (index == 97) {
		setDataHandle(arr98, rightNum98, wrongNum98)
	} else if (index == 98) {
		setDataHandle(arr99, rightNum99, wrongNum99)
	} else if (index == 99) {
		setDataHandle(arr100, rightNum100, wrongNum100)
	} if (index == 100) {
		setDataHandle(arr1, rightNum1, wrongNum1)
	} else if(index == 101) {
		setDataHandle(arr102, rightNum102, wrongNum102)
	} else if (index == 102) {
		setDataHandle(arr103, rightNum103, wrongNum103)
	} else if (index == 103) {
		setDataHandle(arr104, rightNum104, wrongNum104)
	} else if (index == 104) {
		setDataHandle(arr105, rightNum105, wrongNum105)
	} else if (index == 105) {
		setDataHandle(arr106, rightNum106, wrongNum106)
	} else if (index == 106) {
		setDataHandle(arr107, rightNum107, wrongNum107)
	} else if (index == 107) {
		setDataHandle(arr108, rightNum108, wrongNum108)
	} else if (index == 108) {
		setDataHandle(arr109, rightNum109, wrongNum109)
	} else if (index == 109) {
		setDataHandle(arr110, rightNum110, wrongNum110)
	} else if (index == 110) {
		setDataHandle(arr111, rightNum111, wrongNum111)
	} else if (index == 111) {
		setDataHandle(arr112, rightNum112, wrongNum112)
	} else if (index == 112) {
		setDataHandle(arr113, rightNum113, wrongNum113)
	} else if (index == 113) {
		setDataHandle(arr114, rightNum114, wrongNum114)
	} else if (index == 114) {
		setDataHandle(arr115, rightNum115, wrongNum115)
	} else if (index == 115) {
		setDataHandle(arr116, rightNum116, wrongNum116)
	} else if (index == 116) {
		setDataHandle(arr117, rightNum117, wrongNum117)
	} else if (index == 117) {
		setDataHandle(arr118, rightNum118, wrongNum118)
	} else if (index == 118) {
		setDataHandle(arr119, rightNum119, wrongNum119)
	} else if (index == 119) {
		setDataHandle(arr120, rightNum120, wrongNum120)
	} else if (index == 120) {
		setDataHandle(arr121, rightNum121, wrongNum121)
	} else if (index == 121) {
		setDataHandle(arr122, rightNum122, wrongNum122)
	} else if (index == 122) {
		setDataHandle(arr123, rightNum123, wrongNum123)
	} else if (index == 123) {
		setDataHandle(arr124, rightNum124, wrongNum124)
	} else if (index == 124) {
		setDataHandle(arr125, rightNum125, wrongNum125)
	} else if (index == 125) {
		setDataHandle(arr126, rightNum126, wrongNum126)
	} else if (index == 126) {
		setDataHandle(arr127, rightNum127, wrongNum127)
	} else if (index == 127) {
		setDataHandle(arr128, rightNum128, wrongNum128)
	} else if (index == 128) {
		setDataHandle(arr129, rightNum129, wrongNum129)
	} else if (index == 129) {
		setDataHandle(arr130, rightNum130, wrongNum130)
	} else if (index == 130) {
		setDataHandle(arr131, rightNum131, wrongNum131)
	} else if (index == 131) {
		setDataHandle(arr132, rightNum132, wrongNum132)
	} else if (index == 132) {
		setDataHandle(arr133, rightNum133, wrongNum133)
	} else if (index == 133) {
		setDataHandle(arr134, rightNum134, wrongNum134)
	} else if (index == 134) {
		setDataHandle(arr135, rightNum135, wrongNum135)
	} else if (index == 135) {
		setDataHandle(arr136, rightNum136, wrongNum136)
	} else if (index == 136) {
		setDataHandle(arr137, rightNum137, wrongNum137)
	} else if (index == 137) {
		setDataHandle(arr138, rightNum138, wrongNum138)
	} else if (index == 138) {
		setDataHandle(arr139, rightNum139, wrongNum139)
	} else if (index == 139) {
		setDataHandle(arr140, rightNum140, wrongNum140)
	} else if (index == 140) {
		setDataHandle(arr141, rightNum141, wrongNum141)
	} else if (index == 141) {
		setDataHandle(arr142, rightNum142, wrongNum142)
	} else if (index == 142) {
		setDataHandle(arr143, rightNum143, wrongNum143)
	} else if (index == 143) {
		setDataHandle(arr144, rightNum144, wrongNum144)
	} else if (index == 144) {
		setDataHandle(arr145, rightNum145, wrongNum145)
	} else if (index == 145) {
		setDataHandle(arr146, rightNum146, wrongNum146)
	} else if (index == 146) {
		setDataHandle(arr147, rightNum147, wrongNum147)
	} else if (index == 147) {
		setDataHandle(arr148, rightNum148, wrongNum148)
	} else if (index == 148) {
		setDataHandle(arr149, rightNum149, wrongNum149)
	} else if (index == 149) {
		setDataHandle(arr150, rightNum150, wrongNum150)
	} else if (index == 150) {
		setDataHandle(arr151, rightNum151, wrongNum151)
	} else if (index == 151) {
		setDataHandle(arr152, rightNum152, wrongNum152)
	} else if (index == 152) {
		setDataHandle(arr153, rightNum153, wrongNum153)
	} else if (index == 153) {
		setDataHandle(arr154, rightNum154, wrongNum154)
	} else if (index == 154) {
		setDataHandle(arr155, rightNum155, wrongNum155)
	} else if (index == 155) {
		setDataHandle(arr156, rightNum156, wrongNum156)
	} else if (index == 156) {
		setDataHandle(arr157, rightNum157, wrongNum157)
	} else if (index == 157) {
		setDataHandle(arr158, rightNum158, wrongNum158)
	} else if (index == 158) {
		setDataHandle(arr159, rightNum159, wrongNum159)
	} else if (index == 159) {
		setDataHandle(arr160, rightNum160, wrongNum160)
	} else if (index == 160) {
		setDataHandle(arr161, rightNum161, wrongNum161)
	} else if (index == 161) {
		setDataHandle(arr162, rightNum162, wrongNum162)
	} else if (index == 162) {
		setDataHandle(arr163, rightNum163, wrongNum163)
	} else if (index == 163) {
		setDataHandle(arr164, rightNum164, wrongNum164)
	} else if (index == 164) {
		setDataHandle(arr165, rightNum165, wrongNum165)
	} else if (index == 165) {
		setDataHandle(arr166, rightNum166, wrongNum166)
	} else if (index == 166) {
		setDataHandle(arr167, rightNum167, wrongNum167)
	} else if (index == 167) {
		setDataHandle(arr168, rightNum168, wrongNum168)
	} else if (index == 168) {
		setDataHandle(arr169, rightNum169, wrongNum169)
	} else if (index == 169) {
		setDataHandle(arr170, rightNum170, wrongNum170)
	} else if (index == 170) {
		setDataHandle(arr171, rightNum171, wrongNum171)
	} else if (index == 171) {
		setDataHandle(arr172, rightNum172, wrongNum172)
	} else if (index == 172) {
		setDataHandle(arr173, rightNum173, wrongNum173)
	} else if (index == 173) {
		setDataHandle(arr174, rightNum174, wrongNum174)
	} else if (index == 174) {
		setDataHandle(arr175, rightNum175, wrongNum175)
	} else if (index == 175) {
		setDataHandle(arr176, rightNum176, wrongNum176)
	} else if (index == 176) {
		setDataHandle(arr177, rightNum177, wrongNum177)
	} else if (index == 177) {
		setDataHandle(arr178, rightNum178, wrongNum178)
	} else if (index == 178) {
		setDataHandle(arr179, rightNum179, wrongNum179)
	} else if (index == 179) {
		setDataHandle(arr180, rightNum180, wrongNum180)
	} else if (index == 180) {
		setDataHandle(arr181, rightNum181, wrongNum181)
	} else if (index == 181) {
		setDataHandle(arr182, rightNum182, wrongNum182)
	} else if (index == 182) {
		setDataHandle(arr183, rightNum183, wrongNum183)
	} else if (index == 183) {
		setDataHandle(arr184, rightNum184, wrongNum184)
	} else if (index == 184) {
		setDataHandle(arr185, rightNum185, wrongNum185)
	} else if (index == 185) {
		setDataHandle(arr186, rightNum186, wrongNum186)
	} else if (index == 186) {
		setDataHandle(arr187, rightNum187, wrongNum187)
	} else if (index == 187) {
		setDataHandle(arr188, rightNum188, wrongNum188)
	} else if (index == 188) {
		setDataHandle(arr189, rightNum189, wrongNum189)
	} else if (index == 189) {
		setDataHandle(arr190, rightNum190, wrongNum190)
	} else if (index == 190) {
		setDataHandle(arr191, rightNum191, wrongNum191)
	} else if (index == 191) {
		setDataHandle(arr192, rightNum192, wrongNum192)
	} else if (index == 192) {
		setDataHandle(arr193, rightNum193, wrongNum193)
	} else if (index == 193) {
		setDataHandle(arr194, rightNum194, wrongNum194)
	} else if (index == 194) {
		setDataHandle(arr195, rightNum195, wrongNum195)
	} else if (index == 195) {
		setDataHandle(arr196, rightNum196, wrongNum196)
	} else if (index == 196) {
		setDataHandle(arr197, rightNum197, wrongNum197)
	} else if (index == 197) {
		setDataHandle(arr198, rightNum198, wrongNum198)
	} else if (index == 198) {
		setDataHandle(arr199, rightNum199, wrongNum199)
	} else if (index == 199) {
		setDataHandle(arr200, rightNum200, wrongNum200)
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
				font-size: 38rpx;
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
		.num {
			height: 40rpx;
			width: 100%;
			word-wrap: break-word;
			font-size: 12rpx;
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
			}
		}
	}
	.data-box {
		padding: 10rpx 0;
		display: flex;
		.left {
			width: 10%;
			box-sizing: border-box;
			position: relative;
			.data {
				display: flex;
				justify-content: center;
				box-sizing: border-box;
				width: 100%;
				padding-left: 2rpx;
				.item {
					width: 14px;
					height: 18px;
					text-align: center;
					line-height: 18px;
					min-width: 4px;
					font-size: 24rpx;
					border: 1px solid #999;
					border-bottom: none;
					margin-right: 4px;
					color: blue;
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
				height: 900rpx;
				background-color: #ccc;
				position: absolute;
				right: 20rpx;
				top: 0rpx;
				border-radius: 1rpx;
			}
		}
		.right {
			padding: 10rpx;
			width: 44%;
			position: relative;
			top: -26rpx;
			left: -5px;
			box-sizing: border-box;
			.order {
				display: flex;
				justify-content: space-around;
				.item {
					padding: 1rpx 2rpx;
					text-align: center;
				}
			}
			.times {
				display: flex;
				justify-content: space-around;
				.item {
					padding: 1rpx 2rpx;
					text-align: center;
					width: 23%;
					color: #4e6ef2;
					background-color: #e6e3e3;
					border: 1px solid #ccc;
					border-radius: 2px;
					margin-right: 2px;
					margin-bottom: 2px;
					&.active {
						color: #01321b;
						font-weight: bold
					}
				}
				&.red {
					.item {
						color: #ca152b;
						&.active {
							color: #01321b;
							font-weight: bold
						}
					}
				}
			}
			.data {
				display: flex;
				box-sizing: border-box;
				width: 100%;
				.item {
					padding: 1rpx 2rpx;
					text-align: center;
					min-width: 10px;
					font-size: 22rpx;
					border: 1px solid #999;
					background-color: #ccc;
					margin-right: 2px;
					border-radius: 2px;
					&.active {
						color: blue;
						font-weight: bold
					}
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
