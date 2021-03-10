<template>
  <div>
    <swiper
      indicator-dots="true"
      indicator-color="#C6226A"
      indicator-active-color="#EA2D80"
      autoplay="true"
	  circular="true"
    >
      <block v-for="item in carousel" :key="item.brandCode">
        <swiper-item>
          <!-- <img :src="item.brandImg" mode="widthFix" @click="clickBanner(item.brandUrl)"/> -->
          <img :src="item.brandImg" mode="widthFix" @click="e=>clickBanner"/>
          <img :src="item.brandImg" mode="widthFix" @click="e=>clickBanner(item.brandUrl)"/>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  computed: {
	...mapState({
		carousel: state=>state.index.carousel
	})
  },	
  methods: {
	...mapActions({
		getCarousel: 'index/getCarousel'
	}),
	clickBanner(brandUrl){
		if (brandUrl){
			wx.navigateTo({ url: brandUrl });
		}
	}
  },
  async created() {
    this.getCarousel();
  },
};
</script>

<style scoped>
/*  记住：1rem = 100rpx 跟px的换算比例依赖屏幕宽度的变化 */
	swiper{
		width: 100%;
		height: 490rpx;
	}
	img{
		width: 100%;
	}
</style>