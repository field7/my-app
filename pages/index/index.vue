<template>
	<view class="content">
		<view class="operate">
			<view class="input">
				<input type="number" v-model="num" />
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
					<view :class="rightNum1 > 6 ? 'item active' : 'item'">{{ rightNum1 }}</view>
					<view :class="rightNum2 > 6 ? 'item active' : 'item'">{{ rightNum2 }}</view>
					<view :class="rightNum3 > 6 ? 'item active' : 'item'">{{ rightNum3 }}</view>
					<view :class="rightNum4 > 6 ? 'item active' : 'item'">{{ rightNum4 }}</view>
					<view :class="rightNum5 > 6 ? 'item active' : 'item'">{{ rightNum5 }}</view>
					<view :class="rightNum6 > 6 ? 'item active' : 'item'">{{ rightNum6 }}</view>
					<view :class="rightNum7 > 6 ? 'item active' : 'item'">{{ rightNum7 }}</view>
					<view :class="rightNum8 > 6 ? 'item active' : 'item'">{{ rightNum8 }}</view>
					<view :class="rightNum9 > 6 ? 'item active' : 'item'">{{ rightNum9 }}</view>
					<view :class="rightNum10 > 6 ? 'item active' : 'item'">{{ rightNum10 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum1 > 6 ? 'item active' : 'item'">{{ wrongNum1 }}</view>
					<view :class="wrongNum2 > 6 ? 'item active' : 'item'">{{ wrongNum2 }}</view>
					<view :class="wrongNum3 > 6 ? 'item active' : 'item'">{{ wrongNum3 }}</view>
					<view :class="wrongNum4 > 6 ? 'item active' : 'item'">{{ wrongNum4 }}</view>
					<view :class="wrongNum5 > 6 ? 'item active' : 'item'">{{ wrongNum5 }}</view>
					<view :class="wrongNum6 > 6 ? 'item active' : 'item'">{{ wrongNum6 }}</view>
					<view :class="wrongNum7 > 6 ? 'item active' : 'item'">{{ wrongNum7 }}</view>
					<view :class="wrongNum8 > 6 ? 'item active' : 'item'">{{ wrongNum8 }}</view>
					<view :class="wrongNum9 > 6 ? 'item active' : 'item'">{{ wrongNum9 }}</view>
					<view :class="wrongNum10 > 6 ? 'item active' : 'item'">{{ wrongNum10 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[0] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[1] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[2] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[3] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[4] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[5] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[6] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[7] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[8] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[9] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum11 > 6 ? 'item active' : 'item'">{{ rightNum11 }}</view>
					<view :class="rightNum12 > 6 ? 'item active' : 'item'">{{ rightNum12 }}</view>
					<view :class="rightNum13 > 6 ? 'item active' : 'item'">{{ rightNum13 }}</view>
					<view :class="rightNum14 > 6 ? 'item active' : 'item'">{{ rightNum14 }}</view>
					<view :class="rightNum15 > 6 ? 'item active' : 'item'">{{ rightNum15 }}</view>
					<view :class="rightNum16 > 6 ? 'item active' : 'item'">{{ rightNum16 }}</view>
					<view :class="rightNum17 > 6 ? 'item active' : 'item'">{{ rightNum17 }}</view>
					<view :class="rightNum18 > 6 ? 'item active' : 'item'">{{ rightNum18 }}</view>
					<view :class="rightNum19 > 6 ? 'item active' : 'item'">{{ rightNum19 }}</view>
					<view :class="rightNum20 > 6 ? 'item active' : 'item'">{{ rightNum20 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum11 > 6 ? 'item active' : 'item'">{{ wrongNum11 }}</view>
					<view :class="wrongNum12 > 6 ? 'item active' : 'item'">{{ wrongNum12 }}</view>
					<view :class="wrongNum13 > 6 ? 'item active' : 'item'">{{ wrongNum13 }}</view>
					<view :class="wrongNum14 > 6 ? 'item active' : 'item'">{{ wrongNum14 }}</view>
					<view :class="wrongNum15 > 6 ? 'item active' : 'item'">{{ wrongNum15 }}</view>
					<view :class="wrongNum16 > 6 ? 'item active' : 'item'">{{ wrongNum16 }}</view>
					<view :class="wrongNum17 > 6 ? 'item active' : 'item'">{{ wrongNum17 }}</view>
					<view :class="wrongNum18 > 6 ? 'item active' : 'item'">{{ wrongNum18 }}</view>
					<view :class="wrongNum19 > 6 ? 'item active' : 'item'">{{ wrongNum19 }}</view>
					<view :class="wrongNum20 > 6 ? 'item active' : 'item'">{{ wrongNum20 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[10] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[11] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[12] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[13] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[14] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[15] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[16] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[17] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[18] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[19] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum21 > 6 ? 'item active' : 'item'">{{ rightNum21 }}</view>
					<view :class="rightNum22 > 6 ? 'item active' : 'item'">{{ rightNum22 }}</view>
					<view :class="rightNum23 > 6 ? 'item active' : 'item'">{{ rightNum23 }}</view>
					<view :class="rightNum24 > 6 ? 'item active' : 'item'">{{ rightNum24 }}</view>
					<view :class="rightNum25 > 6 ? 'item active' : 'item'">{{ rightNum25 }}</view>
					<view :class="rightNum26 > 6 ? 'item active' : 'item'">{{ rightNum26 }}</view>
					<view :class="rightNum27 > 6 ? 'item active' : 'item'">{{ rightNum27 }}</view>
					<view :class="rightNum28 > 6 ? 'item active' : 'item'">{{ rightNum28 }}</view>
					<view :class="rightNum29 > 6 ? 'item active' : 'item'">{{ rightNum29 }}</view>
					<view :class="rightNum30 > 6 ? 'item active' : 'item'">{{ rightNum30 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum21 > 6 ? 'item active' : 'item'">{{ wrongNum21 }}</view>
					<view :class="wrongNum22 > 6 ? 'item active' : 'item'">{{ wrongNum22 }}</view>
					<view :class="wrongNum23 > 6 ? 'item active' : 'item'">{{ wrongNum23 }}</view>
					<view :class="wrongNum24 > 6 ? 'item active' : 'item'">{{ wrongNum24 }}</view>
					<view :class="wrongNum25 > 6 ? 'item active' : 'item'">{{ wrongNum25 }}</view>
					<view :class="wrongNum26 > 6 ? 'item active' : 'item'">{{ wrongNum26 }}</view>
					<view :class="wrongNum27 > 6 ? 'item active' : 'item'">{{ wrongNum27 }}</view>
					<view :class="wrongNum28 > 6 ? 'item active' : 'item'">{{ wrongNum28 }}</view>
					<view :class="wrongNum29 > 6 ? 'item active' : 'item'">{{ wrongNum29 }}</view>
					<view :class="wrongNum30 > 6 ? 'item active' : 'item'">{{ wrongNum30 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[20] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[21] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[22] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[23] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[24] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[25] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[26] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[27] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[28] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[29] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum31 > 6 ? 'item active' : 'item'">{{ rightNum31 }}</view>
					<view :class="rightNum32 > 6 ? 'item active' : 'item'">{{ rightNum32 }}</view>
					<view :class="rightNum33 > 6 ? 'item active' : 'item'">{{ rightNum33 }}</view>
					<view :class="rightNum34 > 6 ? 'item active' : 'item'">{{ rightNum34 }}</view>
					<view :class="rightNum35 > 6 ? 'item active' : 'item'">{{ rightNum35 }}</view>
					<view :class="rightNum36 > 6 ? 'item active' : 'item'">{{ rightNum36 }}</view>
					<view :class="rightNum37 > 6 ? 'item active' : 'item'">{{ rightNum37 }}</view>
					<view :class="rightNum38 > 6 ? 'item active' : 'item'">{{ rightNum38 }}</view>
					<view :class="rightNum39 > 6 ? 'item active' : 'item'">{{ rightNum39 }}</view>
					<view :class="rightNum40 > 6 ? 'item active' : 'item'">{{ rightNum40 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum31 > 6 ? 'item active' : 'item'">{{ wrongNum31 }}</view>
					<view :class="wrongNum32 > 6 ? 'item active' : 'item'">{{ wrongNum32 }}</view>
					<view :class="wrongNum33 > 6 ? 'item active' : 'item'">{{ wrongNum33 }}</view>
					<view :class="wrongNum34 > 6 ? 'item active' : 'item'">{{ wrongNum34 }}</view>
					<view :class="wrongNum35 > 6 ? 'item active' : 'item'">{{ wrongNum35 }}</view>
					<view :class="wrongNum36 > 6 ? 'item active' : 'item'">{{ wrongNum36 }}</view>
					<view :class="wrongNum37 > 6 ? 'item active' : 'item'">{{ wrongNum37 }}</view>
					<view :class="wrongNum38 > 6 ? 'item active' : 'item'">{{ wrongNum38 }}</view>
					<view :class="wrongNum39 > 6 ? 'item active' : 'item'">{{ wrongNum39 }}</view>
					<view :class="wrongNum40 > 6 ? 'item active' : 'item'">{{ wrongNum40 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[30] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[31] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[32] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[33] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[34] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[35] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[36] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[37] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[38] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[39] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum41 > 6 ? 'item active' : 'item'">{{ rightNum41 }}</view>
					<view :class="rightNum42 > 6 ? 'item active' : 'item'">{{ rightNum42 }}</view>
					<view :class="rightNum43 > 6 ? 'item active' : 'item'">{{ rightNum43 }}</view>
					<view :class="rightNum44 > 6 ? 'item active' : 'item'">{{ rightNum44 }}</view>
					<view :class="rightNum45 > 6 ? 'item active' : 'item'">{{ rightNum45 }}</view>
					<view :class="rightNum46 > 6 ? 'item active' : 'item'">{{ rightNum46 }}</view>
					<view :class="rightNum47 > 6 ? 'item active' : 'item'">{{ rightNum47 }}</view>
					<view :class="rightNum48 > 6 ? 'item active' : 'item'">{{ rightNum48 }}</view>
					<view :class="rightNum49 > 6 ? 'item active' : 'item'">{{ rightNum49 }}</view>
					<view :class="rightNum50 > 6 ? 'item active' : 'item'">{{ rightNum50 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum41 > 6 ? 'item active' : 'item'">{{ wrongNum41 }}</view>
					<view :class="wrongNum42 > 6 ? 'item active' : 'item'">{{ wrongNum42 }}</view>
					<view :class="wrongNum43 > 6 ? 'item active' : 'item'">{{ wrongNum43 }}</view>
					<view :class="wrongNum44 > 6 ? 'item active' : 'item'">{{ wrongNum44 }}</view>
					<view :class="wrongNum45 > 6 ? 'item active' : 'item'">{{ wrongNum45 }}</view>
					<view :class="wrongNum46 > 6 ? 'item active' : 'item'">{{ wrongNum46 }}</view>
					<view :class="wrongNum47 > 6 ? 'item active' : 'item'">{{ wrongNum47 }}</view>
					<view :class="wrongNum48 > 6 ? 'item active' : 'item'">{{ wrongNum48 }}</view>
					<view :class="wrongNum49 > 6 ? 'item active' : 'item'">{{ wrongNum49 }}</view>
					<view :class="wrongNum50 > 6 ? 'item active' : 'item'">{{ wrongNum50 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[40] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[41] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[42] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[43] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[44] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[45] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[46] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[47] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[48] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[59] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum51 > 6 ? 'item active' : 'item'">{{ rightNum51 }}</view>
					<view :class="rightNum52 > 6 ? 'item active' : 'item'">{{ rightNum52 }}</view>
					<view :class="rightNum53 > 6 ? 'item active' : 'item'">{{ rightNum53 }}</view>
					<view :class="rightNum54 > 6 ? 'item active' : 'item'">{{ rightNum54 }}</view>
					<view :class="rightNum55 > 6 ? 'item active' : 'item'">{{ rightNum55 }}</view>
					<view :class="rightNum56 > 6 ? 'item active' : 'item'">{{ rightNum56 }}</view>
					<view :class="rightNum57 > 6 ? 'item active' : 'item'">{{ rightNum57 }}</view>
					<view :class="rightNum58 > 6 ? 'item active' : 'item'">{{ rightNum58 }}</view>
					<view :class="rightNum59 > 6 ? 'item active' : 'item'">{{ rightNum59 }}</view>
					<view :class="rightNum60 > 6 ? 'item active' : 'item'">{{ rightNum60 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum51 > 6 ? 'item active' : 'item'">{{ wrongNum51 }}</view>
					<view :class="wrongNum52 > 6 ? 'item active' : 'item'">{{ wrongNum52 }}</view>
					<view :class="wrongNum53 > 6 ? 'item active' : 'item'">{{ wrongNum53 }}</view>
					<view :class="wrongNum54 > 6 ? 'item active' : 'item'">{{ wrongNum54 }}</view>
					<view :class="wrongNum55 > 6 ? 'item active' : 'item'">{{ wrongNum55 }}</view>
					<view :class="wrongNum56 > 6 ? 'item active' : 'item'">{{ wrongNum56 }}</view>
					<view :class="wrongNum57 > 6 ? 'item active' : 'item'">{{ wrongNum57 }}</view>
					<view :class="wrongNum58 > 6 ? 'item active' : 'item'">{{ wrongNum58 }}</view>
					<view :class="wrongNum59 > 6 ? 'item active' : 'item'">{{ wrongNum59 }}</view>
					<view :class="wrongNum60 > 6 ? 'item active' : 'item'">{{ wrongNum60 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[50] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[51] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[52] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[53] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[54] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[55] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[56] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[57] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[58] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[59] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum61 > 6 ? 'item active' : 'item'">{{ rightNum61 }}</view>
					<view :class="rightNum62 > 6 ? 'item active' : 'item'">{{ rightNum62 }}</view>
					<view :class="rightNum63 > 6 ? 'item active' : 'item'">{{ rightNum63 }}</view>
					<view :class="rightNum64 > 6 ? 'item active' : 'item'">{{ rightNum64 }}</view>
					<view :class="rightNum65 > 6 ? 'item active' : 'item'">{{ rightNum65 }}</view>
					<view :class="rightNum66 > 6 ? 'item active' : 'item'">{{ rightNum66 }}</view>
					<view :class="rightNum67 > 6 ? 'item active' : 'item'">{{ rightNum67 }}</view>
					<view :class="rightNum68 > 6 ? 'item active' : 'item'">{{ rightNum68 }}</view>
					<view :class="rightNum69 > 6 ? 'item active' : 'item'">{{ rightNum69 }}</view>
					<view :class="rightNum70 > 6 ? 'item active' : 'item'">{{ rightNum70 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum61 > 6 ? 'item active' : 'item'">{{ wrongNum61 }}</view>
					<view :class="wrongNum62 > 6 ? 'item active' : 'item'">{{ wrongNum62 }}</view>
					<view :class="wrongNum63 > 6 ? 'item active' : 'item'">{{ wrongNum63 }}</view>
					<view :class="wrongNum64 > 6 ? 'item active' : 'item'">{{ wrongNum64 }}</view>
					<view :class="wrongNum65 > 6 ? 'item active' : 'item'">{{ wrongNum65 }}</view>
					<view :class="wrongNum66 > 6 ? 'item active' : 'item'">{{ wrongNum66 }}</view>
					<view :class="wrongNum67 > 6 ? 'item active' : 'item'">{{ wrongNum67 }}</view>
					<view :class="wrongNum68 > 6 ? 'item active' : 'item'">{{ wrongNum68 }}</view>
					<view :class="wrongNum69 > 6 ? 'item active' : 'item'">{{ wrongNum69 }}</view>
					<view :class="wrongNum70 > 6 ? 'item active' : 'item'">{{ wrongNum70 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[60] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[61] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[62] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[63] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[64] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[65] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[66] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[67] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[68] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[69] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum71 > 6 ? 'item active' : 'item'">{{ rightNum71 }}</view>
					<view :class="rightNum72 > 6 ? 'item active' : 'item'">{{ rightNum72 }}</view>
					<view :class="rightNum73 > 6 ? 'item active' : 'item'">{{ rightNum73 }}</view>
					<view :class="rightNum74 > 6 ? 'item active' : 'item'">{{ rightNum74 }}</view>
					<view :class="rightNum75 > 6 ? 'item active' : 'item'">{{ rightNum75 }}</view>
					<view :class="rightNum76 > 6 ? 'item active' : 'item'">{{ rightNum76 }}</view>
					<view :class="rightNum77 > 6 ? 'item active' : 'item'">{{ rightNum77 }}</view>
					<view :class="rightNum78 > 6 ? 'item active' : 'item'">{{ rightNum78 }}</view>
					<view :class="rightNum79 > 6 ? 'item active' : 'item'">{{ rightNum79 }}</view>
					<view :class="rightNum80 > 6 ? 'item active' : 'item'">{{ rightNum80 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum71 > 6 ? 'item active' : 'item'">{{ wrongNum71 }}</view>
					<view :class="wrongNum72 > 6 ? 'item active' : 'item'">{{ wrongNum72 }}</view>
					<view :class="wrongNum73 > 6 ? 'item active' : 'item'">{{ wrongNum73 }}</view>
					<view :class="wrongNum74 > 6 ? 'item active' : 'item'">{{ wrongNum74 }}</view>
					<view :class="wrongNum75 > 6 ? 'item active' : 'item'">{{ wrongNum75 }}</view>
					<view :class="wrongNum76 > 6 ? 'item active' : 'item'">{{ wrongNum76 }}</view>
					<view :class="wrongNum77 > 6 ? 'item active' : 'item'">{{ wrongNum77 }}</view>
					<view :class="wrongNum78 > 6 ? 'item active' : 'item'">{{ wrongNum78 }}</view>
					<view :class="wrongNum79 > 6 ? 'item active' : 'item'">{{ wrongNum79 }}</view>
					<view :class="wrongNum80 > 6 ? 'item active' : 'item'">{{ wrongNum80 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[70] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[71] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[72] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[73] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[74] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[75] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[76] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[77] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[78] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[79] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum81 > 6 ? 'item active' : 'item'">{{ rightNum81 }}</view>
					<view :class="rightNum82 > 6 ? 'item active' : 'item'">{{ rightNum82 }}</view>
					<view :class="rightNum83 > 6 ? 'item active' : 'item'">{{ rightNum83 }}</view>
					<view :class="rightNum84 > 6 ? 'item active' : 'item'">{{ rightNum84 }}</view>
					<view :class="rightNum85 > 6 ? 'item active' : 'item'">{{ rightNum85 }}</view>
					<view :class="rightNum86 > 6 ? 'item active' : 'item'">{{ rightNum86 }}</view>
					<view :class="rightNum87 > 6 ? 'item active' : 'item'">{{ rightNum87 }}</view>
					<view :class="rightNum88 > 6 ? 'item active' : 'item'">{{ rightNum88 }}</view>
					<view :class="rightNum89 > 6 ? 'item active' : 'item'">{{ rightNum89 }}</view>
					<view :class="rightNum90 > 6 ? 'item active' : 'item'">{{ rightNum90 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum81 > 6 ? 'item active' : 'item'">{{ wrongNum81 }}</view>
					<view :class="wrongNum82 > 6 ? 'item active' : 'item'">{{ wrongNum82 }}</view>
					<view :class="wrongNum83 > 6 ? 'item active' : 'item'">{{ wrongNum83 }}</view>
					<view :class="wrongNum84 > 6 ? 'item active' : 'item'">{{ wrongNum84 }}</view>
					<view :class="wrongNum85 > 6 ? 'item active' : 'item'">{{ wrongNum85 }}</view>
					<view :class="wrongNum86 > 6 ? 'item active' : 'item'">{{ wrongNum86 }}</view>
					<view :class="wrongNum87 > 6 ? 'item active' : 'item'">{{ wrongNum87 }}</view>
					<view :class="wrongNum88 > 6 ? 'item active' : 'item'">{{ wrongNum88 }}</view>
					<view :class="wrongNum89 > 6 ? 'item active' : 'item'">{{ wrongNum89 }}</view>
					<view :class="wrongNum90 > 6 ? 'item active' : 'item'">{{ wrongNum90 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[80] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[81] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[82] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[83] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[84] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[85] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[86] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[87] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[88] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[89] == '1' ? '大' : '小' }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="times">
					<view :class="rightNum91 > 6 ? 'item active' : 'item'">{{ rightNum91 }}</view>
					<view :class="rightNum92 > 6 ? 'item active' : 'item'">{{ rightNum92 }}</view>
					<view :class="rightNum93 > 6 ? 'item active' : 'item'">{{ rightNum93 }}</view>
					<view :class="rightNum94 > 6 ? 'item active' : 'item'">{{ rightNum94 }}</view>
					<view :class="rightNum95 > 6 ? 'item active' : 'item'">{{ rightNum95 }}</view>
					<view :class="rightNum96 > 6 ? 'item active' : 'item'">{{ rightNum96 }}</view>
					<view :class="rightNum97 > 6 ? 'item active' : 'item'">{{ rightNum97 }}</view>
					<view :class="rightNum98 > 6 ? 'item active' : 'item'">{{ rightNum98 }}</view>
					<view :class="rightNum99 > 6 ? 'item active' : 'item'">{{ rightNum99 }}</view>
					<view :class="rightNum100 > 6 ? 'item active' : 'item'">{{ rightNum100 }}</view>
				</view>
				<view class="times red">
					<view :class="wrongNum91 > 6 ? 'item active' : 'item'">{{ wrongNum91 }}</view>
					<view :class="wrongNum92 > 6 ? 'item active' : 'item'">{{ wrongNum72 }}</view>
					<view :class="wrongNum93 > 6 ? 'item active' : 'item'">{{ wrongNum93 }}</view>
					<view :class="wrongNum94 > 6 ? 'item active' : 'item'">{{ wrongNum94 }}</view>
					<view :class="wrongNum95 > 6 ? 'item active' : 'item'">{{ wrongNum95 }}</view>
					<view :class="wrongNum96 > 6 ? 'item active' : 'item'">{{ wrongNum96 }}</view>
					<view :class="wrongNum97 > 6 ? 'item active' : 'item'">{{ wrongNum97 }}</view>
					<view :class="wrongNum98 > 6 ? 'item active' : 'item'">{{ wrongNum98 }}</view>
					<view :class="wrongNum99 > 6 ? 'item active' : 'item'">{{ wrongNum99 }}</view>
					<view :class="wrongNum100 > 6 ? 'item active' : 'item'">{{ wrongNum100 }}</view>
				</view>
				<view style="height: 10px;"></view>
				<view class="data" :style="{ opacity: num ? 1 : 0 }">
					<view class="item">{{ num[90] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[91] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[92] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[93] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[94] == '1' ? '大' : '小' }}</view>
					<view class="item line">-</view>
					<view class="item">{{ num[95] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[96] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[97] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[98] == '1' ? '大' : '小' }}</view>
					<view class="item">{{ num[99] == '1' ? '大' : '小' }}</view>
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

/* 生命周期函数 */
onLoad(() => {
	getData()
	setTimeout(() => {
		findHandle(0)
	}, 0)
	setTimeout(() => {
		findHandle(1)
	}, 10)
	setTimeout(() => {
		findHandle(2)
	}, 20)
	setTimeout(() => {
		findHandle(3)
	}, 30)
	setTimeout(() => {
		findHandle(4)
	}, 40)
	setTimeout(() => {
		findHandle(5)
	}, 50)
	setTimeout(() => {
		findHandle(6)
	}, 60)
	setTimeout(() => {
		findHandle(7)
	}, 70)
	setTimeout(() => {
		findHandle(8)
	}, 80)
	setTimeout(() => {
		findHandle(9)
	}, 90)
	setTimeout(() => {
		findHandle(10)
	}, 100)
	setTimeout(() => {
		findHandle(11)
	}, 110)
	setTimeout(() => {
		findHandle(12)
	}, 120)
	setTimeout(() => {
		findHandle(13)
	}, 130)
	setTimeout(() => {
		findHandle(14)
	}, 140)
	setTimeout(() => {
		findHandle(15)
	}, 150)
	setTimeout(() => {
		findHandle(16)
	}, 160)
	setTimeout(() => {
		findHandle(17)
	}, 170)
	setTimeout(() => {
		findHandle(18)
	}, 180)
	setTimeout(() => {
		findHandle(19)
	}, 190)
	setTimeout(() => {
		findHandle(20)
	}, 200)
	setTimeout(() => {
		findHandle(21)
	}, 210)
	setTimeout(() => {
		findHandle(22)
	}, 220)
	setTimeout(() => {
		findHandle(23)
	}, 230)
	setTimeout(() => {
		findHandle(24)
	}, 240)
	setTimeout(() => {
		findHandle(25)
	}, 250)
	setTimeout(() => {
		findHandle(26)
	}, 260)
	setTimeout(() => {
		findHandle(27)
	}, 270)
	setTimeout(() => {
		findHandle(28)
	}, 280)
	setTimeout(() => {
		findHandle(29)
	}, 290)
	setTimeout(() => {
		findHandle(30)
	}, 300)
	setTimeout(() => {
		findHandle(31)
	}, 310)
	setTimeout(() => {
		findHandle(32)
	}, 320)
	setTimeout(() => {
		findHandle(33)
	}, 330)
	setTimeout(() => {
		findHandle(34)
	}, 340)
	setTimeout(() => {
		findHandle(35)
	}, 350)
	setTimeout(() => {
		findHandle(36)
	}, 360)
	setTimeout(() => {
		findHandle(37)
	}, 370)
	setTimeout(() => {
		findHandle(38)
	}, 380)
	setTimeout(() => {
		findHandle(39)
	}, 390)
	setTimeout(() => {
		findHandle(40)
	}, 400)
	setTimeout(() => {
		findHandle(41)
	}, 410)
	setTimeout(() => {
		findHandle(42)
	}, 420)
	setTimeout(() => {
		findHandle(43)
	}, 430)
	setTimeout(() => {
		findHandle(44)
	}, 440)
	setTimeout(() => {
		findHandle(45)
	}, 450)
	setTimeout(() => {
		findHandle(46)
	}, 460)
	setTimeout(() => {
		findHandle(47)
	}, 470)
	setTimeout(() => {
		findHandle(48)
	}, 480)
	setTimeout(() => {
		findHandle(49)
	}, 490)
	setTimeout(() => {
		findHandle(50)
	}, 500)
	setTimeout(() => {
		findHandle(51)
	}, 510)
	setTimeout(() => {
		findHandle(52)
	}, 520)
	setTimeout(() => {
		findHandle(53)
	}, 530)
	setTimeout(() => {
		findHandle(54)
	}, 540)
	setTimeout(() => {
		findHandle(55)
	}, 550)
	setTimeout(() => {
		findHandle(56)
	}, 560)
	setTimeout(() => {
		findHandle(57)
	}, 570)
	setTimeout(() => {
		findHandle(58)
	}, 580)
	setTimeout(() => {
		findHandle(59)
	}, 590)
	setTimeout(() => {
		findHandle(60)
	}, 600)
	setTimeout(() => {
		findHandle(61)
	}, 610)
	setTimeout(() => {
		findHandle(62)
	}, 620)
	setTimeout(() => {
		findHandle(63)
	}, 630)
	setTimeout(() => {
		findHandle(64)
	}, 640)
	setTimeout(() => {
		findHandle(65)
	}, 650)
	setTimeout(() => {
		findHandle(66)
	}, 660)
	setTimeout(() => {
		findHandle(67)
	}, 670)
	setTimeout(() => {
		findHandle(68)
	}, 680)
	setTimeout(() => {
		findHandle(69)
	}, 690)
	setTimeout(() => {
		findHandle(70)
	}, 700)
	setTimeout(() => {
		findHandle(71)
	}, 710)
	setTimeout(() => {
		findHandle(72)
	}, 720)
	setTimeout(() => {
		findHandle(73)
	}, 730)
	setTimeout(() => {
		findHandle(74)
	}, 740)
	setTimeout(() => {
		findHandle(75)
	}, 750)
	setTimeout(() => {
		findHandle(76)
	}, 760)
	setTimeout(() => {
		findHandle(77)
	}, 770)
	setTimeout(() => {
		findHandle(78)
	}, 780)
	setTimeout(() => {
		findHandle(79)
	}, 790)
	setTimeout(() => {
		findHandle(80)
	}, 800)
	setTimeout(() => {
		findHandle(81)
	}, 810)
	setTimeout(() => {
		findHandle(82)
	}, 820)
	setTimeout(() => {
		findHandle(83)
	}, 830)
	setTimeout(() => {
		findHandle(84)
	}, 840)
	setTimeout(() => {
		findHandle(85)
	}, 850)
	setTimeout(() => {
		findHandle(86)
	}, 860)
	setTimeout(() => {
		findHandle(87)
	}, 870)
	setTimeout(() => {
		findHandle(88)
	}, 880)
	setTimeout(() => {
		findHandle(89)
	}, 890)
	setTimeout(() => {
		findHandle(90)
	}, 900)
	setTimeout(() => {
		findHandle(91)
	}, 910)
	setTimeout(() => {
		findHandle(92)
	}, 920)
	setTimeout(() => {
		findHandle(93)
	}, 930)
	setTimeout(() => {
		findHandle(94)
	}, 940)
	setTimeout(() => {
		findHandle(95)
	}, 950)
	setTimeout(() => {
		findHandle(96)
	}, 960)
	setTimeout(() => {
		findHandle(97)
	}, 970)
	setTimeout(() => {
		findHandle(98)
	}, 980)
	setTimeout(() => {
		findHandle(99)
	}, 990)
})

/* methods */
function rnd(n, m){
	return parseInt(Math.random() * ( m - n + 1 ) + n);
}

function getRnd() {
	let arr = []
	for (let i = 0; i < 100; i++) {
		let nb = rnd(0, 1)
		arr.push(nb)
	}
	num.value = arr.join('')
}

function setValueHandle() {
	if (
		typeof num.value[0] != 'undefined' && typeof num.value[1] != 'undefined' && typeof num.value[2] != 'undefined' && typeof num.value[3] != 'undefined' && typeof num.value[4] != 'undefined' && typeof num.value[5] != 'undefined' && typeof num.value[6] != 'undefined' && typeof num.value[7] != 'undefined' && typeof num.value[8] != 'undefined' && typeof num.value[9] != 'undefined' && typeof num.value[10] != 'undefined' &&
		typeof num.value[10] != 'undefined' && typeof num.value[11] != 'undefined' && typeof num.value[12] != 'undefined' && typeof num.value[13] != 'undefined' && typeof num.value[14] != 'undefined' && typeof num.value[15] != 'undefined' && typeof num.value[16] != 'undefined' && typeof num.value[17] != 'undefined' && typeof num.value[18] != 'undefined' && typeof num.value[19] != 'undefined' && typeof num.value[20] != 'undefined' &&
		typeof num.value[20] != 'undefined' && typeof num.value[21] != 'undefined' && typeof num.value[22] != 'undefined' && typeof num.value[23] != 'undefined' && typeof num.value[24] != 'undefined' && typeof num.value[25] != 'undefined' && typeof num.value[26] != 'undefined' && typeof num.value[27] != 'undefined' && typeof num.value[28] != 'undefined' && typeof num.value[29] != 'undefined' && typeof num.value[30] != 'undefined' &&
		typeof num.value[30] != 'undefined' && typeof num.value[31] != 'undefined' && typeof num.value[32] != 'undefined' && typeof num.value[33] != 'undefined' && typeof num.value[34] != 'undefined' && typeof num.value[35] != 'undefined' && typeof num.value[36] != 'undefined' && typeof num.value[37] != 'undefined' && typeof num.value[38] != 'undefined' && typeof num.value[39] != 'undefined' && typeof num.value[40] != 'undefined' &&
		typeof num.value[40] != 'undefined' && typeof num.value[41] != 'undefined' && typeof num.value[42] != 'undefined' && typeof num.value[43] != 'undefined' && typeof num.value[44] != 'undefined' && typeof num.value[45] != 'undefined' && typeof num.value[46] != 'undefined' && typeof num.value[47] != 'undefined' && typeof num.value[48] != 'undefined' && typeof num.value[49] != 'undefined' && typeof num.value[50] != 'undefined' &&
		typeof num.value[50] != 'undefined' && typeof num.value[51] != 'undefined' && typeof num.value[52] != 'undefined' && typeof num.value[53] != 'undefined' && typeof num.value[54] != 'undefined' && typeof num.value[55] != 'undefined' && typeof num.value[56] != 'undefined' && typeof num.value[57] != 'undefined' && typeof num.value[58] != 'undefined' && typeof num.value[59] != 'undefined' && typeof num.value[60] != 'undefined' &&
		typeof num.value[60] != 'undefined' && typeof num.value[61] != 'undefined' && typeof num.value[62] != 'undefined' && typeof num.value[63] != 'undefined' && typeof num.value[64] != 'undefined' && typeof num.value[65] != 'undefined' && typeof num.value[66] != 'undefined' && typeof num.value[67] != 'undefined' && typeof num.value[68] != 'undefined' && typeof num.value[69] != 'undefined' && typeof num.value[70] != 'undefined' &&
		typeof num.value[70] != 'undefined' && typeof num.value[71] != 'undefined' && typeof num.value[72] != 'undefined' && typeof num.value[73] != 'undefined' && typeof num.value[74] != 'undefined' && typeof num.value[75] != 'undefined' && typeof num.value[76] != 'undefined' && typeof num.value[77] != 'undefined' && typeof num.value[78] != 'undefined' && typeof num.value[79] != 'undefined' && typeof num.value[80] != 'undefined' &&
		typeof num.value[80] != 'undefined' && typeof num.value[81] != 'undefined' && typeof num.value[82] != 'undefined' && typeof num.value[83] != 'undefined' && typeof num.value[84] != 'undefined' && typeof num.value[85] != 'undefined' && typeof num.value[86] != 'undefined' && typeof num.value[87] != 'undefined' && typeof num.value[88] != 'undefined' && typeof num.value[89] != 'undefined' && typeof num.value[90] != 'undefined' &&
		typeof num.value[90] != 'undefined' && typeof num.value[91] != 'undefined' && typeof num.value[92] != 'undefined' && typeof num.value[93] != 'undefined' && typeof num.value[94] != 'undefined' && typeof num.value[95] != 'undefined' && typeof num.value[96] != 'undefined' && typeof num.value[97] != 'undefined' && typeof num.value[98] != 'undefined' && typeof num.value[99] != 'undefined' && typeof num.value[100] != 'undefined'
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
		arrComparison.value.unshift(num.value[100]);

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
		if (arrComparison.value.length > 20) {
			arrComparison.value.pop()
		}
		num.value = ''
		setStorage()
		setTimeout(() => {
			findHandle(0)
		}, 0)
		setTimeout(() => {
			findHandle(1)
		}, 10)
		setTimeout(() => {
			findHandle(2)
		}, 20)
		setTimeout(() => {
			findHandle(3)
		}, 30)
		setTimeout(() => {
			findHandle(4)
		}, 40)
		setTimeout(() => {
			findHandle(5)
		}, 50)
		setTimeout(() => {
			findHandle(6)
		}, 60)
		setTimeout(() => {
			findHandle(7)
		}, 70)
		setTimeout(() => {
			findHandle(8)
		}, 80)
		setTimeout(() => {
			findHandle(9)
		}, 90)
		setTimeout(() => {
			findHandle(10)
		}, 100)
		setTimeout(() => {
			findHandle(11)
		}, 110)
		setTimeout(() => {
			findHandle(12)
		}, 120)
		setTimeout(() => {
			findHandle(13)
		}, 130)
		setTimeout(() => {
			findHandle(14)
		}, 140)
		setTimeout(() => {
			findHandle(15)
		}, 150)
		setTimeout(() => {
			findHandle(16)
		}, 160)
		setTimeout(() => {
			findHandle(17)
		}, 170)
		setTimeout(() => {
			findHandle(18)
		}, 180)
		setTimeout(() => {
			findHandle(19)
		}, 190)
		setTimeout(() => {
			findHandle(20)
		}, 200)
		setTimeout(() => {
			findHandle(21)
		}, 210)
		setTimeout(() => {
			findHandle(22)
		}, 220)
		setTimeout(() => {
			findHandle(23)
		}, 230)
		setTimeout(() => {
			findHandle(24)
		}, 240)
		setTimeout(() => {
			findHandle(25)
		}, 250)
		setTimeout(() => {
			findHandle(26)
		}, 260)
		setTimeout(() => {
			findHandle(27)
		}, 270)
		setTimeout(() => {
			findHandle(28)
		}, 280)
		setTimeout(() => {
			findHandle(29)
		}, 290)
		setTimeout(() => {
			findHandle(30)
		}, 300)
		setTimeout(() => {
			findHandle(31)
		}, 310)
		setTimeout(() => {
			findHandle(32)
		}, 320)
		setTimeout(() => {
			findHandle(33)
		}, 330)
		setTimeout(() => {
			findHandle(34)
		}, 340)
		setTimeout(() => {
			findHandle(35)
		}, 350)
		setTimeout(() => {
			findHandle(36)
		}, 360)
		setTimeout(() => {
			findHandle(37)
		}, 370)
		setTimeout(() => {
			findHandle(38)
		}, 380)
		setTimeout(() => {
			findHandle(39)
		}, 390)
		setTimeout(() => {
			findHandle(40)
		}, 400)
		setTimeout(() => {
			findHandle(41)
		}, 410)
		setTimeout(() => {
			findHandle(42)
		}, 420)
		setTimeout(() => {
			findHandle(43)
		}, 430)
		setTimeout(() => {
			findHandle(44)
		}, 440)
		setTimeout(() => {
			findHandle(45)
		}, 450)
		setTimeout(() => {
			findHandle(46)
		}, 460)
		setTimeout(() => {
			findHandle(47)
		}, 470)
		setTimeout(() => {
			findHandle(48)
		}, 480)
		setTimeout(() => {
			findHandle(49)
		}, 490)
		setTimeout(() => {
			findHandle(50)
		}, 500)
		setTimeout(() => {
			findHandle(51)
		}, 510)
		setTimeout(() => {
			findHandle(52)
		}, 520)
		setTimeout(() => {
			findHandle(53)
		}, 530)
		setTimeout(() => {
			findHandle(54)
		}, 540)
		setTimeout(() => {
			findHandle(55)
		}, 550)
		setTimeout(() => {
			findHandle(56)
		}, 560)
		setTimeout(() => {
			findHandle(57)
		}, 570)
		setTimeout(() => {
			findHandle(58)
		}, 580)
		setTimeout(() => {
			findHandle(59)
		}, 590)
		setTimeout(() => {
			findHandle(60)
		}, 600)
		setTimeout(() => {
			findHandle(61)
		}, 610)
		setTimeout(() => {
			findHandle(62)
		}, 620)
		setTimeout(() => {
			findHandle(63)
		}, 630)
		setTimeout(() => {
			findHandle(64)
		}, 640)
		setTimeout(() => {
			findHandle(65)
		}, 650)
		setTimeout(() => {
			findHandle(66)
		}, 660)
		setTimeout(() => {
			findHandle(67)
		}, 670)
		setTimeout(() => {
			findHandle(68)
		}, 680)
		setTimeout(() => {
			findHandle(69)
		}, 690)
		setTimeout(() => {
			findHandle(70)
		}, 700)
		setTimeout(() => {
			findHandle(71)
		}, 710)
		setTimeout(() => {
			findHandle(72)
		}, 720)
		setTimeout(() => {
			findHandle(73)
		}, 730)
		setTimeout(() => {
			findHandle(74)
		}, 740)
		setTimeout(() => {
			findHandle(75)
		}, 750)
		setTimeout(() => {
			findHandle(76)
		}, 760)
		setTimeout(() => {
			findHandle(77)
		}, 770)
		setTimeout(() => {
			findHandle(78)
		}, 780)
		setTimeout(() => {
			findHandle(79)
		}, 790)
		setTimeout(() => {
			findHandle(80)
		}, 800)
		setTimeout(() => {
			findHandle(81)
		}, 810)
		setTimeout(() => {
			findHandle(82)
		}, 820)
		setTimeout(() => {
			findHandle(83)
		}, 830)
		setTimeout(() => {
			findHandle(84)
		}, 840)
		setTimeout(() => {
			findHandle(85)
		}, 850)
		setTimeout(() => {
			findHandle(86)
		}, 860)
		setTimeout(() => {
			findHandle(87)
		}, 870)
		setTimeout(() => {
			findHandle(88)
		}, 880)
		setTimeout(() => {
			findHandle(89)
		}, 890)
		setTimeout(() => {
			findHandle(90)
		}, 900)
		setTimeout(() => {
			findHandle(91)
		}, 910)
		setTimeout(() => {
			findHandle(92)
		}, 920)
		setTimeout(() => {
			findHandle(93)
		}, 930)
		setTimeout(() => {
			findHandle(94)
		}, 940)
		setTimeout(() => {
			findHandle(95)
		}, 950)
		setTimeout(() => {
			findHandle(96)
		}, 960)
		setTimeout(() => {
			findHandle(97)
		}, 970)
		setTimeout(() => {
			findHandle(98)
		}, 980)
		setTimeout(() => {
			findHandle(99)
		}, 990)
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
	arrComparison.value.shift()
	setStorage()
	setTimeout(() => {
		findHandle(0)
	}, 0)
	setTimeout(() => {
		findHandle(1)
	}, 10)
	setTimeout(() => {
		findHandle(2)
	}, 20)
	setTimeout(() => {
		findHandle(3)
	}, 30)
	setTimeout(() => {
		findHandle(4)
	}, 40)
	setTimeout(() => {
		findHandle(5)
	}, 50)
	setTimeout(() => {
		findHandle(6)
	}, 60)
	setTimeout(() => {
		findHandle(7)
	}, 70)
	setTimeout(() => {
		findHandle(8)
	}, 80)
	setTimeout(() => {
		findHandle(9)
	}, 90)
	setTimeout(() => {
		findHandle(10)
	}, 100)
	setTimeout(() => {
		findHandle(11)
	}, 110)
	setTimeout(() => {
		findHandle(12)
	}, 120)
	setTimeout(() => {
		findHandle(13)
	}, 130)
	setTimeout(() => {
		findHandle(14)
	}, 140)
	setTimeout(() => {
		findHandle(15)
	}, 150)
	setTimeout(() => {
		findHandle(16)
	}, 160)
	setTimeout(() => {
		findHandle(17)
	}, 170)
	setTimeout(() => {
		findHandle(18)
	}, 180)
	setTimeout(() => {
		findHandle(19)
	}, 190)
	setTimeout(() => {
		findHandle(20)
	}, 200)
	setTimeout(() => {
		findHandle(21)
	}, 210)
	setTimeout(() => {
		findHandle(22)
	}, 220)
	setTimeout(() => {
		findHandle(23)
	}, 230)
	setTimeout(() => {
		findHandle(24)
	}, 240)
	setTimeout(() => {
		findHandle(25)
	}, 250)
	setTimeout(() => {
		findHandle(26)
	}, 260)
	setTimeout(() => {
		findHandle(27)
	}, 270)
	setTimeout(() => {
		findHandle(28)
	}, 280)
	setTimeout(() => {
		findHandle(29)
	}, 290)
	setTimeout(() => {
		findHandle(30)
	}, 300)
	setTimeout(() => {
		findHandle(31)
	}, 310)
	setTimeout(() => {
		findHandle(32)
	}, 320)
	setTimeout(() => {
		findHandle(33)
	}, 330)
	setTimeout(() => {
		findHandle(34)
	}, 340)
	setTimeout(() => {
		findHandle(35)
	}, 350)
	setTimeout(() => {
		findHandle(36)
	}, 360)
	setTimeout(() => {
		findHandle(37)
	}, 370)
	setTimeout(() => {
		findHandle(38)
	}, 380)
	setTimeout(() => {
		findHandle(39)
	}, 390)
	setTimeout(() => {
		findHandle(40)
	}, 400)
	setTimeout(() => {
		findHandle(41)
	}, 410)
	setTimeout(() => {
		findHandle(42)
	}, 420)
	setTimeout(() => {
		findHandle(43)
	}, 430)
	setTimeout(() => {
		findHandle(44)
	}, 440)
	setTimeout(() => {
		findHandle(45)
	}, 450)
	setTimeout(() => {
		findHandle(46)
	}, 460)
	setTimeout(() => {
		findHandle(47)
	}, 470)
	setTimeout(() => {
		findHandle(48)
	}, 480)
	setTimeout(() => {
		findHandle(49)
	}, 490)
	setTimeout(() => {
		findHandle(50)
	}, 500)
	setTimeout(() => {
		findHandle(51)
	}, 510)
	setTimeout(() => {
		findHandle(52)
	}, 520)
	setTimeout(() => {
		findHandle(53)
	}, 530)
	setTimeout(() => {
		findHandle(54)
	}, 540)
	setTimeout(() => {
		findHandle(55)
	}, 550)
	setTimeout(() => {
		findHandle(56)
	}, 560)
	setTimeout(() => {
		findHandle(57)
	}, 570)
	setTimeout(() => {
		findHandle(58)
	}, 580)
	setTimeout(() => {
		findHandle(59)
	}, 590)
	setTimeout(() => {
		findHandle(60)
	}, 600)
	setTimeout(() => {
		findHandle(61)
	}, 610)
	setTimeout(() => {
		findHandle(62)
	}, 620)
	setTimeout(() => {
		findHandle(63)
	}, 630)
	setTimeout(() => {
		findHandle(64)
	}, 640)
	setTimeout(() => {
		findHandle(65)
	}, 650)
	setTimeout(() => {
		findHandle(66)
	}, 660)
	setTimeout(() => {
		findHandle(67)
	}, 670)
	setTimeout(() => {
		findHandle(68)
	}, 680)
	setTimeout(() => {
		findHandle(69)
	}, 690)
	setTimeout(() => {
		findHandle(70)
	}, 700)
	setTimeout(() => {
		findHandle(71)
	}, 710)
	setTimeout(() => {
		findHandle(72)
	}, 720)
	setTimeout(() => {
		findHandle(73)
	}, 730)
	setTimeout(() => {
		findHandle(74)
	}, 740)
	setTimeout(() => {
		findHandle(75)
	}, 750)
	setTimeout(() => {
		findHandle(76)
	}, 760)
	setTimeout(() => {
		findHandle(77)
	}, 770)
	setTimeout(() => {
		findHandle(78)
	}, 780)
	setTimeout(() => {
		findHandle(79)
	}, 790)
	setTimeout(() => {
		findHandle(80)
	}, 800)
	setTimeout(() => {
		findHandle(81)
	}, 810)
	setTimeout(() => {
		findHandle(82)
	}, 820)
	setTimeout(() => {
		findHandle(83)
	}, 830)
	setTimeout(() => {
		findHandle(84)
	}, 840)
	setTimeout(() => {
		findHandle(85)
	}, 850)
	setTimeout(() => {
		findHandle(86)
	}, 860)
	setTimeout(() => {
		findHandle(87)
	}, 870)
	setTimeout(() => {
		findHandle(88)
	}, 880)
	setTimeout(() => {
		findHandle(89)
	}, 890)
	setTimeout(() => {
		findHandle(90)
	}, 900)
	setTimeout(() => {
		findHandle(91)
	}, 910)
	setTimeout(() => {
		findHandle(92)
	}, 920)
	setTimeout(() => {
		findHandle(93)
	}, 930)
	setTimeout(() => {
		findHandle(94)
	}, 940)
	setTimeout(() => {
		findHandle(95)
	}, 950)
	setTimeout(() => {
		findHandle(96)
	}, 960)
	setTimeout(() => {
		findHandle(97)
	}, 970)
	setTimeout(() => {
		findHandle(98)
	}, 980)
	setTimeout(() => {
		findHandle(99)
	}, 990)
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
				font-size: 12rpx;
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
			width: 75%;
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
				padding-left: 10rpx;
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
