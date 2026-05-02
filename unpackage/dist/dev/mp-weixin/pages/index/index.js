"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const num = common_vendor.ref("");
    const arr1 = common_vendor.ref([]);
    const arr2 = common_vendor.ref([]);
    const arr3 = common_vendor.ref([]);
    const arr4 = common_vendor.ref([]);
    const arr5 = common_vendor.ref([]);
    const arr6 = common_vendor.ref([]);
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const oneMax = common_vendor.ref(-1);
    const oneMax2 = common_vendor.ref(-1);
    const oneMax3 = common_vendor.ref(-1);
    const oneMin = common_vendor.ref(-1);
    const oneMin2 = common_vendor.ref(-1);
    const twoMax = common_vendor.ref(-1);
    const twoMax2 = common_vendor.ref(-1);
    const twoMax3 = common_vendor.ref(-1);
    const twoMin = common_vendor.ref(-1);
    const twoMin2 = common_vendor.ref(-1);
    const threeMax = common_vendor.ref(-1);
    const threeMax2 = common_vendor.ref(-1);
    const threeMax3 = common_vendor.ref(-1);
    const threeMin = common_vendor.ref(-1);
    const threeMin2 = common_vendor.ref(-1);
    const fourMax = common_vendor.ref(-1);
    const fourMax2 = common_vendor.ref(-1);
    const fourMax3 = common_vendor.ref(-1);
    const fourMin = common_vendor.ref(-1);
    const fourMin2 = common_vendor.ref(-1);
    const fiveMax = common_vendor.ref(-1);
    const fiveMax2 = common_vendor.ref(-1);
    const fiveMax3 = common_vendor.ref(-1);
    const fiveMin = common_vendor.ref(-1);
    const fiveMin2 = common_vendor.ref(-1);
    const sixMax = common_vendor.ref(-1);
    const sixMax2 = common_vendor.ref(-1);
    const sixMax3 = common_vendor.ref(-1);
    const sixMin = common_vendor.ref(-1);
    const sixMin2 = common_vendor.ref(-1);
    const oneAmountMax = common_vendor.ref(-1);
    const oneAmountMin = common_vendor.ref(-1);
    const twoAmountMax = common_vendor.ref(-1);
    const twoAmountMin = common_vendor.ref(-1);
    const threeAmountMax = common_vendor.ref(-1);
    const threeAmountMin = common_vendor.ref(-1);
    const fourAmountMax = common_vendor.ref(-1);
    const fourAmountMin = common_vendor.ref(-1);
    const fiveAmountMax = common_vendor.ref(-1);
    const fiveAmountMin = common_vendor.ref(-1);
    const sixAmountMax = common_vendor.ref(-1);
    const sixAmountMin = common_vendor.ref(-1);
    const orderNumber1 = common_vendor.ref(0);
    const oneMaxLast = common_vendor.ref(-1);
    const oneMax2Last = common_vendor.ref(-1);
    const oneMax3Last = common_vendor.ref(-1);
    const oneMinLast = common_vendor.ref(-1);
    const oneMin2Last = common_vendor.ref(-1);
    const oneAmountMaxLast = common_vendor.ref(-1);
    const oneAmountMinLast = common_vendor.ref(-1);
    const orderNumber2 = common_vendor.ref(0);
    const twoMaxLast = common_vendor.ref(-1);
    const twoMax2Last = common_vendor.ref(-1);
    const twoMax3Last = common_vendor.ref(-1);
    const twoMinLast = common_vendor.ref(-1);
    const twoMin2Last = common_vendor.ref(-1);
    const twoAmountMaxLast = common_vendor.ref(-1);
    const twoAmountMinLast = common_vendor.ref(-1);
    const orderNumber3 = common_vendor.ref(0);
    const threeMaxLast = common_vendor.ref(-1);
    const threeMax2Last = common_vendor.ref(-1);
    const threeMax3Last = common_vendor.ref(-1);
    const threeMinLast = common_vendor.ref(-1);
    const threeMin2Last = common_vendor.ref(-1);
    const threeAmountMaxLast = common_vendor.ref(-1);
    const threeAmountMinLast = common_vendor.ref(-1);
    const orderNumber4 = common_vendor.ref(0);
    const fourMaxLast = common_vendor.ref(-1);
    const fourMax2Last = common_vendor.ref(-1);
    const fourMax3Last = common_vendor.ref(-1);
    const fourMinLast = common_vendor.ref(-1);
    const fourMin2Last = common_vendor.ref(-1);
    const fourAmountMaxLast = common_vendor.ref(-1);
    const fourAmountMinLast = common_vendor.ref(-1);
    const orderNumber5 = common_vendor.ref(0);
    const fiveMaxLast = common_vendor.ref(-1);
    const fiveMax2Last = common_vendor.ref(-1);
    const fiveMax3Last = common_vendor.ref(-1);
    const fiveMinLast = common_vendor.ref(-1);
    const fiveMin2Last = common_vendor.ref(-1);
    const fiveAmountMaxLast = common_vendor.ref(-1);
    const fiveAmountMinLast = common_vendor.ref(-1);
    const orderNumber6 = common_vendor.ref(0);
    const sixMaxLast = common_vendor.ref(-1);
    const sixMax2Last = common_vendor.ref(-1);
    const sixMax3Last = common_vendor.ref(-1);
    const sixMinLast = common_vendor.ref(-1);
    const sixMin2Last = common_vendor.ref(-1);
    const sixAmountMaxLast = common_vendor.ref(-1);
    const sixAmountMinLast = common_vendor.ref(-1);
    common_vendor.onLoad(() => {
      getData();
      setTimeout(() => {
        findHandle(0);
      }, 0);
      setTimeout(() => {
        findHandle(1);
      }, 100);
      setTimeout(() => {
        findHandle(2);
      }, 200);
      setTimeout(() => {
        findHandle(3);
      }, 300);
      setTimeout(() => {
        findHandle(4);
      }, 400);
      setTimeout(() => {
        findHandle(5);
      }, 500);
    });
    function setValueHandle() {
      if (typeof num.value[0] != "undefined" && typeof num.value[1] != "undefined" && typeof num.value[2] != "undefined" && typeof num.value[3] != "undefined" && typeof num.value[4] != "undefined" && typeof num.value[5] != "undefined") {
        arr1.value.unshift(num.value[0]);
        arr2.value.unshift(num.value[1]);
        arr3.value.unshift(num.value[2]);
        arr4.value.unshift(num.value[3]);
        arr5.value.unshift(num.value[4]);
        arr6.value.unshift(num.value[5]);
        if (arr1.value.length > 20) {
          arr1.value.pop();
        }
        if (arr2.value.length > 20) {
          arr2.value.pop();
        }
        if (arr3.value.length > 20) {
          arr3.value.pop();
        }
        if (arr4.value.length > 20) {
          arr4.value.pop();
        }
        if (arr5.value.length > 20) {
          arr5.value.pop();
        }
        if (arr6.value.length > 20) {
          arr6.value.pop();
        }
        num.value = "";
        setStorage();
        setTimeout(() => {
          findHandle(0);
        }, 0);
        setTimeout(() => {
          findHandle(1);
        }, 100);
        setTimeout(() => {
          findHandle(2);
        }, 200);
        setTimeout(() => {
          findHandle(3);
        }, 300);
        setTimeout(() => {
          findHandle(4);
        }, 400);
        setTimeout(() => {
          findHandle(5);
        }, 500);
      }
    }
    function clearValueHandle() {
      arr1.value.shift();
      arr2.value.shift();
      arr3.value.shift();
      arr4.value.shift();
      arr5.value.shift();
      arr6.value.shift();
      setStorage();
      findHandle(0);
      findHandle(1);
      findHandle(2);
      findHandle(3);
      findHandle(4);
      findHandle(5);
    }
    function setStorage() {
      common_vendor.index.setStorageSync("arr1", JSON.stringify(arr1.value));
      common_vendor.index.setStorageSync("arr2", JSON.stringify(arr2.value));
      common_vendor.index.setStorageSync("arr3", JSON.stringify(arr3.value));
      common_vendor.index.setStorageSync("arr4", JSON.stringify(arr4.value));
      common_vendor.index.setStorageSync("arr5", JSON.stringify(arr5.value));
      common_vendor.index.setStorageSync("arr6", JSON.stringify(arr6.value));
    }
    function getData() {
      if (common_vendor.index.getStorageSync("arr1")) {
        arr1.value = JSON.parse(common_vendor.index.getStorageSync("arr1"));
        arr2.value = JSON.parse(common_vendor.index.getStorageSync("arr2"));
        arr3.value = JSON.parse(common_vendor.index.getStorageSync("arr3"));
        arr4.value = JSON.parse(common_vendor.index.getStorageSync("arr4"));
        arr5.value = JSON.parse(common_vendor.index.getStorageSync("arr5"));
        arr6.value = JSON.parse(common_vendor.index.getStorageSync("arr6"));
      }
    }
    function findMaxMin(arr) {
      let number = [...new Set(arr)];
      let arrstr = arr.join("");
      let countarr = [];
      for (let i = 0; i < number.length; i++) {
        let count = arrstr.split(number[i]).length - 1;
        countarr.push(count);
      }
      return {
        max: number[countarr.indexOf(Math.max.apply(null, countarr))],
        min: number[countarr.indexOf(Math.min.apply(null, countarr))]
      };
    }
    function findHandle(index) {
      let arr = [];
      if (index == 0) {
        arr = JSON.parse(JSON.stringify(arr1.value));
      } else if (index == 1) {
        arr = JSON.parse(JSON.stringify(arr2.value));
      } else if (index == 2) {
        arr = JSON.parse(JSON.stringify(arr3.value));
      } else if (index == 3) {
        arr = JSON.parse(JSON.stringify(arr4.value));
      } else if (index == 4) {
        arr = JSON.parse(JSON.stringify(arr5.value));
      } else if (index == 5) {
        arr = JSON.parse(JSON.stringify(arr6.value));
      }
      let arrRes = [];
      for (let i = 0; i < 10; i++) {
        arrRes.push(find(arr, i.toString()));
      }
      let max = Math.max(...arrRes);
      let index1 = arrRes.map((item) => item).indexOf(max);
      let temp = arrRes[index1];
      arrRes[index1] = -1;
      let max2 = Math.max(...arrRes);
      let index2 = arrRes.map((item) => item).indexOf(max2);
      let temp2 = arrRes[index2];
      arrRes[index2] = -1;
      let max3 = Math.max(...arrRes);
      let index3 = arrRes.map((item) => item).indexOf(max3);
      arrRes[index1] = temp;
      arrRes[index2] = temp2;
      let min = Math.min(...arrRes);
      let index4 = arrRes.map((item) => item).indexOf(min);
      let temp3 = arrRes[index4];
      arrRes[index4] = 21;
      let min2 = Math.min(...arrRes);
      let index5 = arrRes.map((item) => item).indexOf(min2);
      arrRes[index4] = temp3;
      let objMaxMin = findMaxMin(arr);
      if (index == 0) {
        if (arr[0] != oneMaxLast.value && arr[0] != oneMax2Last.value && arr[0] != oneMax3Last.value && arr[0] != oneMinLast.value && arr[0] != oneMin2Last.value && arr[0] != oneAmountMaxLast.value && arr[0] != oneAmountMinLast.value) {
          orderNumber1.value = 0;
        } else {
          orderNumber1.value++;
        }
        oneMax.value = index1;
        oneMax2.value = index2;
        oneMax3.value = index3;
        oneMin.value = index4;
        oneMin2.value = index5;
        oneAmountMax.value = objMaxMin.max;
        oneAmountMin.value = objMaxMin.min;
        oneMaxLast.value = oneMax.value;
        oneMax2Last.value = oneMax2.value;
        oneMax3Last.value = oneMax3.value;
        oneMinLast.value = oneMin.value;
        oneMin2Last.value = oneMin2.value;
        oneAmountMaxLast.value = oneAmountMax.value;
        oneAmountMinLast.value = oneAmountMin.value;
        common_vendor.index.__f__("log", "at pages/index/index.vue:376", orderNumber1.value);
      }
      if (index == 1) {
        if (arr[0] != twoMaxLast.value && arr[0] != twoMax2Last.value && arr[0] != twoMax3Last.value && arr[0] != twoMinLast.value && arr[0] != twoMin2Last.value && arr[0] != twoAmountMaxLast.value && arr[0] != twoAmountMinLast.value) {
          orderNumber2.value = 0;
        } else {
          orderNumber2.value++;
        }
        twoMax.value = index1;
        twoMax2.value = index2;
        twoMax3.value = index3;
        twoMin.value = index4;
        twoMin2.value = index5;
        twoAmountMax.value = objMaxMin.max;
        twoAmountMin.value = objMaxMin.min;
        twoMaxLast.value = twoMax.value;
        twoMax2Last.value = twoMax2.value;
        twoMax3Last.value = twoMax3.value;
        twoMinLast.value = twoMin.value;
        twoMin2Last.value = twoMin2.value;
        twoAmountMaxLast.value = twoAmountMax.value;
        twoAmountMinLast.value = twoAmountMin.value;
        common_vendor.index.__f__("log", "at pages/index/index.vue:401", orderNumber2.value);
        return;
      }
      if (index == 2) {
        common_vendor.index.__f__("log", "at pages/index/index.vue:407", arr[0], "arr[0");
        common_vendor.index.__f__("log", "at pages/index/index.vue:408", threeMaxLast.value, "threeMaxLast.value");
        common_vendor.index.__f__("log", "at pages/index/index.vue:409", threeMax2Last.value, "threeMax2Last.value");
        common_vendor.index.__f__("log", "at pages/index/index.vue:410", threeMax3Last.value, "threeMax3Last.value");
        common_vendor.index.__f__("log", "at pages/index/index.vue:411", threeMinLast.value, "threeMinLast.value");
        common_vendor.index.__f__("log", "at pages/index/index.vue:412", threeMin2Last.value, "threeMin2Last.value");
        common_vendor.index.__f__("log", "at pages/index/index.vue:413", threeAmountMaxLast.value, "threeAmountMaxLast.value");
        common_vendor.index.__f__("log", "at pages/index/index.vue:414", threeAmountMinLast.value, "threeAmountMinLast.value");
        if (arr[0] != threeMaxLast.value && arr[0] != threeMax2Last.value && arr[0] != threeMax3Last.value && arr[0] != threeMinLast.value && arr[0] != threeMin2Last.value && arr[0] != threeAmountMaxLast.value && arr[0] != threeAmountMinLast.value) {
          orderNumber3.value = 0;
        } else {
          orderNumber3.value++;
        }
        threeMax.value = index1;
        threeMax2.value = index2;
        threeMax3.value = index3;
        threeMin.value = index4;
        threeMin2.value = index5;
        threeAmountMax.value = objMaxMin.max;
        threeAmountMin.value = objMaxMin.min;
        threeMaxLast.value = threeMax.value;
        threeMax2Last.value = threeMax2.value;
        threeMax3Last.value = threeMax3.value;
        threeMinLast.value = threeMin.value;
        threeMin2Last.value = threeMin2.value;
        threeAmountMaxLast.value = threeAmountMax.value;
        threeAmountMinLast.value = threeAmountMin.value;
        common_vendor.index.__f__("log", "at pages/index/index.vue:435", orderNumber3.value);
        return;
      }
      if (index == 3) {
        if (arr[0] != fourMaxLast.value && arr[0] != fourMax2Last.value && arr[0] != fourMax3Last.value && arr[0] != fourMinLast.value && arr[0] != fourMin2Last.value && arr[0] != fourAmountMaxLast.value && arr[0] != fourAmountMinLast.value) {
          orderNumber4.value = 0;
        } else {
          orderNumber4.value++;
        }
        fourMax.value = index1;
        fourMax2.value = index2;
        fourMax3.value = index3;
        fourMin.value = index4;
        fourMin2.value = index5;
        fourAmountMax.value = objMaxMin.max;
        fourAmountMin.value = objMaxMin.min;
        fourMaxLast.value = fourMax.value;
        fourMax2Last.value = fourMax2.value;
        fourMax3Last.value = fourMax3.value;
        fourMinLast.value = fourMin.value;
        fourMin2Last.value = fourMin2.value;
        fourAmountMaxLast.value = fourAmountMax.value;
        fourAmountMinLast.value = fourAmountMin.value;
        common_vendor.index.__f__("log", "at pages/index/index.vue:460", orderNumber4.value);
        return;
      }
      if (index == 4) {
        if (arr[0] != fiveMaxLast.value && arr[0] != fiveMax2Last.value && arr[0] != fiveMax3Last.value && arr[0] != fiveMinLast.value && arr[0] != fiveMin2Last.value && arr[0] != fiveAmountMaxLast.value && arr[0] != fiveAmountMinLast.value) {
          orderNumber5.value = 0;
        } else {
          orderNumber5.value++;
        }
        fiveMax.value = index1;
        fiveMax2.value = index2;
        fiveMax3.value = index3;
        fiveMin.value = index4;
        fiveMin2.value = index5;
        fiveAmountMax.value = objMaxMin.max;
        fiveAmountMin.value = objMaxMin.min;
        fiveMaxLast.value = fiveMax.value;
        fiveMax2Last.value = fiveMax2.value;
        fiveMax3Last.value = fiveMax3.value;
        fiveMinLast.value = fiveMin.value;
        fiveMin2Last.value = fiveMin2.value;
        fiveAmountMaxLast.value = fiveAmountMax.value;
        fiveAmountMinLast.value = fiveAmountMin.value;
        common_vendor.index.__f__("log", "at pages/index/index.vue:485", orderNumber5.value);
        return;
      }
      if (index == 5) {
        if (arr[0] != sixMaxLast.value && arr[0] != sixMax2Last.value && arr[0] != sixMax3Last.value && arr[0] != sixMinLast.value && arr[0] != sixMin2Last.value && arr[0] != sixAmountMaxLast.value && arr[0] != sixAmountMinLast.value) {
          orderNumber6.value = 0;
        } else {
          orderNumber6.value++;
        }
        sixMax.value = index1;
        sixMax2.value = index2;
        sixMax3.value = index3;
        sixMin.value = index4;
        sixMin2.value = index5;
        sixAmountMax.value = objMaxMin.max;
        sixAmountMin.value = objMaxMin.min;
        sixMaxLast.value = sixMax.value;
        sixMax2Last.value = sixMax2.value;
        sixMax3Last.value = sixMax3.value;
        sixMinLast.value = sixMin.value;
        sixMin2Last.value = sixMin2.value;
        sixAmountMaxLast.value = sixAmountMax.value;
        sixAmountMinLast.value = sixAmountMin.value;
        common_vendor.index.__f__("log", "at pages/index/index.vue:510", orderNumber6.value);
        return;
      }
    }
    function find(arr, item) {
      let res = arr.indexOf(item);
      if (res == -1) {
        return arr.length;
      }
      return res;
    }
    return (_ctx, _cache) => {
      return {
        a: num.value,
        b: common_vendor.o(($event) => num.value = $event.detail.value),
        c: common_vendor.o(setValueHandle),
        d: common_vendor.o(clearValueHandle),
        e: common_vendor.f(arr1.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(index == arr1.value.length - 1 ? "item end" : "item"),
            c: index
          };
        }),
        f: common_vendor.f(arr2.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(index == arr2.value.length - 1 ? "item end" : "item"),
            c: index
          };
        }),
        g: common_vendor.f(arr3.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(index == arr3.value.length - 1 ? "item end" : "item"),
            c: index
          };
        }),
        h: common_vendor.f(arr4.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(index == arr4.value.length - 1 ? "item end" : "item"),
            c: index
          };
        }),
        i: common_vendor.f(arr5.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(index == arr5.value.length - 1 ? "item end" : "item"),
            c: index
          };
        }),
        j: common_vendor.f(arr6.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(index == arr6.value.length - 1 ? "item end" : "item"),
            c: index
          };
        }),
        k: common_vendor.t(orderNumber1.value),
        l: common_vendor.t(orderNumber2.value),
        m: common_vendor.t(orderNumber3.value),
        n: common_vendor.t(orderNumber4.value),
        o: common_vendor.t(orderNumber5.value),
        p: common_vendor.t(orderNumber6.value),
        q: common_vendor.f(numArr, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.n(index != oneMax.value && index != oneMax2.value && index != oneMax3.value && index != oneMin.value && index != oneMin2.value && index != oneAmountMax.value && index != oneAmountMin.value ? "item active" : "item"),
            c: index
          };
        }),
        r: common_vendor.f(numArr, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.n(index != twoMax.value && index != twoMax2.value && index != twoMax3.value && index != twoMin.value && index != twoMin2.value && index != twoAmountMax.value && index != twoAmountMax.value ? "item active" : "item"),
            c: index
          };
        }),
        s: common_vendor.f(numArr, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.n(index != threeMax.value && index != threeMax2.value && index != threeMax3.value && index != threeMin.value && index != threeMin2.value && index != threeAmountMax.value && index != threeAmountMin.value ? "item active" : "item"),
            c: index
          };
        }),
        t: common_vendor.f(numArr, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.n(index != fourMax.value && index != fourMax2.value && index != fourMax3.value && index != fourMin.value && index != fourMin2.value && index != fourAmountMax.value && index != fourAmountMin.value ? "item active" : "item"),
            c: index
          };
        }),
        v: common_vendor.f(numArr, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.n(index != fiveMax.value && index != fiveMax2.value && index != fiveMax3.value && index != fiveMin.value && index != fiveMin2.value && index != fiveAmountMax.value && index != fiveAmountMin.value ? "item active" : "item"),
            c: index
          };
        }),
        w: common_vendor.f(numArr, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.n(index != sixMax.value && index != sixMax2.value && index != sixMax3.value && index != sixMin.value && index != sixMin2.value && index != sixAmountMax.value && index != sixAmountMin.value ? "item active" : "item"),
            c: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
