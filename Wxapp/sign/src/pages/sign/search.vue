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
import QQMapWX from '../../utils/qqMap';

export default {
    data(){
        return {
            location: ['北京', '北京']
        }
    },
    created(){
        this.qqMap = new QQMapWX({
            key: 'WCLBZ-Q6L6S-C4NO6-6BPPE-OEV2F-52FGA'
        })
    },
    methods: {
        cityChange(e){
            console.log('e...', e);
            this.location = e.mp.detail.value;
        },
        search(e){
            let keyword = e.target.value;
            this.qqMap.search({
                keyword,
                success: function (res) {
                    console.log(res);
                },
                fail: function (res) {
                    console.log(res);
                },
                complete: function (res) {
                    console.log(res);
                }
        
            })
        }
    }
}
</script>