<template>
    <div>
        <p>面试列表页面</p>    
    </div> 
</template>

<script>
import {getSignList} from '../../services/index'

export default {
    data(){
        return {
            signList: [],
            page: 1
        }
    },
    methods: {
        async getSignList(params = {}){
            let result = await getSignList(params);
            this.signList = result;
            this.page = Math.ceil(result.length/10);
        }
    },
    async onShow(){
        this.getSignList();
    },
    async onPullDownRefresh(){
        await getSignList();
        wx.stopPullDownRefresh();
    },
    async onReachBottom(){
        if (this.page*10 === this.signList.length){
            await getSignList({page: this.page+1})
        }
    },
    onShareAppMessage(){
        return {
            title: '面试列表页',
            path: '/page/sign/list'
        }
    }
}
</script>