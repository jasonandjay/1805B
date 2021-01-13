import {action, observable} from 'mobx'
import {getUserInfo, getAuthCode} from '../../services'

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
        if (result){
            this.info = result.data;
        }
    }

    @action
    async sendCode(phone: string){
        let result = await getAuthCode(phone);
        if (result){
            debugger;
        }
    }
}

export default Mine;