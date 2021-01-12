import {action, observable} from 'mobx'

class Global{
    @observable
    isShow = false;

    @action
    showLoading(){
        this.isShow = true;
    }

    @action 
    hideLoading(){
        this.isShow = false;
    }
}

export default Global;