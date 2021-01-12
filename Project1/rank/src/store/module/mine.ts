import {action, observable} from 'mobx'

class Mine{
    @observable
    info = 0

    @action
    setInfo(info){
        this.info = info;
    }
}

export default Mine;