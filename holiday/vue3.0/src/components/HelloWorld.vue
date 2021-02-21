<template>
  <div class="hello">
    <div>
      <span>经度：{{location.coords.latitude}}</span>
      <span>纬度：{{location.coords.longitude}}</span>
    </div>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <button @click="click">+</button>
    <span>{{count}}</span>
    <button @click="click">-</button>
    <p>数组的长度：{{listLength}}</p>
    <ul>
      <li v-for="(item) in obj.list" :key="item">{{item}}</li>
    </ul>
    <p v-show="isLoading">正在加载中...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, toRefs, watch, computed } from 'vue';
import useGeolocation from '@/hooks/useGeolocations.ts';
import {useStore} from 'vuex';

interface Props{
  msg: string;
}
export default defineComponent({
  name: 'HelloWorld',
  props: ['msg'],
  setup(props, context){
    const {msg} = toRefs(props);
    // 定义普通响应式数据
    const count = ref(100);
    const isLoading = ref(false);
    // 定义引用数据类型
    const obj: {list: number []} = reactive({
      list: []
    })

    // 调用钩子
    const {location} = useGeolocation();
    console.log('location...', location);

    // watch的使用
    let stopWatch = watch([location], value=>{
      console.log('value...', value);
    })

    // computed
    const listLength = computed(()=>{
      return obj.list.length;
    })

    // 引入生命周期
    onMounted(()=>{
      for (let i=0;i<10;i++){
        obj.list.push(i);
      }
      window.addEventListener('scroll', function(e: Event){
        if (isLoading.value){
          return;
        }
        const wrapHeight = window.innerHeight,
            contentHeight = document.documentElement.offsetHeight,
            scrollY = window.scrollY;
        if (wrapHeight + scrollY === contentHeight){
          isLoading.value = true;
          console.log('滚动到底部了');
          new Promise((resolve, reject)=>{
            setTimeout(()=>{
              resolve(undefined);
            }, 3000);
          }).then(res=>{
            for (let i=0; i<10; i++){
              obj.list.push(obj.list.length);
            }
          }).then(res=>{
            isLoading.value = false;
          })
        }
      })
    })

    function click(e: MouseEvent){
      const text = (e.target as HTMLElement).innerText;
      if (text === '+'){
        count.value++;
      }else{
        count.value--;
      }
      console.log('e...', e);
    }

    return {
      count,
      isLoading,
      listLength,
      obj,
      click,
      location
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 20px;
  font-size: 20px;
}
a {
  color: #42b983;
}
</style>
