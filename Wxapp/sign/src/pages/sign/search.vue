<template>
  <div>
    <header>
      <picker mode="region" :value="location" @change="cityChange">
        <p>{{ location[1] }}</p>
      </picker>
      <input type="text" @input="search" />
    </header>
  </div>
</template>

<script>
import QQMapWX from "../../utils/qqMap";
import { throttle } from "../../utils/index";

export default {
  data() {
    return {
      location: ["北京", "北京"],
    };
  },
  created() {
    this.qqMap = new QQMapWX({
      key: "WCLBZ-Q6L6S-C4NO6-6BPPE-OEV2F-52FGA",
    });
    this.searchKeyowrd = throttle((keyword)=>{
      this.qqMap.search({
        region: this.location[1],
        keyword,
        success: function (res) {
          console.log(res);
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          console.log(res);
        },
      });
    }, 500);
  },
  methods: {
    cityChange(e) {
      console.log("e...", e);
      this.location = e.mp.detail.value;
    },
    search(e) {
      let keyword = e.target.value;
      if (keyword){
        this.searchKeyowrd(keyword);
      }
    },
  },
};
</script>