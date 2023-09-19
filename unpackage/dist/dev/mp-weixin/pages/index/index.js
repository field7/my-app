"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const num = common_vendor.ref("");
    const arr1 = common_vendor.ref([]);
    const arr2 = common_vendor.ref([]);
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
    const oneAmountMax = common_vendor.ref(-1);
    const oneAmountMin = common_vendor.ref(-1);
    const twoAmountMax = common_vendor.ref(-1);
    const twoAmountMin = common_vendor.ref(-1);
    common_vendor.onLoad(() => {
      getData();
      findHandle(0);
      findHandle(1);
    });
    function setValueHandle() {
      if (typeof num.value[0] != "undefined" && typeof num.value[1] != "undefined") {
        arr1.value.unshift(num.value[0]);
        arr2.value.unshift(num.value[1]);
        if (arr1.value.length > 20) {
          arr1.value.pop();
        }
        if (arr2.value.length > 20) {
          arr2.value.pop();
        }
        num.value = "";
        setStorage();
        findHandle(0);
        findHandle(1);
      }
    }
    function clearValueHandle() {
      arr1.value.shift();
      arr2.value.shift();
      setStorage();
      findHandle(0);
      findHandle(1);
    }
    function setStorage() {
      common_vendor.index.setStorageSync("arr1", JSON.stringify(arr1.value));
      common_vendor.index.setStorageSync("arr2", JSON.stringify(arr2.value));
    }
    function getData() {
      if (common_vendor.index.getStorageSync("arr1")) {
        arr1.value = JSON.parse(common_vendor.index.getStorageSync("arr1"));
        arr2.value = JSON.parse(common_vendor.index.getStorageSync("arr2"));
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
        arr = arr1.value;
      } else {
        arr = arr2.value;
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
        oneMax.value = index1;
        oneMax2.value = index2;
        oneMax3.value = index3;
        oneMin.value = index4;
        oneMin2.value = index5;
        oneAmountMax.value = objMaxMin.max;
        oneAmountMin.value = objMaxMin.min;
        if (oneMin2.value == oneAmountMin.value) {
          oneMin2.value = oneAmountMax.value;
        }
        if (oneMax.value == oneAmountMin.value) {
          oneMax.value = oneMax2.value;
        }
      } else {
        twoMax.value = index1;
        twoMax2.value = index2;
        twoMax3.value = index3;
        twoMin.value = index4;
        twoMin2.value = index5;
        twoAmountMax.value = objMaxMin.max;
        twoAmountMin.value = objMaxMin.min;
        if (twoMin2.value == twoAmountMin.value) {
          twoMin2.value = twoAmountMax.value;
        }
        if (twoMax.value == twoAmountMin.value) {
          twoMax.value = twoMax2.value;
        }
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
        g: common_vendor.f(numArr, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.n(index == oneMax.value || index == oneMin2.value || index == oneAmountMin.value ? "item active" : "item"),
            c: index
          };
        }),
        h: common_vendor.f(numArr, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.n(index == twoMax.value || index == twoMin2.value || index == twoAmountMin.value ? "item active" : "item"),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/myProject/my-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
