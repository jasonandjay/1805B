import {action, observable} from 'mobx'
import {getUserInfo} from '../../services'

class Mine{
    @observable
    info = 0

    @action
    setInfo(info){
        this.info = info;
    }

    @action 
    async getInfo(){
        let result = await getUserInfo();
        this.info = result.data;
        debugger;
    }
}

export default Mine;