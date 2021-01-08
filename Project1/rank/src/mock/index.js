import Mock from 'mockjs'

Mock.mock('/api/service/home', res => {
    return {
        "result": "0",
        "resultNote": "请求成功",
        "rankCategoryList": [{
            "name": "推荐",
            "id": "0"
        }, {
            "name": "生活",
            "id": "f377304d1ac5412aa8419095b10dd36e"
        }, {
            "name": "学校",
            "id": "1f3bb19f9c0e4c8f9efeddc0c565c513"
        }, {
            "name": "数码",
            "id": "dc66207b6add4e5ba78c64a16f70fb25"
        }, {
            "name": "竞技",
            "id": "03511751efb1456abdc8c2d0900ffc49"
        }, {
            "name": "商业",
            "id": "0c4109dc8b11454e89e83a169da80bd2"
        }, {
            "name": "汽车",
            "id": "0f1df8f2112248c8ac64c794d5847409"
        }, {
            "name": "影音",
            "id": "a4b40a1137864cd0ababcaf44f4a65ac"
        }, {
            "name": "其他",
            "id": "6c271aa471d141e09781797acfe4eeb8"
        }]
    }
})