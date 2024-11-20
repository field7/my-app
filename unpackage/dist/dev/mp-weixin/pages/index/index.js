"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const num = common_vendor.ref("");
    const arr1 = common_vendor.ref([]);
    const arr2 = common_vendor.ref([]);
    const arr3 = common_vendor.ref([]);
    const result1 = common_vendor.ref([]);
    const result2 = common_vendor.ref([]);
    const result3 = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      getData();
    });
    function setValueHandle() {
      if (typeof num.value[0] != "undefined" && typeof num.value[1] != "undefined" && typeof num.value[2] != "undefined") {
        arr1.value.unshift(num.value[0]);
        arr2.value.unshift(num.value[1]);
        arr3.value.unshift(num.value[2]);
        findHandle();
        setStorage();
        setTimeout(() => {
          num.value = "";
        }, 50);
      }
    }
    function clearValueHandle() {
      arr1.value.shift();
      arr2.value.shift();
      arr3.value.shift();
      result1.value.shift();
      result2.value.shift();
      result3.value.shift();
      setStorage();
    }
    function setStorage() {
      common_vendor.index.setStorageSync("arr1", JSON.stringify(arr1.value));
      common_vendor.index.setStorageSync("arr2", JSON.stringify(arr2.value));
      common_vendor.index.setStorageSync("arr3", JSON.stringify(arr3.value));
    }
    function getData() {
      if (common_vendor.index.getStorageSync("arr1")) {
        arr1.value = JSON.parse(common_vendor.index.getStorageSync("arr1"));
        arr2.value = JSON.parse(common_vendor.index.getStorageSync("arr2"));
        arr3.value = JSON.parse(common_vendor.index.getStorageSync("arr3"));
        arr1.value.forEach((item, index) => {
          num.value = arr1.value[index] + arr2.value[index] + arr3.value[index];
          findHandle(true);
          num.value = "";
        });
      }
    }
    function findHandle(isPush) {
      var _a, _b;
      let sum = Number(num.value[0]) + Number(num.value[1]) + Number(num.value[2]);
      let json = {
        sum,
        isSpecial: false,
        isBao: false
      };
      if (Number(num.value[0]) == Number(num.value[1]) && Number(num.value[0]) == Number(num.value[2])) {
        json.isBao = true;
      }
      if (isPush) {
        if (result1.value.length > 0) {
          if (((_a = result1.value[result1.value.length - 1]) == null ? void 0 : _a.sum) === sum) {
            json.isSpecial = true;
            result1.value[result1.value.length - 1].isSpecial = true;
          }
        }
        result1.value.push(json);
      } else {
        if (result1.value.length > 1) {
          if (((_b = result1.value[0]) == null ? void 0 : _b.sum) === sum) {
            json.isSpecial = true;
            result1.value[0].isSpecial = true;
          }
        }
        result1.value.unshift(json);
      }
      let re2 = "";
      if (sum > 10) {
        re2 = "\u5927";
      } else {
        re2 = "\u5C0F";
      }
      if (isPush) {
        result2.value.push(re2);
      } else {
        result2.value.unshift(re2);
      }
      let re3 = "";
      if (sum % 2 == 0) {
        re3 = "\u53CC";
      } else {
        re3 = "\u5355";
      }
      if (isPush) {
        result3.value.push(re3);
      } else {
        result3.value.unshift(re3);
      }
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
            b: common_vendor.n(index == arr1.value.length - 1 ? "item item1 end" : "item item1"),
            c: index
          };
        }),
        f: common_vendor.f(arr2.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(index == arr2.value.length - 1 ? "item item2 end" : "item item2"),
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
        h: common_vendor.f(result1.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.sum),
            b: index === result1.value.length - 1 ? 1 : "",
            c: index !== result1.value.length - 1 ? 1 : "",
            d: item.isSpecial ? 1 : "",
            e: item.isBao ? 1 : "",
            f: index
          };
        }),
        i: common_vendor.f(result2.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index === result2.value.length - 1 ? 1 : "",
            c: index !== result2.value.length - 1 ? 1 : "",
            d: item === "\u5927" ? 1 : "",
            e: index
          };
        }),
        j: common_vendor.f(result3.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index === result3.value.length - 1 ? 1 : "",
            c: index !== result3.value.length - 1 ? 1 : "",
            d: item === "\u53CC" ? 1 : "",
            e: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/myProject/my-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
